import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Contact = () => {
  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 8, textDecoration: "underline" }}>Contact</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "stretch" }}>
        <Link href="mailto:lucasa4585@gmail.com" passHref>
          <Button variant="contained" color="primary" sx={{ fontSize: 24 }}>Email</Button>
        </Link>
        <Link href="https://github.com/lucasarena03" passHref>
          <Button variant="contained" color="github" sx={{ fontSize: 24 }}>GitHub</Button>
        </Link>
        <Link href="https://www.linkedin.com/in/lucas-arena-0a9239249/" passHref>
          <Button variant="contained" color="linkedin" sx={{ fontSize: 24 }}>LinkedIn</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Contact;