import { ThemeSwitcher } from "@/themes";
import { auth } from "@/auth";

export default async function DashboardPage() {

    const session = await auth();

    if (!session) {
        return (
            <div>Unauthorized. Please login.</div>
        );
    }

    return <>
        <p>Dashboard</p>
        <ThemeSwitcher />
    </>
}