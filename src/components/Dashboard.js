import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Title } from "react-admin";

export const Dashboard = () => (
  <Card>
    <Title title="React Admin Amplify Demo" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Welcome!
      </Typography>
      <br />
      <Typography variant="body2" color="textSecondary" component="p">
        This demo is powered by{" "}
        <Link href="https://marmelab.com/react-admin/Readme.html">
          react-admin
        </Link>{" "}
        and <Link href="https://docs.amplify.aws">Amplify</Link>.
      </Typography>
      <br />
      <Typography variant="body2" color="textSecondary" component="p">
        It aims to demonstrate the use of{" "}
        <Link href="https://github.com/MrHertal/react-admin-amplify">
          React Admin Amplify
        </Link>
        .
      </Typography>
      <br />
      <Typography variant="body2" color="textSecondary" component="p">
        Code source is available{" "}
        <Link href="https://github.com/MrHertal/react-admin-amplify-demo">
          here
        </Link>
        .
      </Typography>
    </CardContent>
  </Card>
);
