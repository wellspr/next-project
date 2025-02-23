import "./main.scss";

export const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="main">
            {children}
        </main>
    );
};