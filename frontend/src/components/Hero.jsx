import React from "react";
import HeroSlider, { Overlay, Slide, ButtonsNav } from "hero-slider";
import cslDD from "../assets/img/CSL_DD_ND_banner_US_4096x4096.webp";
import gtWS from "../assets/img/GTWS_banner_4096x4096.webp";
import cslPedals from "../assets/img/CSL_EP_V2_banner_4096x4096.webp";
import bcSS from "../assets/img/ButtonCaps_banner_v4_1280x1280.webp";
import careers from "../assets/img/careers_banner1_1280x1280.webp";
import f1Esports from "../assets/img/F1_Esports_V2_banner_EN_4096x4096.webp";
import podium from "../assets/img/Podium_SW_M4_GT3_EN_banner_4096x4096.webp";
import gtWC from "../assets/img/P_SW_FGTWC_bannerwHccimmFxeE83_4096x4096.webp";

const Hero = () => {
  return (
    <HeroSlider
      height={"80vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        slidingAnimation: "wipe",
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide,
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: cslDD,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: gtWS,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: cslPedals,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: bcSS,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: f1Esports,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: podium,
        }}
      />
      <Slide
        background={{
          backgroundImageSrc: gtWC,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: careers,
        }}
      />
    </HeroSlider>
  );
};

export default Hero;
