/* eslint-disable @next/next/no-title-in-document-head */
import { ServerStyleSheets } from "@material-ui/core";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import theme from "../styles/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>React Test</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
