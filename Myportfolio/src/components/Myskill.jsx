// import React from "react";
// const Skills = () => {
//     const skills = [
//         {
//             logo: "logo-html5",
//             languagename: "HTML-5",
//             count: 86,
//         },
//         {
//             logo: "logo-css3",
//             languagename: "CSS-3",
//             count: 90,
//         },
//         {
//             logo: "logo-javascript",
//             languagename: "JavaScript",
//             count: 80,
//         },
//         {
//             logo: "logo-jquery", // Corrected logo name
//             languagename: "jQuery", // Corrected language name
//             count: 80,
//         },
//         {
//             logo: "logo-bootstrap",
//             languagename: "Bootstrap",
//             count: 80,
//         },
//         {
//             logo: "logo-react",
//             languagename: "React",
//             count: 80,
//         },
//         {
//             logo: "logo-tailwind",
//             languagename: "Tailwind",
//             count: 80,
//         },
//         {
//             logo: "logo-paython",
//             languagename: "Paython",
//             count: 80,
//         },
//     ];
//     return (
//         <section id="skills" className="py-10 bg-gray-800 relative">
//             <div className="mt-8 text-gray-100 text-center">
//                 <h3 className="text-4xl font-semibold">
//                     My <span className="text-cyan-600">Skills</span>
//                 </h3>
//                 <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
//                     {skills?.map((skill, i) => (
//                         <div key={i} className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
//                             <div style={{
//                                     background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
//                                 }}
//                                 className="w-32 h-32 flex items-center justify-center rounded-full">
//                                 <div className="text-6xl w-28 h-28 bzg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
//                                     <ion-icon name={skill.logo}></ion-icon>
//                                 </div>
//                             </div>
//                             <p className="text-xl mt-3">{skill.languagename}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Skills;

import React from "react";
import "tailwindcss/tailwind.css";

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
      logo: "fab fa-js-square", // Using Font Awesome for jQuery
      languagename: "jQuery",
      count: 80,
    },
    {
      logo: "fab fa-bootstrap", // Using Font Awesome for Bootstrap
      languagename: "Bootstrap",
      count: 80,
    },
    {
      logo: "logo-react",
      languagename: "React",
      count: 80,
    },
    {
      logo: "fab fa-css3-alt", // Using Font Awesome for Tailwind
      languagename: "Tailwind",
      count: 80,
    },
    {
      logo: "logo-python",
      languagename: "Python",
      count: 80,
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl transform transition duration-500 hover:scale-110"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.logo.startsWith("logo-") ? (
                    <ion-icon name={skill.logo}></ion-icon>
                  ) : (
                    <i className={skill.logo}></i>
                  )}
                </div>
              </div>
              <p className="text-xl mt-3">{skill.languagename}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
