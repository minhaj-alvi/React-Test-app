import HomeConfiguration from "@/components/home-configuration.js/home-configuration";
import Navbar from "@/components/navbar/navbar";
import MainLayout from "@/layout/layout";
import { Box } from "@mui/material";
import React from "react";

const TestPage = () => {
  return (
    <MainLayout>
      <HomeConfiguration />
    </MainLayout>
  );
};

export default TestPage;
