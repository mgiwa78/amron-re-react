import React from "react";
import AboutSection from "../../components/about-section/about-section.component";
import CallToAction from "../../components/call to action/cta,component";
import DealsSection from "../../components/deals-section/deals-section.component";
import Footer from "../../components/footer/footer.component";
import HeroSection from "../../components/hero-section/hero-section.component";
import NavComponent from "../../components/nav-bar/nav-bar.component";
import Projects from "../../components/projects-section/projects.component";
import Specializtions from "../../components/specializations-section/specializations-section.component";
import { HomeContainer } from "./home-page.styles";

const Home = () => {
  return (
    <HomeContainer>
      <NavComponent />
      <HeroSection />
      <AboutSection />
      <DealsSection />
      <Specializtions />
      <Projects />
      <CallToAction />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
