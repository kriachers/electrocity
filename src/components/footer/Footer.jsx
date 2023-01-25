function Footer() {
    return (
        <div className="footer__wrapper">
        <footer className="footer container">
            <div className="footer__inner">
                <ul className="footer__nav">
                    <li className="footer-nav__item"><a href="#" className="footer__link">Главная</a></li>
                    <li className="footer-nav__item"><a href="#" className="footer__link">Акции</a></li>
                    <li className="footer-nav__item"><a href="#" className="footer__link">Магазины</a></li>
                    <li className="footer-nav__item"><a href="#" className="footer__link">Профиль</a></li>
                </ul>
                <div className="footer__contact">
                    <div className="footer-contact__item">
                        <img className="footer-contact__icon" src="./header/phone.svg" alt=""/>
                        <a className="footer-contact__title" href="tel:6031112298">8 (800) 000 00 00</a>
                    </div>
                    <div className="footer-contact__item">
                        <img className="footer-contact__icon" src="./footer/email.svg" alt=""/>
                        <p className="footer-contact__title">electrocity.ru</p>
                    </div>
                </div>
            </div>
            <div className="footer__inner">
            <small className="footer__copy">© 2014-2021 «ЭЛЕКТРОСИТИ». Все права защищены</small>
                <div className="footer__social">
                    <img src="./footer/vk.svg" alt="" className="footer-social__item" />
                    <img src="./footer/yt.svg" alt="" className="footer-social__item" />
                    <img src="./footer/tg.svg" alt="" className="footer-social__item" />
                </div>
            </div>
        </footer>
        </div>
    );
}

export default Footer;