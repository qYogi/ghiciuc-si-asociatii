"use client";
import React, { useState } from "react";
import styles from "./footer.module.css";
import Form from "react-bootstrap/Form";
import PrivacyPolicyModal from "./modal";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <footer className={`${styles.univFooter} font-serif p-4`}>
      <div className={`${styles.footerLegal} text-center mb-3`}>
        <p>
          © {new Date().getFullYear()} Ghiciuc & Asociații S.C.P.A. | CUI:
          RO51220582 | Membru UNBR - Baroul Iași |
          <a href="#" onClick={handleShowModal}>
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
        <div className={`${styles.footerForm} w-full px-4`}>
          <h1 className={`text-3xl font-semibold mb-4`}> Contactează-ne </h1>
          <form className={`flex flex-col `}>
            <input type="text" placeholder="Nume" id="name" name="name" />
            <input type="number" placeholder="Telefon" id="tel" name="tel" />
            <input type="email" placeholder="Email" id="email" name="email" />
            <textarea
              id="message"
              placeholder="Mesaj"
              name="message"
              rows={4}
            />
            <Form.Check
              type="checkbox"
              label={
                <>
                  Sunt de acord cu prelucrarea datelor conform
                  <p className="ml-1 underline" onClick={handleShowModal}>
                    Politicii de Confidențialitate
                  </p>
                </>
              }
              required
            />
            <button className="text-white py-2 mt-4 px-4">Trimite</button>
          </form>
        </div>
        <div className={`${styles.verticalDivider} hidden md:flex`}></div>
        <div className={`${styles.footerInfo} px-4`}>
          <h1>Jud. Iași, Mun. Iași, Str. Gicha Vodă, Nr. 3A</h1>
          <h1>Tel: +40 747 402 252</h1>
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
