import React from "react";
import Layout from "../components/Layout";

import Bio from "../components/Bio";
import Works from "../components/Works";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <Layout>
      <Bio />
      <Works />
      <Contact />
    </Layout>
  );
}
