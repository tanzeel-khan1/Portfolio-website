// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// import StartUp from "./StartUp";
// import DoctorApp from "./DoctorApp";
// import Wheather from "./Wheather";
// import Cars from "./Cars";

// const Projects = () => {
//   return (
//     <div className="bg-white px-4 md:px-20 py-10">
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true, amount: 0.3 }}
//         className="text-4xl md:text-5xl font-extrabold text-blue-600 text-center mb-12"
//       >
//         My Projects
//       </motion.h1>

//       <div className="grid md:flex gap-10 justify-center">
//         <StartUp />
//         <Cars />
//       </div>
//       <div className="grid md:flex gap-10 justify-center mt-6">
//         <Wheather />
//         <DoctorApp />
//       </div>
//     </div>
//   );
// };

// export default Projects;
"use client";
import React from "react";
import { motion } from "framer-motion";

import StartUp from "./StartUp";
import DoctorApp from "./DoctorApp";
import Wheather from "./Wheather";
import Cars from "./Cars";

const Projects = () => {
  return (
    <section className="bg-white px-4 md:px-20 py-20">
      
      {/* SECTION HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-blue-600 text-center mb-14"
      >
        My Projects
      </motion.h1>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <StartUp />
        <Cars />
        <Wheather />
        <DoctorApp />
      </div>
    </section>
  );
};

export default Projects;