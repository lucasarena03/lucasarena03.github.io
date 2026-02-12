import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Introduction = () => {
  return (
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
  );
}

export default Introduction;