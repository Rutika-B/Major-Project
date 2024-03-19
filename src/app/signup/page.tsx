import Link from "next/link";

export default function signUp() {
  return (
    <>
      <form action="/auth/signup" method="post">
        <main className="h-screen flex items-center justify-center  p-6">
          <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
            <h1 className="justify-center text-5xl font-semibold my-4 mb-6 py-3 text-white">
              TradeTracker
            </h1>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <a
              href="/login"
              className="text-cyan-100 text-sm my-3 mb-4 ml-5"
            >
              Already have an account? Log in
            </a>
            <button className="w-full my-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none">
              Sign Up
            </button>
          </div>
        </main>
      </form>
    </>
  );
}
