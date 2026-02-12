import { Box, List, ListItem, Typography } from "@mui/material";

const ExperienceEntry = ({ company, role, startDate, endDate, duties }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5">{company}</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="body1">{role}</Typography>
        <Typography variant="body2" color="text.secondary">{startDate} - {endDate}</Typography>
      </Box>
      {duties && <List sx={{ listStyleType: "square", pl: 4 }}>
        {duties.map((duty, index) => (
          <ListItem key={index} sx={{ display: "list-item" }}>
            {duty}
          </ListItem>
        ))}
      </List>}
    </Box>
  );
}

const Experience = () => {
  return (
    <Box sx={{ width: "100%", mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 2, textDecoration: "underline" }}>Experience</Typography>
      <ExperienceEntry
        company="Florida State University"
        role="Computer Lab Assistant"
        startDate="August 2021"
        endDate="May 2022"
        duties={["Assisted students with computer-related issues", "Maintained lab equipment", "Provided technical support"]}
      />
    </Box>
  );
}

export default Experience;