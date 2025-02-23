import "./sass/main.scss";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";


export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <Main>
                <div className="homepage">
                    {children}
                </div>
            </Main>
            <Footer />
        </>
    );
}