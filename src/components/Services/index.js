import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { SubPara, UIStyledMainHeading2 } from "../UITypo/ui";

export const Services = () => {
  return (
    <Container>
      <Box sx={{ paddingTop: "80px" }}>
        <UIStyledMainHeading2 data-aos="fade-down" data-aos-duration="2000">SERVICES</UIStyledMainHeading2>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container justifyContent={"center"} data-aos="zoom-in" data-aos-duration="2000">
            <UIStyledMainHeading2
              textAlign="center"
              sx={{ fontWeight: 400, marginRight: "10px" }}
            >
              WE
            </UIStyledMainHeading2>
            <UIStyledMainHeading2 textAlign="center" sx={{ color: "#420f60" }} data-aos="zoom-in" data-aos-duration="2000">
              OFFER
            </UIStyledMainHeading2>

            <SubPara variant="p" textAlign={"center"} data-aos="fade-up" data-aos-duration="2000">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Lorem ipsum.{" "}
            </SubPara>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
