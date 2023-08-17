import React from "react";
import ServiceImg from "../../assets/images/service-logo.webp";
import { Grid } from "@mui/material";
import Image from "next/image";

export const ServiceLogo = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" marginTop={3}>
      <Grid item xs={12} lg={8}>
        <Image data-aos="fade-up" data-aos-duration="1000" src={ServiceImg} style={{ width: "100% !important", objectFit: 'contain' }} />
      </Grid>
    </Grid>
  );
};
