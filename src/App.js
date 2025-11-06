import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  
useEffect(() => {
  const timer = setTimeout(() => {
    setShowWelcome(false);
    window.scrollTo(0, 0); // força o scroll para o topo
  }, 3000);

  return () => clearTimeout(timer);
}, []);

  const perfil = {
    nome: "iGUi - BARREIRAS E OESTE-BA",
    descricao:
      "Acesse nossos canais de relacionamento e descubra um novo conceito de piscinas.",
    imagem: "/profile.png",
  };

  const links = [
    {
      nome: "WhatsApp iGUi BRS-BA",
      url: "https://wa.me/5577999364498",
      cor: "#25D366",
      icone: <FaWhatsapp size={50} color="#25D366" />,
    },
    {
      nome: "Instagram iGUi BRS-BA",
      url: "https://www.instagram.com/iguibarreiras.oestebaiano?igsh=NXYzcGRuMmFiYnVr&utm_source=qr",
      cor: "#E4405F",
      icone: <FaInstagram size={50} color="#E4405F" />,
    },
    {
      nome: "iGUi Cerâmica",
      url: "https://totem.igui.com/pools",
      cor: "#009FE3",
      icone: (
        <img
          src="/igui-logo.png"
          alt="iGUi Cerâmica"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      nome: "iGUi UNLIMITED",
      url: "https://www.unlimitedpool.com/",
      cor: "#555",
      icone: (
        <img
          src="/igui-unlimited.png"
          alt="iGUi UNLIMITED"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        minHeight: "100vh",
        padding: "40px 20px",
        overflow: "hidden",
      }}
    >
      {/* Tela de boas-vindas */}
      <AnimatePresence>
      {showWelcome && (
  <motion.div
    initial={{ y: "100%", opacity: 0 }}
    animate={{ y: "0%", opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff", // fundo branco
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <motion.img
      src="/boasvindas.png"
      alt="Boas-vindas"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        width: "100%",
        maxWidth: "500px", // limite opcional
        objectFit: "contain",
      }}
    />
  </motion.div>
)}
      </AnimatePresence>

      {/* Cabeçalho com perfil */}
      {!showWelcome && (
        <>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <img
              src={perfil.imagem}
              alt={perfil.nome}
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #009FE3",
              }}
            />
            <h1 style={{ marginTop: 15, marginBottom: 5, color: "#000" }}>
              {perfil.nome}
            </h1>
            <p style={{ color: "#666", fontSize: 14 }}>{perfil.descricao}</p>
          </div>

          {/* Lista de links responsiva */}
          <div style={{ width: "100%", maxWidth: 400 }}>
            {links.map((link) => (
              <a
                key={link.nome}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  padding: "12px 16px",
                  margin: "10px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 6px rgba(0,0,0,0.1)";
                }}
              >
                {link.icone}
                <span>{link.nome}</span>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;