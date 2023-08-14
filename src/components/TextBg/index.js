import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import MOBILEAPPUIUX from "../../assets/images/MOBILEAPPUIUX.png";

export const TextBg = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Image
            style={{ objectFit: "cover", width: "100%" , height: "100%" }}
            src={MOBILEAPPUIUX}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
