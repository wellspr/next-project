"use client";

import "./logged-user-area.scss";

import { useEffect, useRef, useState } from "react";

import { LoggedUserAvatar } from "./LoggedUserAvatar";
import { LoggedUserDetails } from "./LoggedUserDetails";

import { Session } from "next-auth";

export const LoggedUserArea = ({ session }: { session: Session }) => {

    const { ref, setShow, show } = useShowContent();

    return (
        <div className="logged-user-area" ref={ref}>
            <div className="logged-user-area__profile-image"
                onClick={() => setShow(!show)}>
                <LoggedUserAvatar session={session} />
            </div>
            {
                show &&
                <div className="logged-user-area__details">
                    <LoggedUserDetails session={session}/>
                </div>
            }
        </div>
    );
};


const useShowContent = () => {
    const [show, setShow] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onBodyClick = (e: MouseEvent) => {
            const currentRef = ref.current;

            if (currentRef?.contains(e.target as Node)) {
                return null;
            }

            setShow(false);
        };

        const onEscape = (e: KeyboardEvent) => {

            console.log(e.key);

            if (e.key.toLowerCase() === 'escape') {
                setShow(false);
            }
        };

        document.body.addEventListener("click", onBodyClick);
        window.addEventListener("keydown", onEscape);

        return () => {
            document.body.removeEventListener("click", onBodyClick);
            window.removeEventListener("keydown", onEscape);
        }
    }, []);

    return {
        show,
        setShow,
        ref,
    };
};