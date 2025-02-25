import "./sign-out-button.scss";
import { signUserOut } from "../../actions";

export const SignOutButton = () => {
    return (
        <form action={signUserOut}>
            <button className="signout" type="submit">
                Signout
            </button>
        </form>
    );
};