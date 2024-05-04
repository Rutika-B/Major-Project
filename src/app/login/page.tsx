'use client';
import {
  slideInFromLeft,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Login() {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="bg-[#030014] flex flex-row justify-between h-screen"
      >
        <form
          action="/auth/login"
          method="post"
          className="flex flex-col w-1/2 justify-center items-center"
        >
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="h-screen flex items-center justify-center p-10"
          >
            <div className="p-8 rounded-lg shadow-md w-[400px]">
              <h1 className="justify-center text-5xl font-semibold my-4 mb-14 py-3 text-white">
                TradeTracker
              </h1>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />

              <button className="w-full my-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none">
                Sign In
              </button>
            </div>
          </motion.div>
        </form>
        <div className="flex w-1/2 h-screen items-center opacity-30">
          <Image
            src="/trade.jpeg"
            alt="trading"
            width={700}
            height={900}
            objectFit="cover"
          />
        </div>
      </motion.div>
    </>
  );
}
// export default function Login() {
// return (
//     <form action="/auth/signup" method="post">
//       <label htmlFor="email">Email</label>
//       <input name="email" />
//       <label htmlFor="password">Password</label>
//       <input type="password" name="password" />
//       <button>Sign up</button>
//     </form>
//   );
// }
