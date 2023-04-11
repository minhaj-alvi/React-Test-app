import Funktionen from "@/components/funktionen/Funktionen";
import HomeConfiguration from "@/components/home-configuration/home-configuration";
import Intentions from "@/components/intentions/intentions";
import Navbar from "@/components/navbar/navbar";
import MainLayout from "@/layout/layout";
import { Box } from "@mui/material";
import React from "react";

const TestPage = () => {
  return (
    <MainLayout>
      <HomeConfiguration />
      <Intentions />
      <Funktionen />
    </MainLayout>
  );
};

export default TestPage;
