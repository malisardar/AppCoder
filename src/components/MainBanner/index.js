import React from "react";
import { BlueBtn } from "../Buttons/ui";
import { Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";
import bgImg from "../../assets/images/main-banner.png";
import BannerMobo from "../../assets/images/mobo.png";
import Image from "next/image";
import { UIStyledMainHeading } from "../UITypo/ui";
import { MainPara } from "../UITypo/ui";

const UIBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgImg.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100%",
}));

export const MainBanner = () => {
  return (
    <UIBox>
      <Grid
        container
        sx={{ height: "100vh" }}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <Stack spacing={5}>
            <UIStyledMainHeading
              variant="h1"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Your Mobile Experience, Elevated
            </UIStyledMainHeading>
            <MainPara variant="body1" data-aos="fade-up"
              data-aos-duration="2000">
              We continuously invest in research and development to provide our
              clients with cutting-edge solutions and stay ahead of the curve.
            </MainPara>
            <BlueBtn data-aos="fade-up"
              data-aos-duration="2000"
              sx={{ width: { xs: "60%", md: "40%" } }}>
              Get Started
            </BlueBtn>
          </Stack>
        </Grid>
        <Grid
          item
          xs={5}
          display={{ xs: "none", md: "flex" }}
          alignItems="center"
        >
          <Image data-aos="zoom-in"
            src={BannerMobo}
            height={"auto"}
            style={{ objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </UIBox>
  );
};

export default MainBanner;
