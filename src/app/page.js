"use client";
import Header from "@/components/Header";
import styles from "./globals.css";
import Footer from "@/components/Footer";
import React, { useEffect } from "react";
import MainBanner from "@/components/MainBanner";
import { Grid } from "@mui/material";
import { ServiceLogo } from "@/components/ServiceLogo";
import { MoboWorld } from "@/components/MoboWorld";
import { Services } from "@/components/Services";
import SlideSection from "@/components/SlideSection";
import { MobApp } from "@/components/MobApp";
import { TechUse } from "@/components/TechUse";
import { Pricing } from "@/components/Pricing";
import { Faqs } from "@/components/Faqs";
import { Foam } from "@/components/Foam";
import { FooterCta } from "@/components/FooterCta";

import AOS from "aos";

import "aos/dist/aos.css";
// import "../../scss/style.scss";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <main className={styles.main}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <MainBanner />
          <ServiceLogo />
          <MoboWorld />
          <Services />
          <SlideSection />
          <MobApp />
          <TechUse />
          <Pricing />
          <Faqs />
          <FooterCta />
        </Grid>
      </Grid>
    </main>
  );
}
