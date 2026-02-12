import { Box, Button, Container, Divider, List, ListItem, Paper, Skeleton, Typography } from "@mui/material";
import Introduction from "./components/introduction";
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/projects";
import Contact from "./components/contact";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", minHeight: "100vh" }}>
      <Paper elevation={1} sx={{ p: 4, mt: 2, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", borderRadius: 8 }}>
        <Introduction />
        <Experience />
        <Divider orientation="horizontal" flexItem />
        <Education />
        <Divider orientation="horizontal" flexItem />
        <Projects />
        <Divider orientation="horizontal" flexItem />
        <Contact />
      </Paper>
    </Container>
  );
};

export default Home;
