import { Button, CardContent, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { API } from "aws-amplify";
import {
  Form,
  required,
  useLogin,
  useNotify,
  useSafeSetState,
  useTranslate,
} from "ra-core";
import { useEffect, useState } from "react";
import { TextInput } from "react-admin";
import { getUser } from "../graphql/queries";

export const LoginForm = (props) => {
  const { redirectTo, className } = props;
  const [loading, setLoading] = useSafeSetState(false);
  const login = useLogin();
  const translate = useTranslate();
  const notify = useNotify();
  const [demoUser, setDemoUser] = useState(null);

  useEffect(() => {
    if (demoUser) {
      return;
    }

    async function getDemoUser() {
      const userData = await API.graphql({
        query: getUser,
        variables: { id: "demo" },
        authMode: "AWS_IAM",
      });

      const { username, password } = userData.data.getUser;

      setDemoUser({ username, password });
    }

    getDemoUser();
  });

  if (!demoUser) {
    return null;
  }

  const submit = (values) => {
    setLoading(true);
    login(values, redirectTo)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        notify(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
            ? "ra.auth.sign_in_error"
            : error.message,
          {
            type: "warning",
            messageArgs: {
              _:
                typeof error === "string"
                  ? error
                  : error && error.message
                  ? error.message
                  : undefined,
            },
          }
        );
      });
  };

  return (
    <StyledForm
      onSubmit={submit}
      mode="onChange"
      noValidate
      className={className}
      defaultValues={demoUser}
    >
      <CardContent className={LoginFormClasses.content}>
        <TextInput
          autoFocus
          source="username"
          label={translate("ra.auth.username")}
          validate={required()}
          fullWidth
        />
        <TextInput
          source="password"
          label={translate("ra.auth.password")}
          type="password"
          autoComplete="current-password"
          validate={required()}
          fullWidth
        />

        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={loading}
          fullWidth
          className={LoginFormClasses.button}
        >
          {loading ? (
            <CircularProgress
              className={LoginFormClasses.icon}
              size={19}
              thickness={3}
            />
          ) : (
            translate("ra.auth.sign_in")
          )}
        </Button>
      </CardContent>
    </StyledForm>
  );
};

const PREFIX = "RaLoginForm";

export const LoginFormClasses = {
  content: `${PREFIX}-content`,
  button: `${PREFIX}-button`,
  icon: `${PREFIX}-icon`,
};

const StyledForm = styled(Form, {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  [`& .${LoginFormClasses.content}`]: {
    width: 300,
  },
  [`& .${LoginFormClasses.button}`]: {
    marginTop: theme.spacing(2),
  },
  [`& .${LoginFormClasses.icon}`]: {
    margin: theme.spacing(0.3),
  },
}));
