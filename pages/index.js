import Funktionen from "@/components/funktionen/Funktionen";
import Garantein from "@/components/garantien/garantien";
import HomeConfiguration from "@/components/home-configuration/home-configuration";
import Intentions from "@/components/intentions/intentions";
import MainLayout from "@/layout/layout";
import React from "react";

const TestPage = () => {
  return (
    <MainLayout>
      <HomeConfiguration />
      <Intentions />
      <Funktionen />
      <Garantein />
    </MainLayout>
  );
};

export default TestPage;
