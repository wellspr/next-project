"use server";

import "./header.scss";

import { Brand } from "../../components/Brand";
import { auth } from "@/auth";

import { LoggedUserArea } from "@/app/(auth)/components/LoggedUserArea";
import { SignInButton } from "@/app/(auth)/components/SignInButton";

export const Header = async () => {

    const session = await auth();

    if (!session) {
        return (
            <header className="header">
                <Brand />
                <SignInButton />
            </header>
        );
    }

    return <header className="header">
        <Brand />
        <LoggedUserArea session={session} />
    </header>
};