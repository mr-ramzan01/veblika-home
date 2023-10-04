"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import dynamic from "next/dynamic";

const Header = () => {
  const isPortrait = useMediaQuery({ query: "(max-width: 950px)" });
  return <div>{isPortrait ? <MobileHeader /> : <DesktopHeader />}</div>;
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
