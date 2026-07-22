import { motion } from 'framer-motion';
import { FaCompass, FaCubes, FaRobot, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import styles from './BenielStudio.module.css';

const content = {
  es: {
    eyebrow: 'BENIEL STUDIO · CONSULTORÍA INDEPENDIENTE',
    title: 'De un problema real a un producto que puede crecer.',
    intro: 'Beniel Studio es mi emprendimiento personal de consultoría de software y product engineering. Acompaño a negocios y equipos a convertir procesos, ideas y oportunidades en soluciones digitales útiles, medibles y operables.',
    cards: [
      { icon: FaCompass, title: 'Consultoría de software', text: 'Entiendo el problema, ordeno prioridades y convierto necesidades ambiguas en un alcance técnico claro.' },
      { icon: FaCubes, title: 'Product engineering', text: 'Diseño y construyo productos end-to-end: UX/UI, frontend, backend, datos, pagos, testing y despliegue.' },
      { icon: FaRobot, title: 'IA aplicada a SaaS', text: 'Integro automatización, asistentes y Prompt Engineering cuando mejoran operaciones y experiencia.' },
    ],
    processTitle: 'Cómo trabajo',
    process: ['Descubrimiento', 'Definición de producto', 'Construcción y validación', 'Lanzamiento y evolución'],
    cta: 'Ver casos y experiencia',
  },
  en: {
    eyebrow: 'BENIEL STUDIO · INDEPENDENT CONSULTING',
    title: 'From a real problem to a product that can grow.',
    intro: 'Beniel Studio is my personal software consulting and product engineering venture. I help businesses and teams turn processes, ideas, and opportunities into useful, measurable, operable digital solutions.',
    cards: [
      { icon: FaCompass, title: 'Software consulting', text: 'I understand the problem, prioritize needs, and turn ambiguity into a clear technical scope.' },
      { icon: FaCubes, title: 'Product engineering', text: 'I build products end-to-end: UX/UI, frontend, backend, data, payments, testing, and deployment.' },
      { icon: FaRobot, title: 'Applied AI for SaaS', text: 'I integrate automation, assistants, and Prompt Engineering when they improve operations and experience.' },
    ],
    processTitle: 'How I work',
    process: ['Discovery', 'Product definition', 'Build and validate', 'Launch and evolve'],
    cta: 'View cases and experience',
  },
} as const;

export function BenielStudio() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <section id="beniel" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div className={styles.header} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div>
            <div className={styles.brandMark}>
              <img src="/assets/images/beniel-studio.png" alt="Beniel Studio" />
              <span>Software consulting · Product engineering</span>
            </div>
            <span className={styles.eyebrow}>{copy.eyebrow}</span>
            <h2>{copy.title}</h2>
          </div>
          <p>{copy.intro}</p>
        </motion.div>

        <div className={styles.cards}>
          {copy.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article key={card.title} className={`glass-panel ${styles.card}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }}>
                <div className={styles.icon}><Icon /></div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </motion.article>
            );
          })}
        </div>

        <div className={styles.process}>
          <span className={styles.processLabel}>{copy.processTitle}</span>
          <div className={styles.processSteps}>
            {copy.process.map((step, index) => <span key={step}><b>0{index + 1}</b>{step}{index < copy.process.length - 1 && <FaArrowRight />}</span>)}
          </div>
        </div>

        <a className={styles.cta} href="#experience">{copy.cta} <FaArrowRight /></a>
      </div>
    </section>
  );
}
