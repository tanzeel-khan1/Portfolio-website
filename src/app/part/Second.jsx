"use client";
import React from "react";
import { motion } from "framer-motion";

function Second() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="h-auto md:h-[40rem] w-[90%] md:w-[80%] bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-12 shadow-lg rounded-lg">
        
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-3xl font-semibold mt-10 md:mt-0 text-blue-500"
          >
            Hi, I'm
          </motion.h1>

          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-5xl font-bold mt-2 text-blue-500"
          >
            Tanzeel
          </motion.h1>

          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="mt-4 text-xl md:text-2xl font-medium text-gray-700"
          >
            Full Stack Software Engineer
          </motion.h2>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="mt-6 text-gray-600 leading-relaxed max-w-md"
          >
            I build modern, responsive, and scalable web applications using{" "}
            <span className="font-semibold text-blue-500">React</span>,{" "}
            <span className="font-semibold text-blue-500">Next.js</span>, and the{" "}
            <span className="font-semibold text-blue-500">MERN Stack</span>.
            Passionate about clean code, smooth user experiences, and turning
            ideas into high-quality digital products.
          </motion.p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
        >
          <img
            src="https://avatars.githubusercontent.com/u/204762480?v=4"
            alt="Tanzeel"
            className="h-60 w-60 md:h-[25rem] md:w-[25rem] rounded-full object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
}

export default Second;