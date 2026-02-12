import { Box, Typography, List, ListItem } from "@mui/material";

const EducationEntry = ({ institution, degree, startDate, endDate, awards }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5">{institution}</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="body1">{degree}</Typography>
        <Typography variant="body2" color="text.secondary">{startDate} - {endDate}</Typography>
      </Box>
      {awards && <List sx={{ listStyleType: "square", pl: 4 }}>
        {awards.map((award, index) => (
          <ListItem key={index} sx={{ display: "list-item" }}>
            {award}
          </ListItem>
        ))}
      </List>}
    </Box>
  );
}

const Education = () => {
  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, textDecoration: "underline" }}>Education</Typography>
      <EducationEntry
        institution="Florida Gulf Coast University"
        degree="Bachelors of Arts in Computer Information Systems"
        startDate="August 2022"
        endDate="December 2026"
        awards={["President's List"]}
      />
      <EducationEntry
        institution="Florida State University"
        degree="Associate of Arts"
        startDate="August 2021"
        endDate="May 2022"
      />
    </Box>
  );
}

export default Education;