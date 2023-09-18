"use client"
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Kanit } from 'next/font/google'
import Particles from "../components/particleEffects";
import { useState } from "react";

const kanit = Kanit({ weight: ['300', '400', '600', '800'], subsets: ['latin'], variable: '--font-kanit'})

export default function Page() {

    const [currentPage, setCurrentPage] = useState();

    return (
        <main className={kanit.className}>
            <Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>

            <Navbar position="static"
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "items-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[2px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-danger",
                    ],
                    wrapper: [
                        "justify-center"
                    ]
                }}
            >
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem isActive>
                        <Link color="danger">About Me</Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link color="foreground">Work Experience</Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link color="foreground">Languages & Frameworks</Link>
                    </NavbarItem>
                        
                    <NavbarItem>
                        <Link color="foreground">Projects</Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </main>
    );
}