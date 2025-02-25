import "./sign-in-button.scss";
import { IconBrandGithub } from "@tabler/icons-react";
import { signUserIn } from "../../actions";

export const SignInButton = () => {
    return (
        <form action={signUserIn}>
            <button className="signin" type="submit">
                Signin with Github
                <IconBrandGithub />
            </button>
        </form>
    );
};