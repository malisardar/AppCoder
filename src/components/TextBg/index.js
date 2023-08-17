import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import MOBILEAPPUIUX from "../../assets/images/MOBILEAPPUIUX.webp";

export const TextBg = () => {
  return (
    <Box data-aos="fade-up" data-aos-duration="2000">
      <Grid container>
        <Grid item xs={12}>
          <Image
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={MOBILEAPPUIUX}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
