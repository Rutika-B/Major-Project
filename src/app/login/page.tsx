export default function Login() {
  return (
    <>
      <form action="/auth/login" method="post">
        <main className="h-screen flex items-center justify-center  p-6">
          <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
            <h1 className="justify-center text-5xl font-semibold my-4 mb-6 py-3 text-white">
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

            <button className="w-full p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none">
              Sign In
            </button>
          </div>
        </main>
      </form>
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
