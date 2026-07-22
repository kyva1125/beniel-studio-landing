import { useState } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import styles from '../../pages/StudioLanding/StudioLanding.module.css';

const links = [{ href: '#productos', label: 'Productos' }, { href: '#servicios', label: 'Servicios' }, { href: '#proceso', label: 'Cómo trabajamos' }];

export function StudioNavbar() {
  const [open, setOpen] = useState(false);
  return <header className={styles.navbar}><nav className={styles.navContent} aria-label="Navegación principal"><a className={styles.brand} href="#inicio"><img src="/assets/images/beniel-studio.png" alt="" /><span>beniel<span>studio</span></span></a><button className={styles.menuButton} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menú">{open ? <HiX /> : <HiOutlineMenuAlt3 />}</button><div className={`${styles.navLinks} ${open ? styles.navOpen : ''}`}>{links.map(link => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className={styles.navCta} href="#contacto" onClick={() => setOpen(false)}>Hablemos <span>↗</span></a></div></nav></header>;
}
