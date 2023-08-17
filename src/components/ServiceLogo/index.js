import React from "react";
import ServiceImg from "../../assets/images/service-logo.webp";
import { Grid } from "@mui/material";
import Image from "next/image";

export const ServiceLogo = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" marginTop={3}>
      <Grid>
        <Image data-aos="zoom-in" data-aos-duration="1000" src={ServiceImg} style={{ width: "100% !important" }} />
      </Grid>
    </Grid>
  );
};
