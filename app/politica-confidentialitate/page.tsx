import React from "react";

const PrivacyPolicy = () => {
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
        "A vă oferi abonamente juridice.",
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
        "Necesității încheierii unui contract – dacă solicitați abonamente juridice.",
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

  return (
    <div className="min-h-screen bg-tertiary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Politica de Confidențialitate
        </h1>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">
                {section.title}
              </h2>

              {section.content && (
                <div className="space-y-2 text-secondary">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-secondary">
                  {section.list.map((item, iIndex) => (
                    <li key={iIndex}>{item}</li>
                  ))}
                </ul>
              )}

              {section.content2 && (
                <div className="pt-4 space-y-2 text-secondary">
                  {section.content2.map((paragraph, pIndex) => (
                    <p key={`c2-${pIndex}`} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.list2 && (
                <ul className="list-disc pl-6 space-y-2 text-secondary">
                  {section.list2.map((item, iIndex) => (
                    <li key={`l2-${iIndex}`}>{item}</li>
                  ))}
                </ul>
              )}

              {section.content3 && (
                <div className="pt-4 space-y-2 text-secondary">
                  {section.content3.map((paragraph, pIndex) => (
                    <p key={`c3-${pIndex}`} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.list3 && (
                <ul className="list-disc pl-6 space-y-2 text-secondary">
                  {section.list3.map((item, iIndex) => (
                    <li key={`l3-${iIndex}`}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Special styling for contact section */}
        <div className="mt-12 p-6 bg-primary/10 rounded-lg">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Pentru întrebări sau solicitări legate de protecția datelor:
          </h3>
          <p className="text-secondary">
            Email:{" "}
            <a
              href="mailto:office@ghiciucsiasociatii.ro"
              className="text-muted underline"
            >
              office@ghiciucsiasociatii.ro
            </a>
          </p>
          <p className="text-secondary">
            Telefon:{" "}
            <a href="tel:+40755189133" className="text-muted underline">
              +40 755 189 133
            </a>
          </p>
        </div>

        <div className="mt-8 text-sm text-secondary/80 text-center">
          Ultima actualizare: {new Date().toLocaleDateString("ro-RO")}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

export const metadata = {
  title: "Avocat Iași | Ghiciuc și Asociații",
  description:
    "Cabinet de avocatură în Iași. Vlad Ghiciuc și echipa oferă consultanță juridică specializată în drept penal, civil și comercial.",
};
