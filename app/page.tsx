import styles from "./home.module.css";
import Link from "next/link";
import Logo from "@/app/svgs/Logo";
import {
  FacebookLogo,
  InstagramLogo,
  TikTokLogo,
  WhatsAppLogo,
} from "@/app/svgs/SocialMedia";
import Gallery from "@/public/components/echipa";
import { Footer } from "@/app/_components/footer/footer";
import { Servicii } from "@/app/_components/servicii/servicii";
import { Motto } from "@/app/_components/motto/motto";
import { Header } from "@/app/_components/header/header";

export default async function Home() {
  const whatsappNumber = "+40755189133";
  const baseUrl = "https://api.whatsapp.com/send";
  const encodedMessage = "Cum vă putem ajuta?";
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  return (
    <div className={styles.homeBody}>
      <div className="flex flex-col w-full font-serif">
        <div
          className={`${styles.homeOverHeader} h-12 w-full flex md:flex-row justify-evenly md:justify-between`}
        >
          <div className="font-sans contact md:flex flex-col  hidden justify-between md:gap-5 md:flex-row md:self-center pl-8 font-semibold">
            <h4>Tel: +40 747 402 252</h4>
            <h4>Email: office@ghiciucsiasociatii.ro</h4>
          </div>
          <div
            className={`${styles.socialMedia} flex-row gap-4 flex self-center  md:pr-8`}
          >
            <Link href="/">
              <InstagramLogo />
            </Link>
            <Link href="#">
              <TikTokLogo />
            </Link>
            <Link href="#">
              <FacebookLogo />
            </Link>
            <Link href={whatsappLink}>
              <WhatsAppLogo />
            </Link>
          </div>
        </div>

        <Header />
        {/*<header*/}
        {/*  className={`${styles.homeHeader} navbar flex flex-row justify-between w-full h-28 font-serif`}*/}
        {/*>*/}
        {/*  <div className="logo flex items-center h-full gap-4 self-center pl-4">*/}
        {/*    <Logo size={170} className={`${styles.homeLogo} `} />*/}
        {/*    <div>*/}
        {/*      <h1 className="font-serif text-4xl font-semibold">*/}
        {/*        Ghiciuc & Asociații*/}
        {/*      </h1>*/}
        {/*      <p className="font-serif text-lg flex justify-center">*/}
        {/*        -Societate civilă profesională de avocați-*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  <nav*/}
        {/*    className={`${styles.links} flex flex-row self-center gap-8 pr-14`}*/}
        {/*  >*/}
        {/*    <Link href="/">*/}
        {/*      <h3 className="text-2xl">Servicii</h3>*/}
        {/*    </Link>*/}
        {/*    <Link href="/blog">*/}
        {/*      <h3 className="text-2xl">Blog</h3>*/}
        {/*    </Link>*/}
        {/*    <Link href="/">*/}
        {/*      <h3 className="text-2xl underline">Echipa</h3>*/}
        {/*    </Link>*/}
        {/*    <Link href="/">*/}
        {/*      <h3 className="text-2xl">Abonamente</h3>*/}
        {/*    </Link>*/}
        {/*    <Link href="/">*/}
        {/*      <h3 className="text-2xl">Contact</h3>*/}
        {/*    </Link>*/}
        {/*  </nav>*/}
        {/*</header>*/}

        <div
          className={`${styles.homeBanner} gap-4 flex flex-col justify-center items-center relative`}
        >
          <h2
            className={`text-4xl md:text-8xl font-serif font-semibold italic text-lightGray tracking-wide z-10 ${styles.animatefadein}`}
          >
            Consilium et Actio
          </h2>
          <div className="flex text-lg flex-col justify-center gap-2">
            <h4 className="text-center">
              Prin „consilium”, societatea noastră vă oferă consiliere
              strategică și bine documentată.{" "}
            </h4>
            <h4 className="text-center">
              Însă, mai presus de atât, „actio” simbolizează abordarea activă,
              orientată spre acțiune și rezultate.
            </h4>
          </div>
        </div>
        <div className={`${styles.homeMotto} w-full`}>
          <Motto />
        </div>
        <div
          className={`${styles.homeSubBanner} flex w-full flex-col h-auto justify-center  `}
        >
          <Servicii />

          <div
            className={` ${styles.homeEchipa} flex mb-10 flex-col w-full mt-12 justify-center`}
          >
            <h1 className="my-10 text-5xl self-center">Echipa</h1>
            <div className={`${styles.homeGallery} flex flex-row self-center`}>
              <Gallery />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
