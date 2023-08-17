import Image from "next/image";
import React from "react";
import t1 from "../../assets/images/t1.png";
import t2 from "../../assets/images/t2.png";
import t3 from "../../assets/images/t3.png";
import t4 from "../../assets/images/t4.png";
import t5 from "../../assets/images/t5.png";
import t6 from "../../assets/images/t6.png";
import t7 from "../../assets/images/t7.png";
import t8 from "../../assets/images/t8.png";
import t9 from "../../assets/images/t9.png";
import { Container, Grid } from "@mui/material";
import { UIStyledMainHeading2 } from "../UITypo/ui";

export const TechUse = () => {
  return (
    <Container maxWidth="xl" sx={{paddingTop:"5rem"}}>
      <UIStyledMainHeading2 textAlign="center">TECHNOLOGY</UIStyledMainHeading2>
      <UIStyledMainHeading2 textAlign="center" sx={{color:"#99bce1"}}>STACKS</UIStyledMainHeading2>
      <Grid container sx={{ justifyContent: "center",paddingTop:"5rem" }} alignItems={"center"}>
        <Grid item xs={5} md={2}>
          <Image src={t1} />
        </Grid>
        <Grid item xs={5} md={2}>
          <Image src={t2} />
        </Grid>
        <Grid item xs={5} md={2}>
          <Image src={t3} />
        </Grid>
        <Grid item xs={5} md={2}>
          <Image src={t4} />
        </Grid>
        <Grid item xs={5} md={2}>
          <Image src={t5} />
        </Grid>
        <Grid item xs={5} md={2}>
          <Image src={t6} />
        </Grid>
        <Grid item xs={5} md={2}>
          <Image src={t7} />
        </Grid>
        <Grid item xs={5} md={2}>
          <Image src={t8} />
        </Grid>
        <Grid item xs={5} md={2}>
          <Image src={t9} />
        </Grid>
      </Grid>
    </Container>
  );
};
