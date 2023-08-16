import React from "react";
// import Swiper from 'react-id-swiper';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import port1 from "../../assets/images/port1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";

import { Translate } from "@mui/icons-material";
import { SlideBox } from "../SlideBox";
import { OrangeBtn, PurpleBtn } from "../Buttons/ui";

const SlideSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Slider {...settings} className="mohsin">
        <SlideBox
          heading="ECOMMERCE MOBILE APPS"
          background="#00caf3"
          src={port1}
        />

        <SlideBox heading="FOOD MOBILE APPS" background="#f96e2f" src={port2} />

        <SlideBox
          heading="FINANCE MOBILE APPS"
          background="#5f34d6"
          src={port3}
        />

        <SlideBox
          heading="ECOMMERCE MOBILE APPS"
          background="#00caf3"
          src={port1}
        />

        <SlideBox heading="FOOD MOBILE APPS" background="#f96e2f" src={port2} />

        <SlideBox
          heading="FINANCE MOBILE APPS"
          background="#5f34d6"
          src={port3}
        />
      </Slider>

      <Grid container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "5rem",
          }}
        >
          <PurpleBtn sx={{ width: "15%", marginRight: "10px" }}>
            Live Chat
          </PurpleBtn>
          <OrangeBtn sx={{ width: "15%" }}>Get a Quote</OrangeBtn>
        </Box>
      </Grid>
    </Box>
  );
};

export default SlideSection;
