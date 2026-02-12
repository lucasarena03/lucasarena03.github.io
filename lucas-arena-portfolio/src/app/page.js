import { Box, Container, List, ListItem, Skeleton, Typography } from "@mui/material";
import Image from "next/image";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", minHeight: "100vh" }}>
      <Box sx={{ mx: 4, mt: 8, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Picture and intro section */}
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Skeleton variant="circular" width={300} height={300} />
          <Box sx={{ mt: 4, width: "100%", textAlign: "center" }}>
            <Typography variant="h3">Lucas Arena</Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>IT Specialist & Developer</Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              My name is Lucas Arena, and I am an Information Technology Specialist and Developer based in Naples, Florida. I have a passion for both hardware and software development. Listed below is my professional experience, education, certifications, and some of my personal projects.
            </Typography>
          </Box>
        </Box>
      {/* Experience */}
        <Box sx={{ width: "100%", mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>Experience</Typography>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6">Computer Lab Tech</Typography>
            <Typography variant="body2" color="text.secondary">Start Date - End Date</Typography>
            <List sx={{}}>
              <ListItem>
                <Typography variant="body1">
                  Did some stuff in a lab. Expand upon this Luke idk what else to put here.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  Put more bullet points.
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
