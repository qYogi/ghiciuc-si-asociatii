import Logo from "@/app/svgs/Logo";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  WhatsAppLogo,
} from "@/app/svgs/SocialMedia";
import styles from "./header.module.css"; // <-- Import CSS Module

export const Header = () => {
  return (
    // Combine Tailwind with CSS Module class
    <div className={`${styles.header} mb-8 h-44`}>
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />{" "}
          <div>
            {/* Styles will be applied through CSS Module */}
            <h1 className="font-serif text-4xl font-semibold ">
              Ghiciuc & Asociații
            </h1>
            <p className="font-serif text-lg flex justify-center">
              Societate civilă profesională de avocați
            </p>
          </div>
        </div>
        <div className="h-full">
          <nav className="flex gap-6 font-sans ">
            <Link href="/">
              <Logo size={36} />
            </Link>
            <Link href="#">
              <InstagramLogo />
            </Link>
            <Link href="#">
              <TikTokLogo />
            </Link>
            <Link href="#">
              <FacebookLogo />
            </Link>
            <Link href="#">
              <WhatsAppLogo />
            </Link>
          </nav>
        </div>
      </div>
      {/* Combine Tailwind with CSS Module class */}
      <hr className={`${styles.divider} my-2 border-t-2`} />
    </div>
  );
};
