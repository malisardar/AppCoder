import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Foam } from "../Foam";
import foambg from "../../assets/images/foam-bg.png";
import styled from "styled-components";
import { UIStyledMainHeading } from "../UITypo/ui";
import { PurpleBtn } from "../Buttons/ui";

const FoamBg = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${foambg.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "700px",
  width: "100%",
}));

export const FooterCta = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={6}>
        <FoamBg
          sx={{
            justifyContent: "center",
            alignContent: "center",
            // padding: "10rem",
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            paddingX: { xs: "2rem", md: "5rem" },
          }}
        >
          <UIStyledMainHeading variant="h1">
            Powerful applications that create new opportunities for your
            business.
          </UIStyledMainHeading>
          <PurpleBtn
            sx={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5rem",
            }}
          >
            Get a Quote
          </PurpleBtn>
        </FoamBg>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Foam />
        </Box>
      </Grid>
    </Grid>
  );
};
