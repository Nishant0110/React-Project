// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";
// import { GrLocation } from "react-icons/gr";

// const Contact = () => {
//     const contact_info = [
//         { logo: <MdOutlineEmail />, text: "nishant.lakhani01@gmail.com", title: "E-mail" },
//         { logo: <FaWhatsapp />, text: "+91 9898471265" ,title: "Contact No" },
//         {
//             logo: <GrLocation/>,
//             text: "Gandhinagar",
//             title: "Location"
//         },
//     ];
//     return (
//         <section id="contact" className="py-10 px-3 text-white">
//             <div className="text-center mt-8">
//                 <h3 className="text-4xl font-semibold">
//                     Contact <span className="text-cyan-600">Me</span>
//                 </h3>
//                 <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

//                 <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
//                     <form className="flex flex-col flex-1 gap-5">
//                         <input type="text" placeholder="Your Name" />
//                         <input type="Email" placeholder="Your Email Address" />
//                         <textarea placeholder="Your Message" rows={10}></textarea>
//                         <button className="btn-primary w-fit">Send Message</button>
//                     </form>
//                     <div className="flex flex-col  gap-7 ">
//                         {contact_info.map((contact, i) => (
//                             <div key={i} className="flex flex-row text-left gap-4 flex-wrap items-center">
//                                 <section className="flex justify-center items-center">
//                                     <button href="/"
//                                         className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
//                                         {contact.logo}
//                                         <span
//                                             className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
//                                             {contact.title}
//                                         </span>
//                                     </button>
//                                 </section>
//                                 <p className="md:text-base text-sm  break-words">
//                                     {contact.text}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;
// import { MdOutlineEmail } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";
// import { GrLocation } from "react-icons/gr";
// import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";
// import { useRef } from "react";

// const Contact = () => {
//   // Sending Email

//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_04noy1g",
//         "template_ztq9f6e",
//         form.current,
//         "kNI35ddFWi-hD95i3"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           // Clear all input field values
//           form.current.reset();
//           // Success toast message
//           toast.success("Email send Successfully");
//         },
//         (error) => {
//           console.log(error.text);
//           toast.error(error.text);
//         }
//       );
//   };
//   const contact_info = [
//     {
//       logo: <MdOutlineEmail />,
//       text: "nishant.lakhani01@gmail.com",
//       title: "E-mail",
//       link: "mailto:nishant.lakhani01@gmail.com",
//     },
//     {
//       logo: <FaWhatsapp />,
//       text: "+91 9898471265",
//       title: "Contact No",
//       link: "https://wa.me/919898471265",
//     },
//     {
//       logo: <GrLocation />,
//       text: "Gandhinagar",
//       title: "Location",
//       link: "https://maps.app.goo.gl/a4j6i9D7ebaYUqpZ8",
//     },
//   ];

//   return (
//     <section id="contact" className="py-10 px-3 text-white">
//       <div className="text-center mt-8">
//         <h3 className="text-4xl font-semibold">
//           Contact <span className="text-cyan-600">Me</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

//         <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
//           <form className="flex flex-col flex-1 gap-5" onSubmit={sendEmail} ref={form}>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="p-2 rounded"
//             />
//             <input
//               type="Email"
//               placeholder="Your Email Address"
//               className="p-2 rounded"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows={10}
//               className="p-2 rounded"
//             ></textarea>
//             <button className="btn-primary w-fit bg-cyan-600 p-2 rounded text-white">
//               Send Message
//             </button>
//           </form>
//           <div className="flex flex-col gap-7">
//             {contact_info.map((contact, i) => (
//               <div
//                 key={i}
//                 className="flex flex-row text-left gap-4 flex-wrap items-center"
//               >
//                 <section className="flex justify-center items-center">
//                   <a
//                     href={contact.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
//                   >
//                     {contact.logo}
//                     <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
//                       {contact.title}
//                     </span>
//                   </a>
//                 </section>
//                 <p className="md:text-base text-sm break-words">
//                   {contact.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useRef } from "react";

const Contact = () => {
  // Sending Email

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_04noy1g",
        "template_ztq9f6e",
        form.current,
        "kNI35ddFWi-hD95i3"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email: " + error.text);
        }
      );
  };

  const contact_info = [
    {
      logo: <MdOutlineEmail />,
      text: "nishant.lakhani01@gmail.com",
      title: "E-mail",
      link: "mailto:nishant.lakhani01@gmail.com",
    },
    {
      logo: <FaWhatsapp />,
      text: "+91 9898471265",
      title: "Contact No",
      link: "https://wa.me/919898471265",
    },
    {
      logo: <GrLocation />,
      text: "Gandhinagar",
      title: "Location",
      link: "https://maps.app.goo.gl/a4j6i9D7ebaYUqpZ8",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5" onSubmit={sendEmail} ref={form}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="p-2 rounded"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              className="p-2 rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              className="p-2 rounded"
              required
            ></textarea>
            <button className="btn-primary w-fit bg-cyan-600 p-2 rounded text-white">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <section className="flex justify-center items-center">
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  >
                    {contact.logo}
                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                      {contact.title}
                    </span>
                  </a>
                </section>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
