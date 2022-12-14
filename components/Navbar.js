import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({darkMode, setDarkMode}) => (
  <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Mahmoud Makhlouf</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  id="resume-link"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1K3kABRw1efyYB8kwhq6-K-yqWrSY-JZO/view?usp=sharing"
                  target="blank"
                >
                  Resume
                </a>
              </li>
            </ul>
  </nav>
)
export default Navbar;
