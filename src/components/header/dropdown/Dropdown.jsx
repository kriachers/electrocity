const dropdownData = [
    {
        title: 'Ноутбуки и аксессуары',
        icon: './header/dropdown/laptop.jpg',
        iconRetina: './header/dropdown-retina/laptop@2x.jpg',
        url: '#'
    },
    {
        title: 'Смартфоны и аксессуары',
        icon: './header/dropdown/smartphone.jpg',
        iconRetina: './header/dropdown-retina/smartphone@2x.jpg',
        url: '#'
    },
    {
        title: 'Телевизоры и аксессуары',
        icon: './header/dropdown/tv.jpg',
        iconRetina: './header/dropdown-retina/tv@2x.jpg',
        url: '#'
    },
    {
        title: 'Фото и видеотехника',
        icon: './header/dropdown/photo.svg',
        url: '#'
    },
    {
        title: 'Планшеты и аксессуары',
        icon: './header/dropdown/tablet.jpg',
        iconRetina: './header/dropdown-retina/tablet@2x.jpg',
        url: '#'
    },
    {
        title: 'Наушники и аудиотехника',
        icon: './header/dropdown/headphones.jpg',
        iconRetina: './header/dropdown-retina/headphones@2x.jpg',
        url: '#'
    },
    {
        title: 'Гейминг',
        icon: './header/dropdown/game.jpg',
        iconRetina: './header/dropdown-retina/game@2x.jpg',
        url: '#'
    },
    {
        title: 'Умные часы',
        icon: './header/dropdown/watch.jpg',
        iconRetina: './header/dropdown-retina/watch@2x.jpg',
        url: '#'
    },
    {
        title: 'Портативная акустика',
        icon: './header/dropdown/portable.jpg',
        iconRetina: './header/dropdown-retina/portable@2x.jpg',
        url: '#'
    },
    {
        title: 'Сетевое оборудование',
        icon: './header/dropdown/network.jpg',
        iconRetina: './header/dropdown-retina/network@2x.jpg',
        url: '#'
    },
    {
        title: 'Офисная техника',
        icon: './header/dropdown/office.jpg',
        iconRetina: './header/dropdown-retina/office@2x.jpg',
        url: '#'
    },
    {
        title: 'Умный дом',
        icon: './header/dropdown/clever.jpg',
        iconRetina: './header/dropdown-retina/clever@2x.jpg',
        url: '#'
    }
]

function Dropdown(props) {
    return (
        <div className={`dropdown ${props.openMenu ? 'open' : ''}`}>
            <div className="dropdown-burger__wrapper">
                <div className={`header__burger-button ${props.openMenu ? 'open' : ''}`} onClick={() => props.setOpenMenu(!props.openMenu)}>
                    <span className="header-burger-button__line"></span>
                    <span className="header-burger-button__line"></span>
                    <span className="header-burger-button__line"></span>
                </div>
                </div>
        <h2 className="dropdown__title">Каталог</h2>
        {
            dropdownData.map((item) => {
                return (
                <ul className="dropdown__list">
                    <li className="dropdown-list__item">
                        <img srcset={item.iconRetina ? `${item.iconRetina} 2x` : ''} src={`${item.icon}`} alt="" className="dropdown-item__icon" />
                        <p className="dropdown-item__title">{item.title}</p>
                    </li>
                    <img src="./header/dropdown/arrow.svg" alt="" className="dropdown-list__arrow" />
                </ul>
                )
                
            })
        }
</div>
     );
}

export default Dropdown;