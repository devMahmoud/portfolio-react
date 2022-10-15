import Image from 'next/image';
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import myPhoto from '../public/ascii-me.png'

const Summary = () => (
  <div className="text-center p-10 py-10">
    <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
      Mahmoud Makhlouf
    </h2>
    <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
      Software Engineer.
    </h3>
    <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
    Computer Science graduate, Full-stack software engineer specializing in JavaScript, React, Redux, and Ruby On Rails. Also, I’m familiar with Java and NodeJS.
    </p>
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
      <a href="https://www.linkedin.com/in/mahmoud-abdelkader-makhlouf/" target="blank">
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/devMahmoud" target="blank">
        <AiFillGithub />
      </a>
    </div>
    <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
      <Image src={myPhoto} layout="fill" objectFit="cover" alt="personal image"/>
    </div>
  </div>
)

export default Summary;