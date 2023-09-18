"use client"
import { useEffect } from "react";
import Particles from "./components/particleEffects"
import { Kanit } from 'next/font/google'
import './switch.css';

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
        <main className={`${kanit.className} h-full`}>
            <Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>

            <div className="flex flex-col items-center justify-center text-center">
                <div className="h-auto flex flex-row gap-3">
                    <a href="./Resume"><p className="text-gray-500">Resume</p></a>
                    <a href="./Contact"><p className="text-gray-500">Contact</p></a>
                </div>

                <p id="typeWriter" className="text-8xl font-bold pb-10 pt-10">_</p>

                <p className="font-light text-gray-500">Hi, my name is Alex, I'm a self-taught Full Stack Software Engineer <br />
                    with a passion for creating modern applications.</p>
            </div>
        </main>
    )
}