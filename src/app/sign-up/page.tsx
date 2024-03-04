"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Database {
  Database: any;
}
export default function signUp() {
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, []);

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "rutikabhuimbar@gmail.com",
      password: "Rutika@61",
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.push("/dashboard");
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: "rutikabhuimbar@gmail.com",
      password: "Rutika@61",
    });
    router.refresh();
    router.push("/dashboard")
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (user) {
    console.log("redirect bro")
    router.push("/dashboard")
  }
  return (
    <>
      
      <main className="h-screen flex items-center justify-center  p-6">
        <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
          <h1 className="justify-center text-5xl font-semibold my-4 mb-6 py-3 text-white">
            TradeTracker
          </h1>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Username"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <Link href={"/login"} className="text-cyan-100 text-sm my-3 mb-4 ml-5">Already have an account? Log in</Link>
          <button
            onClick={handleSignUp}
            className="w-full my-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
          >
            Sign Up
          </button>
          
        </div>
      </main>
    </>
  );
}
