"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";


const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <nav>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        <Image
          src="/RE1Mu3b.png"
          alt="Logo"
          width={width < 1024 ? "150" : "250"}
          height={width < 1024 ? "45" : "74"}
          className="relative"
        />
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Logo;