import Image from 'next/image';
import consulting from "../public/consulting.png";
import code from "../public/code.png";
import design from "../public/design.png";

const Skills = () => (
<div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
        <Image src={design} width={100} height={100} alt="" />
        <h3 className="text-lg font-medium text-teal-600 pt-8 pb-2  ">
          Language
        </h3>
        <p className="text-gray-800 py-1">Javascript</p>
        <p className="text-gray-800 py-1">Ruby</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={code} width={100} height={100} alt="" />
        <h3 className="text-lg font-medium text-teal-600 pt-8 pb-2 ">
          Frameworks
        </h3>
        <p className="text-gray-800 py-1">Bootstrap</p>
        <p className="text-gray-800 py-1">Tailwind</p>
        <p className="text-gray-800 py-1">React</p>
        <p className="text-gray-800 py-1">Ruby on Rails</p>
        <p className="text-gray-800 py-1">RSpec</p>
        <p className="text-gray-800 py-1">Capybara</p>
        <p className="text-gray-800 py-1">Webpack</p>
        <p className="text-gray-800 py-1">Node.js</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
        <Image src={consulting} width={100} height={100} alt="" />
        <h3 className="text-lg font-medium text-teal-600 pt-8 pb-2 ">Skills</h3>
        <p className="text-gray-800 py-1">HTML</p>
        <p className="text-gray-800 py-1">CSS</p>
        <p className="text-gray-800 py-1">PostgreSQL</p>
        <p className="text-gray-800 py-1">MongoDB</p>
        <p className="text-gray-800 py-1">GitHub</p>
        <p className="text-gray-800 py-1">Git</p>
        <p className="text-gray-800 py-1">Pair Programming</p>
        <p className="text-gray-800 py-1">Unit Testing</p>
        <p className="text-gray-800 py-1">Heroku</p>
      </div>
    </div>
)

export default Skills;