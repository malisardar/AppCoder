import React from "react";
import ServiceImg from "../../assets/images/service-logo.png";
import { Grid } from "@mui/material";
import Image from "next/image";

export const ServiceLogo = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" marginTop={3}>
      <Grid>
        <Image src={ServiceImg} style={{ width: "100% !important" }} />
      </Grid>
    </Grid>
  );
};
