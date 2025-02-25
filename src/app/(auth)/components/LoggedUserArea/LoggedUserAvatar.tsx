import "./logged-user-avatar.scss";

import { Session } from "next-auth";
import Image from "next/image";

export const LoggedUserAvatar = ({ session }: { session: Session }) => {

    if (!session) {
        return null;
    }

    return (
        <div className="logged-user-avatar">
            {
                (session.user && session.user.image) ?
                    <Image
                        src={session.user.image}
                        alt="Profile Image"
                        fill
                    /> :
                    <>
                        {
                            (session.user && session.user.name) &&
                            <Image
                                src={`https://ui-avatars.com/api/?name=${session.user.name}`}
                                alt="Profile Image"
                                fill
                            />
                        }
                    </>
            }
        </div>
    );
};