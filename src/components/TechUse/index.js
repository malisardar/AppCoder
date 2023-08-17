import Image from "next/image";
import React from "react";
import t1 from "../../assets/images/t1.webp";
import t2 from "../../assets/images/t2.webp";
import t3 from "../../assets/images/t3.webp";
import t4 from "../../assets/images/t4.webp";
import t5 from "../../assets/images/t5.webp";
import t6 from "../../assets/images/t6.webp";
import t7 from "../../assets/images/t7.webp";
import t8 from "../../assets/images/t8.webp";
import t9 from "../../assets/images/t9.webp";
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
          images.map((item, i) => {
            return (
              <Grid item xs={5} md={2} key={i}>
                <Image src={item} data-aos="zoom-in" data-aos-duration="1000" />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  );
};
