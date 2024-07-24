// import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
    return (
      <section id="hireme" className="py-10 px-3 text-white">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            Hire <span className="text-cyan-600">Me</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
        </div>
        <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
          <div>
            <h2 className="text-2xl font-semibold">
              Do you want any work from me?
            </h2>
            <p className="lg:text-left text-justify text-sm mt-4 text-gray-200 leading-6">
              Are you looking for a dedicated and skilled full-stack developer to elevate your next project? With a robust proficiency in Python
              and Django for backend development, and React.js for creating
              dynamic, responsive front-end applications, I bring a comprehensive
              skill set to the table. My expertise extends to HTML, CSS, and
              JavaScript, ensuring that your web applications are not only
              functional but also visually appealing. Additionally, I am
              well-versed in popular frameworks and libraries such as Bootstrap,
              jQuery, and Tailwind CSS, enabling me to build seamless,
              user-friendly interfaces. Whether it's developing a complex web
              application from scratch or enhancing an existing platform, I am
              committed to delivering high-quality, scalable solutions tailored to
              your specific needs. Let's collaborate and turn your vision into a
              reality.
            </p>
            <a href="https://wa.me/9898471265" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary mt-10">Say Hello</button>
            </a>
          </div>
          {/* <img
                      src={hireMe}
                      alt=""
                      className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
                  /> */}
        </div>
      </section>
    );
  };
  
  export default Hireme;
  