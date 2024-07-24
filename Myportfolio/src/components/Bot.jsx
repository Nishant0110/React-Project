// import React from "react";

// const Bot = () => {
//   return (
//     <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
//       <ion-icon name="chatbubble-ellipses"></ion-icon>
//     </div>
//   );
// };

// export default Bot;


import React from "react";

const Bot = () => {
  const startWhatsAppChat = () => {
    const phoneNumber = "9586653146"; // Replace with your phone number in international format
    const message = "Hello!"; // Optional message to prefill the chat
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
  };

  return (
    <div 
      className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce" 
      onClick={startWhatsAppChat}
    >
      <ion-icon name="chatbubble-ellipses"></ion-icon>
    </div>
  );
};

export default Bot;
