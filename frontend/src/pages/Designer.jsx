import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import styles from "./MobileDeveloper.module.css";

const Designer = () => {
  // Set page title when component mounts
  useEffect(() => {
    document.title = "Designer - Beam Wallet";
  }, []);

  return (
    <>
      <Hero category="Careers" title="Designer – Beam Wallet" />

      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <h2>📍 Location: Remote / International</h2>
            <h2>About the Role</h2>
            <p>
              A Beam Wallet, plataforma global de pagamentos digitais e vendas automatizadas, está a contratar 
              um Designer para apoiar a produção criativa em múltiplos formatos e canais. Procuramos alguém 
              versátil, inovador e atento ao detalhe, capaz de transformar conceitos em materiais visuais de alto 
              impacto, que transmitam a identidade da marca e ajudem a comunicar com diferentes mercados e 
              públicos.
            </p>
            <p>
              <strong>⚠️Este cargo é internacional, aberto a candidatos de todo o mundo, com a oportunidade de 
              trabalhar em projetos para diversos países e em colaboração com equipas multiculturais.</strong>
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Responsibilities</h2>
          <p className={styles.skillList}>
            Criar e desenvolver materiais gráficos (brochuras, vouchers, catálogos, apresentações, etc.)
            <br />
            Produzir conteúdos visuais para redes sociais, websites e campanhas digitais
            <br />
            Criar imagens, banners e materiais promocionais para diferentes mercados
            <br />
            Apoiar a identidade visual da marca e adaptá-la a diferentes contextos culturais
            <br />
            Trabalhar em estreita colaboração com equipas de marketing, comunicação e produto
            <br />
            Garantir consistência visual global e cumprimento de prazos
          </p>
        </div>

        <div className={styles.section}>
          <h2>Requirements</h2>
          <p className={styles.skillList}>
            Experiência comprovada em design gráfico (mínimo 2 anos recomendado)
            <br />
            Domínio de ferramentas de design (Adobe Photoshop, Illustrator, InDesign, Figma ou equivalentes)
            <br />
            Criatividade, proatividade e pensamento inovador
            <br />
            Conhecimentos em design digital e impresso
            <br />
            Capacidade de comunicação visual adaptada a diferentes culturas
            <br />
            Fluência em inglês (escrito e falado) – outras línguas são valorizadas
          </p>
        </div>

        <div className={styles.section}>
          <h2>Valued Skills (Plus)</h2>
          <p className={styles.skillList}>
            Motion design, animações ou edição de vídeo
            <br />
            UX/UI para aplicações e websites
            <br />
            Ilustração, modelação 3D ou outras especialidades criativas
            <br />
            Experiência com branding internacional
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer</h2>
          <p className={styles.skillList}>
            Oportunidade de trabalhar numa empresa global em rápido crescimento
            <br />
            Projetos criativos diversificados com impacto internacional
            <br />
            Ambiente multicultural, inovador e colaborativo
            <br />
            Possibilidade de crescimento de carreira dentro da Beam Wallet
          </p>
        </div>

        <div className={styles.section}>
          <h2>⚠️ Important Note for Applicants</h2>
          <p>
            At Beam Wallet, we believe that time is money. Before applying, it is essential that candidates fully 
            understand what Beam Wallet is and how it operates. All information is available at <a href="https://beamwallet.com" target="_blank" rel="noopener noreferrer">beamwallet.com</a> 
            and on our official social media channels.
          </p>
          <p>
            It is crucial to know where you are applying, as we do not want candidates or Beam Wallet to lose 
            time if there is no minimum knowledge about the platform.
          </p>
        </div>

        <div className={styles.section}>
          <h2>👉 Application:</h2>
          <p>
            Only applications sent to our official email <strong>hr@beamwallet.com</strong> with the subject line 
            <strong>"Application – Designer Beam Wallet"</strong> and including an updated CV and portfolio will be reviewed.
          </p>
        </div>

        <div className={styles.applySection}>
          <a className={styles.applyNowBtn} href="mailto:hr@beamwallet.com?subject=Application – Designer Beam Wallet" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
      </div>
    </>
  );
};

export default Designer;