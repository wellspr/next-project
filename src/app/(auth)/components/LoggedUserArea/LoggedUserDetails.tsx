import "./logged-user-details.scss";

import { SignOutButton } from "@/app/(auth)/components/SignOutButton";
import { paths } from "@/config";
import { Session } from "next-auth";
import Link from "next/link";

export const LoggedUserDetails = ({ session }: { session: Session }) => {
    return (
        <nav className="logged-user-details">
            <div className="logged-user-details__email">{ session.user?.email }</div>
            <ul className="logged-user-details__list">
                <li className="logged-user-details__list__item">
                    <Link href={paths.dashboard.href}>
                        {paths.dashboard.name}
                    </Link>
                </li>
                <li className="logged-user-details__list__item">Account</li>
                <li className="logged-user-details__list__item">
                    <SignOutButton />
                </li>
            </ul>
        </nav>
    );
};