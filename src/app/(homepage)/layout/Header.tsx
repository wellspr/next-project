import Link from "next/link";
import { Brand } from "../components/Brand";
import { paths } from "@/config";

export const Header = () => {
    return <header className="header">
        <Brand />
        <nav className="header__nav">
            <ul className="header__nav__menu">
                <li className="header__nav__menu__item">
                    <Link href={paths.dashboard.href}>
                        {paths.dashboard.name}
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}