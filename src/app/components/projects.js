import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = ({ title, description, imageSrc, imageAlt, sourceCodeLink, projectLink }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 4 }}>
      <Typography variant="h5">{title}</Typography>
      <Image src={imageSrc} alt={imageAlt} width={718} height={381} style={{ borderRadius: 8, marginTop: 16, marginBottom: 16 }} />
      <Typography variant="body1" sx={{}}>{description}</Typography>
      <Link href={sourceCodeLink} passHref><Button variant="outlined" color="primary" sx={{ mt: 2 }}>Source Code</Button></Link>
      <Link href={projectLink} passHref><Button variant="contained" color="primary" sx={{ mt: 2 }}>View Project</Button></Link>
    </Box>
  );
}

const Projects = () => {
  return (
    <Box sx={{ width: "100%", mt: 4, display: "flex", flexDirection: "column" }}>
      <Typography variant="h4" sx={{ mb: 2, textDecoration: "underline" }}>Projects</Typography>
      <ProjectSection
        title="Football Game"
        description="A fast-paced arcade-style game where you grab the ball, dodge relentless defenders, and race for the end zone to score as many touchdowns as possible before you're caught. With an escalating challenge, each run tests your reflexes and movement skills while chasing a new high score. Built with the Godot Engine, it runs smoothly on both PC and Android. Unofficially released, but a v0.2 debug APK provided on GitHub."
        imageSrc="/football_game.png"
        imageAlt="Football Game"
        sourceCodeLink="https://github.com/lucasarena03/arcade-game"
        projectLink="https://github.com/lucasarena03/arcade-game/blob/main/Football%20Game.apk"
      />
    </Box>
  );
}

export default Projects;