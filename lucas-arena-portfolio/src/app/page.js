import { Box, Button, Container, Divider, List, ListItem, Paper, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", minHeight: "100vh" }}>
      <Paper elevation={1} sx={{ p: 4, mt: 2, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", borderRadius: 8 }}>
        {/* Picture and intro section - will make a component soon */}
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src="/portfolio.png" alt="Portfolio" width={400} height={400} style={{ borderRadius: "40%" }} />
          <Box sx={{ mt: 4, width: "100%", textAlign: "center" }}>
            <Typography variant="h3">Lucas Arena</Typography>
            <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>IT Specialist & Developer</Typography>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              My name is Lucas Arena, and I am an Information Technology Specialist and Developer based in Naples, Florida. I have a passion for both hardware and software development. Listed below is my professional experience, education, certifications, and some of my personal projects.
            </Typography>
          </Box>
        </Box>
        {/* Experience - will make a component soon */}
        <Box sx={{ width: "100%", mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 2, textDecoration: "underline" }}>Experience</Typography>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5">Florida State University</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="body1">Computer Lab Tech</Typography>
              <Typography variant="body2" color="text.secondary">Start Date - End Date</Typography>
            </Box>
            <List sx={{ listStyleType: "square", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                Job duties and stuff
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Put more bullet points
              </ListItem>
            </List>
          </Box>
        </Box>
        <Divider orientation="horizontal" flexItem />
        {/* Education - will make a component soon */}
        <Box sx={{ width: "100%", mt: 4 }}>
          <Typography variant="h4" sx={{ mb: 2, textDecoration: "underline" }}>Education</Typography>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5">Florida Gulf Coast University</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="body1">B.S. in Computer Information Systems</Typography>
              <Typography variant="body2" color="text.secondary">Start Date - End Date</Typography>
            </Box>
            <List sx={{ listStyleType: "square", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                Any awards or other (e.g. President's List)
              </ListItem>
            </List>
          </Box>
        </Box>
        <Divider orientation="horizontal" flexItem />
        <Box sx={{ width: "100%", mt: 4, display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" sx={{ mb: 2, textDecoration: "underline" }}>Projects</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 4 }}>
            <Typography variant="h5">Project Title</Typography>
            <Skeleton variant="rectangular" width={300} height={300} sx={{ my: 2 }} />
            <Typography variant="body1">Description of the project goes here</Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>Source Code</Button>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Project</Button>
          </Box>
          <Divider orientation="horizontal" flexItem />
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 4 }}>
            <Typography variant="h5">Project Title</Typography>
            <Skeleton variant="rectangular" width={300} height={300} sx={{ my: 2 }} />
            <Typography variant="body1">Description of the project goes here</Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>Source Code</Button>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Project</Button>
          </Box>
        </Box>
        <Divider orientation="horizontal" flexItem />
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
      </Paper>
    </Container>
  );
};

export default Home;
