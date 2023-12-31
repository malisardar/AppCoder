import { styled } from "@mui/system";
import { Box, Switch, TextField, Typography, Button } from "@mui/material";

export const BlueBtn = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  color: "white",
  textAlign: "center",
  height: "70px",
  borderRadius: "50px",
  backgroundColor: "#20b7f8",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "black",
  },
}));

export const OrangeBtn = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  color: "white",
  textAlign: "center",
  height: "70px",
  borderRadius: "50px",
  backgroundColor: "#fc6834",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "black",
  },
}));

export const BlackBtn = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  color: "white",
  textAlign: "center",
  height: "70px",
  borderRadius: "50px",
  backgroundColor: "black",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "black",
  },
}));

export const PurpleBtn = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  color: "white",
  height: "70px",
  textAlign: "center",
  borderRadius: "50px",
  backgroundColor: "#7127ff",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "black",
  },
}));
