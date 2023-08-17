import React from "react";
import { BlueBtn } from "../Buttons/ui";
import { Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/system";
import bgImg from "../../assets/images/banner2.png";
import BannerMobo from "../../assets/images/MobilleApp.png";
import android from "../../assets/images/android.png";
import appstore from "../../assets/images/appstore.png";
import webapp from "../../assets/images/webapp.png";
import Image from "next/image";
import { UIStyledMainHeading } from "../UITypo/ui";
import { MainPara } from "../UITypo/ui";

const UIBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgImg.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: { xs: "auto", md: "auto" },
  width: "100%",
}));

export const MobApp = () => {
  return (
    <UIBox>
      <Grid
        container
        sx={{ height: "auto", marginTop: "4rem" }}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <Stack spacing={5}>
            <UIStyledMainHeading variant="h1" sx>
              Comprehensive Mobile App Development Services
            </UIStyledMainHeading>
            <MainPara variant="P">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </MainPara>
            <Box sx={{ display: "flex" }}>
              <Image src={android} style={{ marginRight: "15px" }} />
              <MainPara variant="P">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </MainPara>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Image src={appstore} style={{ marginRight: "15px" }} />
              <MainPara variant="P">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </MainPara>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Image src={webapp} style={{ marginRight: "15px" }} />
              <MainPara variant="P">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </MainPara>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5} display="flex" alignItems="center" justifyContent={"center"}>
          <Image
            src={BannerMobo}
            height={"auto"}
            style={{ objectFit: "cover", width: { xs: "100%" , md: "50%" } }}
          />
        </Grid>
      </Grid>
    </UIBox>
  );
};
