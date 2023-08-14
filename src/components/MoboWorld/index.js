import React from "react";
import {
  MainPara,
  SubPara,
  UIStyledMainHeading,
  UIStyledMainHeading2,
  UiList,
} from "../UITypo/ui";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import moboo2 from "../../assets/images/moboo.png";
import { BlueBtn } from "../Buttons/ui";
import { TextBg } from "../TextBg";

export const MoboWorld = () => {
  return (
    <Box sx={{background: "#f7f7f7" , paddingTop:"80px"}}>
      <UIStyledMainHeading2>Seamless Solutions</UIStyledMainHeading2>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <UIStyledMainHeading2
          textAlign="center"
          sx={{ fontWeight: 400, marginRight: "10px" }}
        >
          FOR A
        </UIStyledMainHeading2>
        <UIStyledMainHeading2 textAlign="center" sx={{ color: "#420f60" }}>
          MOBILE WORLD
        </UIStyledMainHeading2>
      </Box>

      <Grid
        container
        sx={{ height: "80vh" }}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Image src={moboo2} height={"auto"} style={{ objectFit: "cover" }} />
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "70%",
          }}
        >
          <SubPara variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed.
          </SubPara>
          <ul>
            <UiList>Experienced App Developers</UiList>
            <UiList>Android & iOS Mobile App Development</UiList>
            <UiList>App Solutions for Startups to Large Enterprises</UiList>
            <UiList>Affordable App Solutions</UiList>
          </ul>
          <BlueBtn sx={{ width: "30%" }}>Get Started</BlueBtn>
        </Grid>
      </Grid>

      <TextBg/>
    </Box>
  );
};
