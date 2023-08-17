import { Box, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import { MainPara, SubPara, UIStyledMainHeading3 } from "../UITypo/ui";
import stars from "../../assets/images/stars.png";
import testi from "../../assets/images/testi.png";

export const PricingBox = (props) => {
  return (
    <>
      <Box
        sx={{
          background: props.mainbackground,
          borderRadius: "50px 50px 0px 0px",
          height: "200px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Grid container justifyContent='center'>
          <Grid item xs={2} mt={1}>
            <Image src={testi} />
          </Grid>
          <Grid item xs={8}>
            <UIStyledMainHeading3>Sarah Williams</UIStyledMainHeading3>
            <MainPara variant="p">Lorem ipsum dolor sit amet</MainPara>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: props.subbackground,
          height: "auto",
          borderRadius: "0px 0px 50px 50px",
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          fontSize: "15px",
        }}
      >
        <Image src={stars} />
        <SubPara variant="p" pt={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.e et dolore magna aliqua. Quis ipsum suspendisse
          ultrices e et dolore magna aliqua. Quis ipsum suspendisse ultrices{" "}
        </SubPara>
      </Box>
    </>
  );
};
