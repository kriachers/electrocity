function Toolbar() {
    return (
        <div className="header-toolbar__wrapper">
        <div className="header__toolbar container">
            <div className="header-toolbar__inner">
                <div className="header-toolbar__item">
                    <img className="header-toolbar__item-icon" src="./header/landmark.svg" alt=""/>
                <p className="header-toolbar__item-title">г. Рязань</p>
                </div>
                <div className="header-toolbar__item">
                    <img className="header-toolbar__item-icon" src="./header/store.svg" alt=""/>
                <p className="header-toolbar__item-title">Магазины</p>
                </div>
            </div>
            <div className="header-toolbar__item">
                <img className="header-toolbar__item-icon" src="./header/phone.svg" alt=""/>
            <p className="header-toolbar__item-title">8 (800) 000 00 00</p>
            </div>
        </div>
    </div>
    );
}

export default Toolbar;