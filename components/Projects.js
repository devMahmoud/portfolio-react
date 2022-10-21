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
        <div className="pt-8 text-center">
          <a href="https://tourify-app.netlify.app/" target="blank">
            <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
              Demo
            </button>
          </a>
          <a href="https://github.com/devMahmoud/Booking-Tours-Front-End" target="blank">
            <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
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
        <div className="pt-8 text-center">
          <a href="https://mahmoud-math-magicians.herokuapp.com/" target="blank">
                  <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
                    Demo
                  </button>
          </a>
          <a href="https://github.com/devMahmoud/math-magicians" target="blank">
            <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
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
        <div className="pt-8 text-center">
          <a href="https://devmahmoud-chat-app.herokuapp.com/" target="blank">
            <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
              Demo
            </button>
          </a>
          <a href="https://github.com/devMahmoud/chat-app" target="blank">
            <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
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
        <div className="pt-8 text-center">
          <a href="https://rbanos-mv.github.io/space-travelers/#/missions" target="blank">
            <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
              Demo
            </button>
          </a>
          <a href="https://github.com/devMahmoud/space-travelers" target="blank">
            <button className="text-lg bg-white rounded-lg text-gray-700 font-bold px-4 py-3 mx-2 ">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Projects;
