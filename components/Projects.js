import Image from 'next/image';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

const Projects = () => (
  <section className="py-10">
    <div>
      <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
      Checkout some of my recent projects
      </p>
    </div>
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="basis-1/3 flex-1 ">
        <Image
          className="rounded-lg object-contain"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web1}
          alt=""
        />
        <p className="text-gray-800 dark:text-gray-200"><span className="text-teal-500">Built With:</span> JavaScript, React, Ruby On Rails, Devise, PostgreSQL.</p>
        <div className="pt-8 text-center">
          <a id="tourify-demo" href="https://tourify-app.netlify.app/" target="blank">
            <button className="text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 rounded-lg text-gray-700 font-bold px-4 py-3 mx-2">
              Demo
            </button>
          </a>
          <a id="tourify-repo" href="https://github.com/devMahmoud/Booking-Tours-Front-End" target="blank">
            <button className="text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 rounded-lg text-gray-700 font-bold px-4 py-3 mx-2">
              Code
            </button>
          </a>
        </div>
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-contain"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web2}
          alt=""
        />
        <p className="text-gray-800 dark:text-gray-200"><span className="text-teal-500">Built With:</span> HTML, CSS, JavaScript, and React.</p>
        <div className="pt-8 text-center">
          <a id="math-demo" href="https://mahmoud-math-magicians.herokuapp.com/" target="blank">
                  <button className="text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 rounded-lg text-gray-700 font-bold px-4 py-3 mx-2">
                    Demo
                  </button>
          </a>
          <a id="math-repo" href="https://github.com/devMahmoud/math-magicians" target="blank">
            <button className="text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 rounded-lg text-gray-700 font-bold px-4 py-3 mx-2">
              Code
            </button>
          </a>
        </div>
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-contain"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web3}
          alt=""
        />
        <p className="text-gray-800 dark:text-gray-200"><span className="text-teal-500">Built With:</span> HTML, CSS, JavaScript, Node.js, Express, and Socket.IO.</p>
        <div className="pt-8 text-center">
          <a id="chat-demo" href="https://devmahmoud-chat-app.herokuapp.com/" target="blank">
            <button className="text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 rounded-lg text-gray-700 font-bold px-4 py-3 mx-2">
              Demo
            </button>
          </a>
          <a id="chat-repo" href="https://github.com/devMahmoud/chat-app" target="blank">
            <button className="text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 rounded-lg text-gray-700 font-bold px-4 py-3 mx-2">
              Code
            </button>
          </a>
        </div>
      </div>
      <div className="basis-1/3 flex-1">
        <Image
          className="rounded-lg object-contain"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web4}
          alt=""
        />
        <p className="text-gray-800 dark:text-gray-200"><span className="text-teal-500">Built With:</span> HTML, CSS, JavaScript, React, Redux.</p>
        <div className="pt-8 text-center">
          <a id="space-demo" href="https://rbanos-mv.github.io/space-travelers/#/missions" target="blank">
            <button className="text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 rounded-lg text-gray-700 font-bold px-4 py-3 mx-2">
              Demo
            </button>
          </a>
          <a id="space-repo" href="https://github.com/devMahmoud/space-travelers" target="blank">
            <button className="text-lg bg-gradient-to-r from-cyan-500 text- to-teal-500 rounded-lg text-gray-700 font-bold px-4 py-3 mx-2">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Projects;
