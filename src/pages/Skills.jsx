import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  FaCss3,
  FaGolang,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaPhp,
  FaPython,
} from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10">
        <div className="container px-4 grid gap-6 text-center md:px-6 lg:gap-10 text-primary-dark dark:text-ternary-light">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills & Technologies
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A brief overview of the languages, frameworks, and tools I
              specialize in.
            </p>
          </div>
          <div className="flex items-start justify-center mt-4 space-x-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-left">
                Languages
              </h3>
              <div className="grid grid-cols-1 items-center gap-2 text-left">
                <div className="flex items-center space-x-2">
                  <SiJavascript />
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiTypescript />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaJava />
                  <span>Java</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPython />
                  <span>Python</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaGolang className="w-6 h-6" />
                  <span>GO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhp className="w-6 h-6" />
                  <span>PHP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaHtml5 />
                  <span>HTML</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCss3 />
                  <span>CSS</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight text-left">
                Technologies
              </h3>
              <div className="grid grid-cols-1 items-center gap-2 text-left">
                <div className="flex items-center space-x-2">
                  <FaReact />
                  <span>React.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TbBrandNextjs />
                  <span>Next.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaLaravel />
                  <span>Laravel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiDjango />
                  <span>Django</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaNodeJs />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiTailwindcss />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiPostgresql />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SiMongodb />
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
