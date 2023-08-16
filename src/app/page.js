"use client";
import Header from "@/components/Header";
import styles from "./globals.css";
import Footer from "@/components/Footer";
import React from "react";
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

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid container>
        <Grid item xs={12}>
          <Header />
          <MainBanner />
          <ServiceLogo />
          <MoboWorld />
          <Services />
          <SlideSection />
          <MobApp />
          <TechUse />
          <Pricing />
          <Faqs />
        </Grid>
      </Grid>
    
    </main>
  );
}
