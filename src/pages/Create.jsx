import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
const Create = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Blog
      </Typography>
      <Button type="submit" color="secondary" variant="contained">
        Submit
      </Button>
    </Container>
  );
};

export default Create;
