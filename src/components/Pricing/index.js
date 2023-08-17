import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { MainPara, SubPara, UIStyledMainHeading2 } from "../UITypo/ui";
import Image from "next/image";
import stars from "../../assets/images/stars.png";
import { PricingBox } from "../PricingBox";

export const Pricing = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "5rem" }}>
      <div sx={{justifyContent:"center",textAlign:"center"}}>
        <UIStyledMainHeading2>
          Clients Simply Love Our Work
        </UIStyledMainHeading2>
        <SubPara variant="p" sx={{textAlign:"center"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum.{" "}
        </SubPara>
      </div>
      <Grid container spacing={3} justifyContent={"space-between"} sx={{marginTop:"5rem"}}> 
        <Grid item xs={4}>
          <PricingBox mainbackground="#6000d6" subbackground="#eeebeb" />
        </Grid>
        <Grid item xs={4}>
          <PricingBox mainbackground="#ff4646" subbackground="#eeebeb" />
        </Grid>
        <Grid item xs={4}>
          <PricingBox mainbackground="#35ac62" subbackground="#eeebeb" />
        </Grid>
      </Grid>
    </Container>
  );
};