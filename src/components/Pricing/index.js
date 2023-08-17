import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { MainPara, SubPara, UIStyledMainHeading2 } from "../UITypo/ui";
import Image from "next/image";
import stars from "../../assets/images/stars.webp";
import { PricingBox } from "../PricingBox";

export const Pricing = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "5rem" }}>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={12} md={10}>
          <UIStyledMainHeading2
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
          >
            Clients Simply Love Our Work
          </UIStyledMainHeading2>
          <SubPara textAlign={"center"} variant="body1" data-aos="fade-up" data-aos-duration="2000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum.{" "}
          </SubPara>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        justifyContent={"space-between"}
        sx={{ marginTop: "5rem" }}
      >
        <Grid item xs={12} md={4} data-aos="fade-right" data-aos-duration="2000">
          <PricingBox mainbackground="#6000d6" subbackground="#eeebeb" />
        </Grid>
        <Grid item xs={12} md={4} data-aos="zoom-in" data-aos-duration="2000">
          <PricingBox mainbackground="#ff4646" subbackground="#eeebeb" />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-left" data-aos-duration="2000">
          <PricingBox mainbackground="#35ac62" subbackground="#eeebeb" />
        </Grid>
      </Grid>
    </Container>
  );
};
