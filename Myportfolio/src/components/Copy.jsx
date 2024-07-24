import React from "react";
import './Copy.css';

function Copy() {
  const Skills = () => {
    const skills = [
      {
        logo: "logo-html5",
        languagename: "HTML-5",
        count: 86,
      },
      {
        logo: "logo-css3",
        languagename: "CSS-3",
        count: 90,
      },
      {
        logo: "logo-javascript",
        languagename: "JavaScript",
        count: 80,
      },
      {
        logo: "logo-jquery",
        languagename: "jQuery",
        count: 80,
      },
      {
        logo: "logo-bootstrap",
        languagename: "Bootstrap",
        count: 80,
      },
      {
        logo: "logo-react",
        languagename: "React",
        count: 80,
      },
      {
        logo: "logo-tailwind",
        languagename: "Tailwind",
        count: 80,
      },
      {
        logo: "logo-paython",
        languagename: "Python",
        count: 25,
      },
    ];

    return skills;
  };

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
      </div>
      <div className="card "> {/* Added bg class here */}
        <div className="bg ">
          {Skills().map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {/* Ensure ion-icon is properly configured */}
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.languagename}</p>
            </div>
          ))}
        </div>
        {/* Ensure that blob class is properly defined */}
        <div className="blob"></div>
      </div>
    </section>
  );
}

export default Copy;
