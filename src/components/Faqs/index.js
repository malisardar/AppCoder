import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import faqbg from "../../assets/images/faq-bg.png";
import { UIStyledMainHeading, UIStyledMainHeading2 } from "../UITypo/ui";
import Faqtabs from "../FaqTabs";

const FaqBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${faqbg.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "290px",
  width: "100%",
}));

export const Faqs = () => {
  return (
    <Box sx={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <FaqBox>
        <Container maxWidth={"xl"}>
          <Grid container>
            <Grid item xs={12} pt={10}>
              <UIStyledMainHeading2> FAQS </UIStyledMainHeading2>
            </Grid>
          </Grid>
        </Container>
      </FaqBox>
      <Container>
        <Faqtabs />
      </Container>
    </Box>
  );
};
