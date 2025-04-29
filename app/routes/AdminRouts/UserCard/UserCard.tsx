import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function UserCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5">Name</Typography>
        <Typography variant="h5">Email</Typography>
        <Typography variant="h5">Phone number</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Full information</Button>
      </CardActions>
    </Card>
  );
}
