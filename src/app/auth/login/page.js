import Link from "next/link";

const LogIn = () => {
  return (
    <main className="mt-10 flex max-h-screen w-full items-center justify-center p-8">
      {/* left side */}
      <section className="mt-10 w-1/2 items-center space-y-10 text-center">
        <div className="space-y-10 text-gray-900">
          <h2 className="text-2xl font-semibold">Welcome Back</h2>

          <h4 className="font-medium tracking-wide">Login into your account</h4>
        </div>

        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            className="w-3/4 rounded-md p-3"
          />
        </div>

        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-3/4 rounded-lg p-3"
          />
        </div>

        <div className="items-end">
          <a href="#" className="font-light underline">
            Forgot password?
          </a>
        </div>

        <button className="w-1/2 rounded-lg bg-[#7C4CE0] p-3 font-semibold tracking-wider text-white">
          Login
        </button>
      </section>

      {/* right side */}
      <section className="flex w-1/2 flex-col items-center justify-center space-y-8 text-center">
        <img src="../../assets/login.svg" alt="" className="h-1/2" />

        <div className="space-y-3 text-gray-900">
          <h2 className="text-xl font-normal">Don't have an account?</h2>

          <h4 className="font-extralight tracking-wide">
            Register to create an account
          </h4>
        </div>

        <Link href="/auth/register" className="w-full">
          <button className="w-1/2 rounded-lg bg-[#7C4CE0] p-3 font-semibold tracking-wider text-white">
            Register
          </button>
        </Link>
      </section>
    </main>
  );
};

export default LogIn;
