"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PiFileJsx, PiFileSql, PiFileTsx, PiGithubLogo } from "react-icons/pi";
import {
  SiAmazonaws,
  SiGithubactions,
  SiMicrosoftazure,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandPython } from "react-icons/tb";
import { Syne } from "next/font/google";
import { Button, Card, Input, Link, Textarea } from "@nextui-org/react";
import Logo from "./components/Logo";
import { SendEmail } from "./server-actions";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export default function Page() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const handleSendMessage = async () => {
    await SendEmail(senderName, senderEmail, senderMessage);

    setSenderName("");
    setSenderEmail("");
    setSenderMessage("");
  };

  return (
    <div className={`${syne.className} flex flex-col min-h-screen`}>
      <main className="flex-1">
        <section className="flex flex-wrap gap-12 text-center justify-center place-items-center w-full py-24 lg:py-32 bg-background">
          <Logo className="h-64 w-64" />
          <div>
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl pt-6"
              initial={{ y: -10, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              className="max-w-[700px] text-gray-500 md:text-xl mt-4 mx-auto dark:text-gray-400"
              initial={{ y: -10, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              My name is Alex Mills, a Full Stack Developer specialized in
              building high-quality websites and applications.
            </motion.p>
          </div>
        </section>

        <section className="flex justify-center w-full bg-secondBackground py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Programming Languages, Frameworks & Tools
            </h2>
            <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-6">

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
            >
                <PiFileJsx className="h-12 w-12" />
                <h3 className="text-xl font-bold">JavaScript</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >
                <PiFileTsx className="h-12 w-12" />
                <h3 className="text-xl font-bold">TypeScript</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >
                <TbBrandCSharp className="h-12 w-12" />
                <h3 className="text-xl font-bold">C# 10.0</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >
                <TbBrandPython className="h-12 w-12" />
                <h3 className="text-xl font-bold">Python</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >                <SiMicrosoftazure className="h-12 w-12" />
                <h3 className="text-xl font-bold">Azure</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >                <SiAmazonaws className="h-12 w-12" />
                <h3 className="text-xl font-bold">AWS</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >                <PiFileSql className="h-12 w-12" />
                <h3 className="text-xl font-bold">SQL</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >                <PiGithubLogo className="h-12 w-12" />
                <h3 className="text-xl font-bold">GitHub</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >                <SiGithubactions className="h-12 w-12" />
                <h3 className="text-xl font-bold">GitHub Actions</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >                <SiNodedotjs className="h-12 w-12" />
                <h3 className="text-xl font-bold">Node.js</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >                <SiReact className="h-12 w-12" />
                <h3 className="text-xl font-bold">React</h3>
              </motion.div>

              <motion.div className="flex flex-col gap-2 justify-center place-items-center p-4 border-white border-1 rounded-md"
                initial={{ borderColor: "#ffffff" }}
                whileHover={{ borderColor: "#D90429" }}
              >                <SiNextdotjs className="h-12 w-12" />
                <h3 className="text-xl font-bold">Next.js</h3>
              </motion.div>
            </div> 
          </div>
        </section>

        <section
          className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-background"
          id="contact"
        >
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <div className="mt-8 flex flex-col gap-6 max-w-md mx-auto">
              <Input
                value={senderName}
                onValueChange={setSenderName}
                variant="bordered"
                size="sm"
                className="h-auto"
                placeholder="Your Name"
                type="text"
              />
              <Input
                value={senderEmail}
                onValueChange={setSenderEmail}
                variant="bordered"
                size="sm"
                className="h-auto"
                placeholder="Your Email"
                type="email"
              />

              <Textarea
                className="h-24 rounded-md"
                placeholder="Your Message"
                variant="bordered"
                value={senderMessage}
                onValueChange={setSenderMessage}
              />

              <Button
                onPress={handleSendMessage}
                className="self-center font-"
                type="submit"
                color="primary"
                variant="shadow"
              >
                Submit
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
