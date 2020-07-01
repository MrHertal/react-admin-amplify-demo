const querystring = require("querystring");
const https = require("https");

const siteSecret = process.env.RECAPTCHA_SITE_SECRET;
const allowLocalhost = process.env.ALLOW_LOCALHOST;

async function verify(responseToken) {
  const postData = querystring.stringify({
    secret: siteSecret,
    response: responseToken,
  });

  const options = {
    hostname: "google.com",
    path: "/recaptcha/api/siteverify",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": postData.length,
    },
  };

  return await new Promise((resolve) => {
    const httpRequest = https.request(options, (result) => {
      result.on("data", (data) => {
        resolve(JSON.parse(data.toString()));
      });
    });

    httpRequest.write(postData);
    httpRequest.end();
  });
}

exports.handler = async (event, context, callback) => {
  const { recaptchaToken } = event.request.validationData;

  if (!recaptchaToken) {
    throw new Error("Recaptcha error");
  }

  const { success, hostname = "" } = await verify(recaptchaToken);

  if (!success) {
    throw new Error("Recaptcha error");
  }

  if (hostname.toLowerCase() === "localhost" && allowLocalhost !== "true") {
    throw new Error("Recaptcha error");
  }

  callback(null, event);
};
