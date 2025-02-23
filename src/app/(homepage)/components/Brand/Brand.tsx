import "./brand.scss";
import Link from "next/link";

export const Brand = () => {
    return (
        <div className="brand">
            <div className="brand__title">
                <Link href={"/"}>Next Project</Link>
            </div>
        </div>
    );
};