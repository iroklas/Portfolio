"use client"
import { useEffect, useState } from "react";
import { Kanit } from 'next/font/google';
import Particles from "./components/particleEffects";
import './components/cursor.css';

const kanit = Kanit({ weight: ['300', '400', '600', '800'], subsets: ['latin'], variable: '--font-kanit'})

export default function Page() {

    const typeWriter = () => {
        let TypingSpeed = 60;
        let CharacterPos = 0;
        let MsgBuffer = "";
        let id = document.getElementById("typeWriter");
    
        let message = "Alex Mills"
    
        const startTyping = () => {
            if(CharacterPos != message.length) {
                MsgBuffer += message.charAt(CharacterPos);
                id.innerText = MsgBuffer + (CharacterPos != message.length-1 ? "_" : "");
                CharacterPos++;
                id.scrollTop = id.scrollHeight;
                setTimeout(startTyping, TypingSpeed);
            }
        }
        startTyping();
    };
    
    useEffect(() => {
        typeWriter();
    }, []);
    

    return (
        <main className={`${kanit.className} h-full overflow-hidden`}>
            <Particles
				className="cursor-glow absolute inset-0 -z-10 animate-fade-in pointer-events-none"
				quantity={100}
			/>

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center w-[35rem] h-[50vh] pl-5 pr-5">

                    <div className="h-auto flex flex-row gap-3">
                        <a href="./Resume"><p className="text-gray-500">Resume</p></a>
                        <a href="./Contact"><p className="text-gray-500">Contact</p></a>
                    </div>

                    <div className="h-auto w-auto">
                        <p id="typeWriter" className="text-8xl font-bold pb-10 pt-10">_</p>
                    </div>

                    <p className="font-light text-gray-500">Hi, my name is Alex, I'm a self-taught Full Stack Software Engineer 
                        with a passion for creating modern applications.
                    </p>
                </div>
            </div>
        </main>
    )
}