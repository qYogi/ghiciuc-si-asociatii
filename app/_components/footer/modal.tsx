import React from "react";
import { Button } from "react-bootstrap";
import styles from "./PrivacyPolicyModal.module.css"; // Importăm stilurile

interface Props {
  show: boolean;
  handleClose: () => void;
}

const sections = [
  {
    title: "1. Cine suntem?",
    content: [
      "Suntem Ghiciuc & Asociații, Societate Civilă Profesională de Avocați, înregistrată în U.N.B.R. - Baroul Iași.",
      "Sediu: Jud. Iași, Mun. Iași, Str. Grigore Ghica Vodă, Nr. 3A, Mezanin",
      "CIF: 51220582",
      "Contact: office@ghiciucsiasociatii.ro | Tel: +40 755 189 133",
    ],
  },
  {
    title: "2. Ce date colectăm și de ce?",
    content: ["Prin formularul de contact, colectăm:"],
    list: ["Numele dumneavoastră", "Email/Telefon", "Mesajul transmis"],
    content2: ["Folosim aceste date pentru:"],
    list2: [
      "A răspunde la întrebări sau solicitări.",
      "A vă oferi servicii juridice.",
    ],
    content3: ["Nu folosim datele pentru:"],
    list3: [
      "Marketing automatizat (ex: newslettere nesolicitate).",
      "Vânzare sau partajare cu terți în scop comercial.",
    ],
  },
  {
    title: "3. Pe ce bază legală prelucrăm datele?",
    content: [
      "Prelucrăm datele pe baza:",
      "Consimțământului dumneavoastră – atunci când trimiteți formularul.",
      "Necesității încheierii unui contract – dacă solicitați servicii juridice.",
    ],
  },
  {
    title: "4. Cu cine partajăm datele?",
    content: ["Partajăm datele doar cu:"],
    list: [
      "Furnizorii noștri tehnici (ex: firma de hosting).",
      "Niciun alt terț – fără acordul dumneavoastră explicit.",
    ],
  },
  {
    title: "5. Cât timp păstrăm datele?",
    content: [
      "Datele sunt păstrate doar pe perioada necesară pentru scopurile prelucrării.",
    ],
  },
  {
    title: "6. Care sunt drepturile dumneavoastră?",
    content: ["Puteți solicita, gratuit, prin email:"],
    list: [
      "Acces la datele pe care le avem despre dumneavoastră.",
      "Ștergerea datelor (dacă nu există obligații legale de păstrare).",
      "Corectarea informațiilor inexacte.",
      "Opoziția la prelucrarea datelor.",
      "Retragerea consimțământului (dacă prelucrarea se bazează pe acesta).",
    ],
  },
  {
    title: "7. Cum ne puteți contacta?",
    content: [
      "Email: office@ghiciucsiasociatii.ro",
      "Telefon: +40 755 189 133",
    ],
  },
  {
    title: "8. Unde puteți depune o plângere?",
    content: [
      "Dacă considerați că prelucrarea datelor încalcă GDPR, contactați:",
      "Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)",
      "Website: www.dataprotection.ro",
    ],
  },
  {
    title: "9. Actualizări ale politicii",
    content: [
      "Această politică poate fi modificată. Vă vom informa despre schimbări semnificative prin email sau banner pe site.",
    ],
  },
  {
    title: "10. De ce să vă încredeți în securitatea datelor?",
    list: [
      "Datele sunt criptate (protocol HTTPS).",
      "Accesul la date este restricționat doar la persoanele autorizate.",
      "Respectăm Regulamentul (UE) 2016/679 (GDPR) și legile României.",
    ],
  },
];

const PrivacyPolicyModal = ({ show, handleClose }: Props) => {
  if (!show) return null;

  return (
    <div
      className={`${styles.modalBackdrop} flex justify-center`}
      onClick={handleClose}
    >
      <div
        className={`${styles.modalContent} self-center h-full max-w-2xl p-8 `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${styles.modalHeader} flex justify-between`}>
          <span className="text-2xl mb-8 font-semibold">
            Politica de Confidențialitate
          </span>
          <button
            className={`${styles.closeButton} w-8 h-8 content-start`}
            onClick={handleClose}
          >
            &times;
          </button>
        </div>
        <div className="modal-body h-5/6 overflow-scroll p-4">
          <h5 className="text-lg font-bold mb-4">
            Ghiciuc & Asociații - Societate Civilă Profesională de Avocați
          </h5>
          <p className="mb-4">
            <strong>Ultima actualizare:</strong> 12/02/2025
          </p>

          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h6 className="font-bold mb-2">{section.title}</h6>
              {section.content &&
                section.content.map((paragraph, idx) => (
                  <p key={idx} className="mb-2">
                    {paragraph}
                  </p>
                ))}
              {section.list && (
                <ul className="list-disc pl-5">
                  {section.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div>
          <Button
            className="mt-8 bg-red-700 p-2 rounded-lg text-white"
            variant="secondary"
            onClick={handleClose}
          >
            Închide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
