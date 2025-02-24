import "./signin.scss";
import {auth, signOut} from "@/auth";
import { signIn } from "@/auth";
import { IconBrandGithub } from "@tabler/icons-react";

export default async function SignIn() {

    const session = await auth();

    if (!session) {
        return (
            <form action={async () => {
                "use server";
                await signIn("github");
            }}>
                <button className="signin" type="submit">
                    Signin with Github
                    <IconBrandGithub />
                </button>
            </form>
        )
    }

    console.log(session);

    return (
        <div className="loggedin">
            <p>Logged in</p>

            <form action={async () => {
                "use server"
                await signOut();
            }}>
                <button className="signout" type="submit">
                    Signout
                </button>
            </form>
        </div>
    );
}