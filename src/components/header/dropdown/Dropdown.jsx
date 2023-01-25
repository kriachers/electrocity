const dropdownData = [
    {
        title: 'Ноутбуки и аксессуары',
        icon: './header/dropdown/laptop.jpg',
        url: '#'
    },
    {
        title: 'Смартфоны и аксессуары',
        icon: './header/dropdown/smartphone.jpg',
        url: '#'
    },
    {
        title: 'Телевизоры и аксессуары',
        icon: './header/dropdown/tv.jpg',
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
        url: '#'
    },
    {
        title: 'Наушники и аудиотехника',
        icon: './header/dropdown/headphones.jpg',
        url: '#'
    },
    {
        title: 'Гейминг',
        icon: './header/dropdown/game.jpg',
        url: '#'
    },
    {
        title: 'Умные часы',
        icon: './header/dropdown/watch.jpg',
        url: '#'
    },
    {
        title: 'Портативная акустика',
        icon: './header/dropdown/portable.jpg',
        url: '#'
    },
    {
        title: 'Сетевое оборудование',
        icon: './header/dropdown/network.jpg',
        url: '#'
    },
    {
        title: 'Офисная техника',
        icon: './header/dropdown/office.jpg',
        url: '#'
    },
    {
        title: 'Умный дом',
        icon: './header/dropdown/clever.jpg',
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
                        <img src={`${item.icon}`} alt="" className="dropdown-item__icon" />
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