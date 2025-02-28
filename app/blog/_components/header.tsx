import Logo from "@/app/svgs/Logo";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  WhatsAppLogo,
} from "@/app/svgs/SocialMedia";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header
      className={`flex flex-col  md:justify-between mb-4 md:mb-8 md:h-44`}
    >
      <div className="flex w-full h-full justify-center mt-4 md:mt-0  items-center md:justify-between px-4 md:px-8">
        {/* Logo and Title Section */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
          <Logo className="w-12 md:w-24 h-auto" />
          <div className="text-center md:text-left">
            <h1 className="font-serif text-2xl md:text-4xl font-semibold leading-tight">
              Ghiciuc & Asociații
            </h1>
            <p className="font-serif text-sm md:text-lg mt-1 md:mt-2">
              Societate Civilă Profesională de Avocați
            </p>
          </div>
        </div>

        {/* Social Media Links - Desktop */}
        <div className="hidden md:block h-full">
          <nav className="flex gap-4 md:gap-6 font-sans items-center h-full">
            <Link href="/" className="hover:opacity-75 transition-opacity">
              <Logo size={36} />
            </Link>
            <Link
              href="https://www.instagram.com/ghiciucsiasociatii/"
              className="hover:opacity-75 transition-opacity"
            >
              <InstagramLogo />
            </Link>
            <Link
              href="https://www.tiktok.com/@ghiciuc.asociatii"
              className="hover:opacity-75 transition-opacity"
            >
              <TikTokLogo />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61572888712185&rdid=42IyXBEbLb1amF2h&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BSm52J6SD%2F#"
              className="hover:opacity-75 transition-opacity"
            >
              <FacebookLogo />
            </Link>
          </nav>
        </div>
      </div>

      {/* Social Media Links - Mobile */}
      <div className="md:hidden px-4 mt-4 py-2">
        <nav className="flex justify-center gap-4 font-sans">
          <Link href="#" className="hover:opacity-75 transition-opacity">
            <InstagramLogo />
          </Link>
          <Link href="#" className="hover:opacity-75 transition-opacity">
            <TikTokLogo />
          </Link>
          <Link href="#" className="hover:opacity-75 transition-opacity">
            <FacebookLogo />
          </Link>
          <Link href="#" className="hover:opacity-75 transition-opacity">
            <WhatsAppLogo />
          </Link>
        </nav>
      </div>

      <hr className={`${styles.divider} my-2 border-t-2 mx-4 md:mx-8`} />
    </header>
  );
};
