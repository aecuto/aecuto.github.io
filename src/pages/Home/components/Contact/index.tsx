import { Typography } from "@material-ui/core";
import Paper from "components/Paper";

const Contact = () => {
  return (
    <Paper>
      <Typography variant="h5" paragraph>
        Contact
      </Typography>
      <iframe
        title="home"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24210.260998740025!2d99.040830832257!3d18.762411974286604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2f6f2a50e391%3A0xdfa9479d676de0f2!2zMTjCsDQ1JzQ0LjEiTiA5OcKwMDQnMjQuNiJF!5e0!3m2!1sen!2sth!4v1619763066283!5m2!1sen!2sth"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
      />
    </Paper>
  );
};

export default Contact;
