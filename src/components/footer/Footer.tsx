import logoIcon from "../../assets/icons/logoIcon.svg";
import logoText from "../../assets/icons/logoTeext.svg";

import facebook from "../../assets/icons/social/facebook.svg";
import twiter from "../../assets/icons/social/twiter.svg";
import inn from "../../assets/icons/social/in.svg";
import instagramm from "../../assets/icons/social/instagramm.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
  const socials = [facebook, twiter, inn, instagramm];

  const pages = ["Style Guide", "Protected", "Licenses", "Changelog", "404"];
  const explore = ["About Us", "Recent Blog", "Pricing Plan", "Our Projects", "Contact Us"];
  const contact = ["53, East Birchwood Ave. Brooklyn, New York 11201, USA.", "contact@interno.com", "(123) 456 - 7890"];


  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <article className={styles.footerBlock}>
          <article className={styles.block}>
            <a
              href="#home"
              className={styles.logo}
              aria-label="Вернуться на главную"
            >
              <img src={logoIcon} alt="Логотип" />
              <img src={logoText} alt={logoText} />
            </a>
            <p className={styles.link}>
              We are the leading architect and interior design firm in the
              world.
            </p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <img src={social} alt={social} />
              ))}
            </div>
          </article>
          <article className={styles.block}>
            <span className={styles.title}>Pages</span>
            {pages.map((link) => (
              <span className={styles.link}>{link}</span>
            ))}
          </article>
          <article className={styles.block}>
            <span className={styles.title}>Explore</span>
            {explore.map((link) => (
              <span className={styles.link}>{link}</span>
            ))}
          </article>
          <article className={styles.block}>
            <span className={styles.title}>Contact</span>
            {contact.map((link) => (
              <span className={styles.link}>{link}</span>
            ))}
          </article>
        </article>
        <article className={styles.footerCopyRight}>
            <span className={styles.defaultText}>footerCopyRight</span>
            <span className={styles.goldText}>Victorflow</span>
            <span className={styles.defaultText}>Templates - Powered by</span>
            <span className={styles.goldText}>Webflow</span>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
