"use client"; // Add this at the top for interactivity
import { useState } from "react";
import styles from "./header.module.css";
import Logo from "@/app/svgs/Logo";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${styles.homeHeader} navbar flex flex-row justify-between w-full h-28 font-serif relative`}
    >
      <div className="logo flex items-center h-full gap-4 self-center pl-4">
        <Logo size={170} className={`${styles.homeLogo} hidden md:flex`} />
        <div>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold">
            Ghiciuc & Asociații
          </h1>
          <p className="font-serif text-lg flex justify-center">
            -Societate Civilă Profesională de Avocați-
          </p>
        </div>
      </div>

      <nav
        className={`${styles.links} hidden md:flex flex-row self-center gap-8 pr-14`}
      >
        <Link href={"/"}>
          <h3 className="text-2xl font-[700]">Home</h3>
        </Link>
        <Link href="/abonamente">
          <h3 className="text-2xl font-[700]">Abonamente</h3>
        </Link>
        <Link href="/blog">
          <h3 className="text-2xl font-[700]">Blog</h3>
        </Link>
        {/*<Link href="/echipa">*/}
        {/*  <h3 className="text-2xl font-[700]">Echipa</h3>*/}
        {/*</Link>*/}
        <Link href="/contact">
          <h3 className="text-2xl font-[700]">Contact</h3>
        </Link>
      </nav>

      {/* Mobile Burger Button */}
      <label
        htmlFor="burger"
        className="sm:flex md:hidden relative w-5 h-4 cursor-pointer self-center mr-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-1 w-full bg-black rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`block h-1 w-full bg-black rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-1 w-full bg-black rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </div>
      </label>

      {isOpen && (
        <div className="absolute md:hidden top-28 right-0 w-full bg-white shadow-lg z-50">
          <nav className="flex flex-col items-center gap-6 py-8">
            <Link href={"/"}>
              <h3 className="text-2xl font-[700]">Home</h3>
            </Link>
            <Link href="/abonamente">
              <h3 className="text-2xl font-[700]">Abonamente</h3>
            </Link>
            <Link href="/blog">
              <h3 className="text-2xl font-[700]">Blog</h3>
            </Link>
            {/*<Link href="/echipa">*/}
            {/*  <h3 className="text-2xl font-[700]">Echipa</h3>*/}
            {/*</Link>*/}
            <Link href="/contact">
              <h3 className="text-2xl font-[700]">Contact</h3>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
