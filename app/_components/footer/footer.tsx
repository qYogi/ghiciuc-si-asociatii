"use client";
import React, { useState } from "react";
import styles from "./footer.module.css";
import PrivacyPolicyModal from "./modal";
import Image from "next/image";
import { ContactForm } from "@/app/_components/contactForm/contactForm";

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <footer className={`${styles.univFooter} font-serif p-4`}>
      <div className={`${styles.footerLegal} text-center mb-3`}>
        <p>
          © {new Date().getFullYear()} Ghiciuc & Asociații S.C.P.A. | CUI:
          51220582 | Membru UNBR - Baroul Iași |
          <a href="/politica-confidentialitate" onClick={handleShowModal}>
            Politica de Confidențialitate
          </a>{" "}
        </p>
        <p>
          Conținutul acestui site are rol informativ și nu constituie sfat
          juridic.
        </p>
      </div>
      <div
        className={`${styles.container} flex flex-col justify-center md:grid md:grid-cols-2 md:grid-rows-1`}
      >
        <ContactForm />

        <div className={`${styles.verticalDivider} hidden md:flex`}></div>
        <div className={`${styles.footerInfo} px-4`}>
          <h1>Jud. Iași, Mun. Iași, Str. Gicha Vodă, Nr. 3A</h1>
          <h1>Tel: +40 755 189 133</h1>
          <h1>Email: office@ghiciucsiasociatii.ro</h1>
          <div className={`${styles.footerANPC}`}>
            <a
              href={
                "https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
              }
            >
              {" "}
              <Image src={"/anpc.png"} alt={"ANPC"} width={300} height={50} />
            </a>
          </div>
        </div>
      </div>

      {/* Modalul Politicii de Confidențialitate */}
      <PrivacyPolicyModal show={showModal} handleClose={handleCloseModal} />
    </footer>
  );
};
