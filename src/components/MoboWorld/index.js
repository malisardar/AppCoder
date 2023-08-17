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
    <Box
      sx={{
        background: "#f7f7f7",
        paddingTop: "80px",
      }}
    >
      <UIStyledMainHeading2 sx={{ fontSize: { xs: "30px", md: "64px" } }}>
        Seamless Solutions
      </UIStyledMainHeading2>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <UIStyledMainHeading2
          textAlign="center"
          sx={{
            fontWeight: 400,
            marginRight: "10px",
            fontSize: { xs: "30px", md: "64px" },
          }}
        >
          FOR A
        </UIStyledMainHeading2>
        <UIStyledMainHeading2
          textAlign="center"
          sx={{ color: "#420f60", fontSize: { xs: "30px", md: "64px" } }}
        >
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
        <Grid item xs={12} md={4} display={{ xs: "none", md: "block" }}>
          <Image
            src={moboo2}
            style={{
              objectFit: "cover",
              width: "100% !important",
              height: "100%",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
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
          <BlueBtn sx={{ width: { xs: "60%", md: "40%" } }}>
            Get Started
          </BlueBtn>
        </Grid>
      </Grid>

      <TextBg />
    </Box>
  );
};
