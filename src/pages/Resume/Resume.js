import React from "react";
import { Grid, Typography } from "@mui/material";

import resumeData from "../../utils/resumeData";
import "./Resume.css";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import { TimelineContent } from "@mui/lab";
import TimelineItem from "@mui/lab/TimelineItem";
import SchoolIcon from "@mui/icons-material/School";
import { Icon } from "@mui/material";
import Paper from "@mui/material/Paper";
import TimelineDot from "@mui/lab/TimelineDot";
import { TextField } from "@mui/material";
import CustomButton from "../../components/Button/Button";

const Resume = () => {
  return (
    <>
      {/*About me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 className="section_title_text">About me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/*Education and experiences */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {" "}
                        {experience.title}{" "}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {" "}
                        {experience.date}{" "}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {" "}
                        {experience.description}{" "}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {" "}
                        {education.title}{" "}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {" "}
                        {education.date}{" "}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {" "}
                        {education.description}{" "}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*Skills*/}
      <Grid container className="section graybg pb_45 p_50">
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {resumeData.skills.slice(0, 2).map((skill) => (
              <Grid item xs={12} sm={6} md={3} key={skill.title}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skills_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element, index) => (
                    <Typography
                      variant="body2"
                      className="skill_description"
                      key={index}
                    >
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/*Contact*/}
      <Grid container spacing={6} className="section pt_45 pb_45">
        {/*Contact form*/}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="Message"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*Contact information*/}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Address: </span> {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Email: </span> {resumeData.email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Phone: </span> {resumeData.phone}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resumeData.socials).map((key) => (
                  <Grid item className="contactInfo_social">
                    <a href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
