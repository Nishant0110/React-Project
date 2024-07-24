import React from "react";
import { useState } from "react";
const About = () => {
    const [showCV, setShowCV] = useState(false);
    const info = [
        { text: "Years experience", count: "08" },
        { text: "Completed Projects", count: "235" },
        { text: "Companies Work", count: "06" },
    ];
    const handleCVDownload = () => {
        setShowCV(true);
    };
    return (
        <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3 ">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                A Project Manager with a proven track record of successfully managing complex IT and Industrial Projects. I am currently pivoting my career path towards a more technical nature - especially in frontend development. I have a variety of skills that I want to leverage for creative web development projects.
                            </p>
                            <div className="flex w-full justify-center">
                                {info.map((content) => (
                                    <div className="mx-8 mt-10" key={content.text}>
                                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                            {content.count}
                                            <span className="text-cyan-600">+</span>{" "}
                                        </h3>
                                        <span className="md:text-base text-xs">{content.text}</span>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <br />

                            <button className="btn-primary" onClick={handleCVDownload}>Download CV</button>
                            {showCV && (
                                <iframe
                                    src="../src/assets/CV.pdf"
                                    title="CV"
                                    width="100%"
                                    height="500px"
                                    style={{ border: "1px solid #ddd" }}
                                    className="mt-4 sm:none md:block "
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
