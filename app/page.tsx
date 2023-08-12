import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LinkBox from "@/components/LinkBox";
import SummaryBox from "@/components/SummaryBox";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      <Navbar />
      <div className="flex flex-row p-6 gap-8">
      <LinkBox />
      <SummaryBox /> 
      </div> 
      </main>
      <Footer />
    </div>
  );
}