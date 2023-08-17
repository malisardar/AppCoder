import { Box, Container, Grid } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

import styled from "styled-components";
import { BlackBtn, PurpleBtn } from "../Buttons/ui";

export const Foam = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            background: "#20b7f8",
            height: "700px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            justifyItems: "center",
            paddingX: { xs: "2rem", md: "5rem" },
          }}
        >
          <TextField
            fullWidth
            label="Your Full Name*"
            id="fullWidth"
            sx={{
              marginBottom: "2rem",
              background: "#ffffff",
              borderRadius: "5px",
            }}
          />
          <TextField
            fullWidth
            label="Your Email Address*"
            id="fullWidth"
            sx={{
              marginBottom: "2rem",
              background: "#ffffff",
              borderRadius: "5px",
            }}
          />
          <TextField
            fullWidth
            label="Your Contact Number*"
            id="fullWidth"
            sx={{
              marginBottom: "2rem",
              background: "#ffffff",
              borderRadius: "5px",
            }}
          />
          <TextField
            fullWidth
            label="Some Idea About App"
            id="fullWidth"
            sx={{
              marginBottom: "2rem",
              background: "#ffffff",
              borderRadius: "5px",
            }}
          />

          <BlackBtn
            sx={{
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            Submit
          </BlackBtn>
        </Box>
      </Grid>
    </Grid>
  );
};
