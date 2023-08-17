import { styled } from "@mui/system";
import { Box, Switch, TextField, Typography, Button } from "@mui/material";

// Banner Heading

export const UIStyledMainHeading = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: "34px",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "40px",
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: "64px",
  },
  fontSize: "64px",
  color: "white",
  fontWeight: "bolder",
}));

export const UIStyledMainHeading2 = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "black",
  fontWeight: "bolder",
  textAlign: "center",
  textTransform: "uppercase",
}));

export const UIStyledMainHeading3 = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  color: "white",
  fontWeight: "bolder",
  textTransform: "uppercase",
}));

// Banner para

export const MainPara = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  color: "white",
}));

export const SubPara = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  color: "black",
}));

export const UiList = styled('li')(({ theme }) => ({
  fontSize: "20px",
  color: "black",
  paddingBottom: "1rem"

}));
