import { ThemeSwitcher } from "@/themes/ThemeSwitcher"

export const Header = () => {

    return <header className="header">
        <nav className="header__nav">
            <ul className="header__nav__menu">
                <li className="header__nav__menu__item">
                    Dashboard
                </li>
            </ul>
        </nav>

        <ThemeSwitcher />
    </header>
}