import { useState } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import type { StudioLanguage } from '../../data/studioContent';
import styles from '../../pages/StudioLanding/StudioLanding.module.css';

type StudioNavbarProps = { language: StudioLanguage; onLanguageChange: (language: StudioLanguage) => void; labels: readonly string[]; talk: string };

export function StudioNavbar({ language, onLanguageChange, labels, talk }: StudioNavbarProps) {
  const [open, setOpen] = useState(false);
  const links = [{ href: '#productos', label: labels[0] }, { href: '#servicios', label: labels[1] }, { href: '#proceso', label: labels[2] }];
  return <header className={styles.navbar}><nav className={styles.navContent}><a className={styles.brand} href="#inicio"><img src="/assets/images/beniel-studio.png" alt="Beniel Studio" /><span>beniel<span>studio</span></span></a><button className={styles.menuButton} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">{open ? <HiX /> : <HiOutlineMenuAlt3 />}</button><div className={`${styles.navLinks} ${open ? styles.navOpen : ''}`}>{links.map(link => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<div className={styles.languageSwitch}><button className={language === 'es' ? styles.languageActive : ''} onClick={() => onLanguageChange('es')}>ES</button><button className={language === 'en' ? styles.languageActive : ''} onClick={() => onLanguageChange('en')}>EN</button></div><a className={styles.navCta} href="#contacto" onClick={() => setOpen(false)}>{talk} <span>↗</span></a></div></nav></header>;
}
