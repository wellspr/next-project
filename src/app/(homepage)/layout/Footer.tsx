import { IconBrandGithubFilled } from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content__copy">
                    <p>&copy; 2025 Next Project - Projects Manager</p>
                    <p>by Paulo Wells</p>
                </div>
                <div className="footer__content__links">
                    <Link href={"https://github.com/wellspr/next-project"}>
                        <p>View on Github</p>
                        <IconBrandGithubFilled size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};