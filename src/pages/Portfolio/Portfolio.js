import { Container, DialogActions, DialogTitle, Grid } from "@mui/material";
import React, { useState } from "react";
import Profile from "../../components/Profile/Profile";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Tabs, Tab } from "@mui/material";
import "./Portfolio.css";
import resumeData from "../../utils/resumeData";
import { CardActionArea, Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Grow } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  const handleProjectClick = (project) => {
    // Set the projectDialog state with the project and the first image in the gallery
    setProjectDialog({
      ...project,
      imageIndex: 0, // Index of the first image in the gallery
    });
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>

        <Grid item xs>
          <Header />
          <Grid item className="section_title" xs={12}>
            <span></span>
            <h6 className="section_title_text">Portfolio</h6>
          </Grid>
          {/* Tabs */}
          <Grid item xs={12}>
            <Tabs
              value={tabValue}
              indicatorColor="white"
              className="customTabs"
              onChange={(event, newValue) => setTabValue(newValue)}
            >
              <Tab
                label="All"
                value="All"
                className={
                  tabValue === "All"
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />

              {[...new Set(resumeData.projects.map((item) => item.tag))].map(
                (tag) => (
                  <Tab
                    label={tag}
                    value={tag}
                    className={
                      tabValue === tag
                        ? "customTabs_item active"
                        : "customTabs_item"
                    }
                  />
                )
              )}
            </Tabs>
          </Grid>

          {/* Projects */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {resumeData.projects.map((project) => (
                <>
                  {tabValue === project.tag || tabValue === "All" ? (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Grow in timeout={1000}>
                        <Card
                          className="customCard"
                          onClick={() => handleProjectClick(project)}
                        >
                          <CardActionArea>
                            <CardMedia
                              className="customCard_image"
                              image={project.image}
                              height="140"
                            />
                            <CardContent>
                              <Typography
                                variant="body2"
                                className="customCard_title"
                              >
                                {project.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                className="customCard_caption"
                              >
                                {project.caption}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grow>
                    </Grid>
                  ) : null}
                </>
              ))}
            </Grid>
          </Grid>

          <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
            {projectDialog && (
              <>
                <DialogTitle onClose={() => setProjectDialog(false)}>
                  {projectDialog.title}
                </DialogTitle>
                <DialogContent>
                  <img
                    src={projectDialog.exampleImage}
                    alt=""
                    className="projectDialog_image"
                  />
                  <Typography className="projectDialog_description">
                    {projectDialog.description}
                  </Typography>
                </DialogContent>
                <DialogActions className="projectDialog_actions">
                  {projectDialog.links.map((link) => (
                    <a
                      href={link.link}
                      target="_blank"
                      className="projectDialog_description"
                      key={link.link}
                    >
                      {link.icon}
                    </a>
                  ))}
                </DialogActions>
              </>
            )}
          </Dialog>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
