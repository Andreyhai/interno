import React from 'react';
import styles from './Header.module.scss';
import logoIcon from '../../assets/icons/logoIcon.svg'
import logoText from '../../assets/logoTeext.svg'
import humburgerIcon from '../../assets/icons/Hamburger.svg'
import closeIcon from '../../assets/icons/closeIcon.svg'




const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="#home" className={styles.logo} aria-label="Вернуться на главную">
                    <img src={logoIcon} alt="Логотип" />
                    <img src={logoText} alt={logoText} />
                </a>
                <nav className={styles.navigation}>
                    <ul>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#pages">Pages</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
                <img className={styles.menu} src={humburgerIcon} alt={'Меню'} onClick={toggleMenu} />
            </div>


            <div className={`${styles.sidePanel} ${isMenuOpen ? styles.open : ''}`}>
                <img className={styles.closeButton} src={closeIcon} alt="Закрыть боковую панель" onClick={toggleMenu} />
                <ul>
                    <li><a href="#home" className="active" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
                    <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                    <li><a href="#pages" onClick={toggleMenu}>Pages</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;