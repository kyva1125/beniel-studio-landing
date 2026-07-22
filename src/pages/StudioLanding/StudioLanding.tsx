import { FaArrowRight, FaCode, FaLayerGroup, FaMobileAlt, FaRegLightbulb, FaRobot, FaServer, FaWhatsapp } from 'react-icons/fa';
import { StudioNavbar } from '../../components/studio/StudioNavbar';
import styles from './StudioLanding.module.css';

const products = [
  { name: 'ACITA', category: 'Reservas sin fricción', description: 'Agenda online para barberías, salones de belleza y negocios que quieren recibir reservas desde un link o QR.', image: '/assets/images/acita/1.png', accent: 'purple', tags: ['Reservas', 'WhatsApp', 'Panel de citas'] },
  { name: 'ACATA', category: 'Catálogos que venden', description: 'Catálogos digitales para mostrar productos, recibir pedidos por WhatsApp y gestionar tu negocio sin complicaciones.', image: '/assets/images/acata/1.png', accent: 'orange', tags: ['Catálogo', 'QR', 'Pedidos'] },
  { name: 'KEPCHU', category: 'WhatsApp a escala', description: 'Plataforma para conectar tu WhatsApp Business, crear campañas y comunicarte con tus clientes con intención.', image: '/assets/images/kepchu/1.png', accent: 'blue', tags: ['Campañas', 'Automatización', 'Métricas'] },
  { name: 'PROGRAMAR WHATSAPP', category: 'Mensajes a tiempo', description: 'Programa mensajes, organiza tus envíos y mantén conversaciones importantes en el momento correcto.', image: '/assets/images/programar-whatsapp/1.png', accent: 'green', tags: ['Programación', 'Historial', '24/7'] },
];

const services = [
  { icon: FaRegLightbulb, title: 'Estrategia de producto', text: 'Aterrizamos tu idea, priorizamos lo importante y definimos una ruta de lanzamiento realista.' },
  { icon: FaLayerGroup, title: 'Diseño UX/UI', text: 'Experiencias visuales claras que hacen que tu producto se sienta útil desde el primer clic.' },
  { icon: FaCode, title: 'Desarrollo web', text: 'Webs, plataformas y sistemas a medida rápidos, modernos y listos para crecer.' },
  { icon: FaMobileAlt, title: 'Apps móviles', text: 'Aplicaciones Android e iOS enfocadas en resolver procesos reales de tus usuarios.' },
  { icon: FaServer, title: 'SaaS y sistemas', text: 'Construimos herramientas internas y productos por suscripción, de la idea a producción.' },
  { icon: FaRobot, title: 'IA y automatización', text: 'Integramos IA y flujos automatizados donde de verdad ahorran tiempo y mejoran tu operación.' },
];

const steps = [
  ['Entendemos el reto', 'Escuchamos, investigamos y encontramos el problema que vale la pena resolver.'],
  ['Diseñamos la solución', 'Definimos la experiencia, el alcance y una primera versión que puedas validar pronto.'],
  ['Construimos y mejoramos', 'Lanzamos, medimos y seguimos iterando contigo.'],
];

export function StudioLanding() {
  return <main>
    <StudioNavbar />
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroGrid} />
      <div className={styles.heroContent}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}><i /> Estudio digital independiente</p>
          <h1>Productos digitales <em>que mueven</em> negocios.</h1>
          <p className={styles.lead}>Creamos software, experiencias y automatizaciones para negocios que prefieren avanzar en vez de seguir resolviendo todo a mano.</p>
          <div className={styles.heroActions}><a href="#contacto" className={styles.primaryButton}>Conversemos sobre tu idea <FaArrowRight /></a><a href="#productos" className={styles.textButton}>Ver productos <span>↓</span></a></div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.orbit} />
          <div className={`${styles.floatingCard} ${styles.cardOne}`}><span className={styles.miniIcon}>✦</span><div><b>Automatiza</b><small>lo repetitivo</small></div></div>
          <div className={`${styles.floatingCard} ${styles.cardTwo}`}><span className={styles.greenDot} /><div><b>Siempre activo</b><small>para tu negocio</small></div></div>
          <div className={styles.productSphere}><div className={styles.sphereGlow} /><img src="/assets/images/beniel-studio.png" alt="Logo de Beniel Studio" /></div>
          <div className={styles.dots}>· · ·<br />· · ·<br />· · ·</div>
        </div>
      </div>
      <div className={styles.trustBar}><span>Construimos para negocios que están creciendo</span><div><b>productos</b><b>tecnología</b><b>experiencias</b><b>impacto</b></div></div>
    </section>

    <section id="productos" className={styles.productsSection}>
      <div className={styles.sectionIntro}><p className={styles.kicker}><i /> Productos Beniel Studio</p><h2>Soluciones listas para <em>hacer más.</em></h2><p>Herramientas que nacen de problemas cotidianos y ayudan a los negocios a operar mejor.</p></div>
      <div className={styles.productGrid}>{products.map(product => <article className={`${styles.productCard} ${styles[product.accent]}`} key={product.name}><div className={styles.productImage}><img src={product.image} alt={`Vista previa de ${product.name}`} /></div><div className={styles.productContent}><p>{product.category}</p><h3>{product.name}</h3><span>{product.description}</span><div>{product.tags.map(tag => <b key={tag}>{tag}</b>)}</div><a href="#contacto">Conocer producto <FaArrowRight /></a></div></article>)}</div>
    </section>

    <section id="servicios" className={styles.servicesSection}>
      <div className={styles.servicesHeader}><div><p className={styles.kicker}><i /> Lo que hacemos</p><h2>Tu idea necesita más que código.<br /><em>Necesita dirección.</em></h2></div><p>Nos sumamos a tu equipo para transformar retos de negocio en productos digitales que las personas quieran usar.</p></div>
      <div className={styles.serviceGrid}>{services.map(({ icon: Icon, title, text }, index) => <article className={styles.serviceCard} key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p><a href="#contacto">↗</a></article>)}</div>
    </section>

    <section id="proceso" className={styles.processSection}>
      <div className={styles.processVisual}><img src="/assets/images/beniel-studio.png" alt="Beniel Studio" /></div>
      <div className={styles.processCopy}><p className={styles.kicker}><i /> Nuestro enfoque</p><h2>Menos vueltas.<br /><em>Más avance.</em></h2><p>No hacemos soluciones en piloto automático. Trabajamos contigo, entendemos el contexto y construimos por etapas para que cada paso tenga sentido.</p><ol>{steps.map(([title, text], index) => <li key={title}><b>0{index + 1}</b><div><h3>{title}</h3><span>{text}</span></div></li>)}</ol></div>
    </section>

    <section id="contacto" className={styles.contactSection}>
      <div className={styles.contactGlow} /><img className={styles.contactLogo} src="/assets/images/beniel-studio.png" alt="Beniel Studio" />
      <p className={styles.kicker}><i /> ¿Tienes algo en mente?</p><h2>Hagamos que tu próxima<br /><em>gran idea suceda.</em></h2><p>Cuéntanos lo que quieres construir. Empezamos con una conversación.</p>
      <a className={styles.whatsappButton} href="https://wa.me/51999888888" target="_blank" rel="noreferrer"><FaWhatsapp /> Escribir por WhatsApp <FaArrowRight /></a>
    </section>
    <footer className={styles.footer}><a className={styles.brand} href="#inicio"><img src="/assets/images/beniel-studio.png" alt="" /><span>beniel<span>studio</span></span></a><p>Productos digitales con propósito.</p><span>© {new Date().getFullYear()} Beniel Studio</span></footer>
  </main>;
}
