"use client";

import React, { useState } from "react";
import HomePage from "./HomePage/page";
import ServicesSection from "./ServicesPage/page";
import AboutUsPage from "./AboutUs/page";
import ContactUsPage from "./ContactUs/page";

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main>
      <HomePage />
      <ServicesSection setSelectedService={setSelectedService} />
      <AboutUsPage />
      <ContactUsPage selectedService={selectedService} />
    </main>
  );
}