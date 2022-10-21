const Contact = () => {
  return (
    <div
      name="contact"
      className="py-10 flex items-center"
    >
      <h3 className="font-bold text-2xl leading-10 dark:text-white text-center font-serif">
        I&apos;m always interested in hearing about new projects, 
        so if you&apos;d like to chat please get in touch.
      </h3>
      <form
        action="https://getform.io/f/f566a66c-55ad-4229-91dd-c4ab33a4a354"
        method="POST"
        className="flex flex-col items-center justify-start max-w-[600px] w-full rounded-sm"
      >
        <input
          type="text"
          name="name"
          className="bg-[#ccd6f6] p-2 w-[70vw] sm:w-full"
          placeholder="Name..."
          required
        ></input>

        <input
          type="email"
          name="email"
          className="bg-[#ccd6f6] my-2 p-2 w-[70vw] sm:w-full"
          placeholder="E-mail..."
          required
        ></input>
        <textarea
          className="bg-[#ccd6f6] my-2 p-2 w-[70vw] sm:w-full text-black"
          rows={10}
          name="message"
          placeholder="Message..."
          required
        ></textarea>
        <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white text-[1.3vw] whitespace-nowrap px-6 border-2 py-3 my-3 flex justify-center items-center hover:border-pink-600 rounded-md hover:transition-shadow duration-300 w-[20vw] max-w-[200px]">
          Get In Touch
        </button>
      </form>
    </div>
  );
};

export default Contact;