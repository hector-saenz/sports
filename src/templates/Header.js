const Header = () => {
    const view = `
        <div class="header__wrapper">
            <div class="header__title-container">
                <h1 class="header__title"><a href="/">Sports</a></h1>
            </div>
            <nav class="header__navbar">
            <ul class="header__menu">
                <li class="header__menu-item">
                    <a class="header__item-link" href="/">Home</a>
                </li>
                <li class="header__menu-item">
                    <a class="header__item-link" href="/about">About</a>
                </li>
            </ul>
            </nav>
        </div>
    `
    return view
}

export default Header