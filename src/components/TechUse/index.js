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

  const images = [t1, t2, t3, t4, t5, t6, t7, t8, t9]

  return (
    <Container maxWidth="xl" sx={{ paddingTop: "5rem" }}>
      <UIStyledMainHeading2 textAlign="center" data-aos="fade-down" data-aos-duration="2000">TECHNOLOGY</UIStyledMainHeading2>
      <UIStyledMainHeading2 textAlign="center" sx={{ color: "#99bce1" }} data-aos="fade-up" data-aos-duration="2000">STACKS</UIStyledMainHeading2>
      <Grid container sx={{ justifyContent: "center", paddingTop: "5rem" }} alignItems={"center"}>
        {
          images.map((item) => {
            return (
              <Grid item xs={5} md={2}>
                <Image src={item} data-aos="zoom-in" data-aos-duration="1000" />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  );
};
