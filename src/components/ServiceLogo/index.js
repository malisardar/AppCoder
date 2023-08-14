import React from "react";
import ServiceImg from "../../assets/images/service-logo.png";
import { Grid } from "@mui/material";
import Image from "next/image";

export const ServiceLogo = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      marginTop={3}
    >
      <Grid item>
        <Image src={ServiceImg} />
      </Grid>
    </Grid>
  );
};
