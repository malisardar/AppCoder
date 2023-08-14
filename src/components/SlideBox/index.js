import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import port1 from "../../assets/images/port1.png";
import { UIStyledMainHeading3 } from "../UITypo/ui";

export const SlideBox = (props) => {
  return (
    <Box
      sx={{
        background: props.background,
        height: "410px",
       
        borderRadius: "50px",
        position: "relative",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        marginX: "5rem",
     
      }}
    >
      <Image
        style={{
          position: "absolute",
          top: "-100px",
          height: "100%",
          left: "50%",
          transform: "translate(-50%)",
        }}
        src={props.src}
      ></Image>

      <UIStyledMainHeading3
        variant="h3"
        sx={{
          bottom: "0px",
          position: "absolute",
          width: "40%",
          left: "50%",
          transform: "translate(-50%)",
          paddingBottom: "1rem",
        }}
      >
        {props.heading}
      </UIStyledMainHeading3>
    </Box>
  );
};
