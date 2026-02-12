import { Box, Button, Divider, Skeleton, Typography } from "@mui/material";

const ProjectSection = ({ title, description }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 4 }}>
      <Typography variant="h5">{title}</Typography>
      <Skeleton variant="rectangular" width={300} height={300} sx={{ my: 2 }} />
      <Typography variant="body1">{description}</Typography>
      <Button variant="outlined" color="primary" sx={{ mt: 2 }}>Source Code</Button>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Project</Button>
    </Box>
  );
}

const Projects = () => {
  return (
    <Box sx={{ width: "100%", mt: 4, display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" sx={{ mb: 2, textDecoration: "underline" }}>Projects</Typography>
      <ProjectSection title="Project 1" description="Description of project 1 goes here." />
      <Divider orientation="horizontal" flexItem />
      <ProjectSection title="Project 2" description="Description of project 2 goes here." />
    </Box>
  );
}

export default Projects;