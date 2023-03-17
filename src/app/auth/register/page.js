import Link from "next/link";

const LogIn = () => {
  return (
    <main className="mt-5 flex max-h-screen w-full items-center justify-center p-8">
      {/* left side */}
      <section className="flex w-1/2 flex-col items-center justify-center space-y-10 text-center">
        <img src="../../assets/register.svg" alt="" className="h-1/2" />

        <div className="space-y-2 text-gray-900">
          <h2 className="text-xl font-normal">Already have an account?</h2>

          <h4 className="font-extralight tracking-wide">
            Login back to your account
          </h4>
        </div>

        <Link href="/auth/login" className="w-full">
          <button className="w-1/2 rounded-lg bg-[#7C4CE0] p-3 font-semibold tracking-wider text-white">
            Login
          </button>
        </Link>
      </section>

      {/* right side */}
      <section className="w-1/2 items-center space-y-8 text-center ml-10">
        <div className="space-y-6 text-gray-900">
          <h2 className="text-2xl font-semibold">Create Account</h2>

          <h4 className="font-normal tracking-wide">
            Register To Keep Track of Your Money
          </h4>
        </div>

        <div>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            className="w-3/4 rounded-md p-3"
          />
        </div>

        <div>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            className="w-3/4 rounded-md p-3"
          />
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
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone Number"
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

        <div>
          <input
            type="password"
            id="confirm"
            name="confirm"
            placeholder="Confirm Password"
            className="w-3/4 rounded-lg p-3"
          />
        </div>

        <div className="font-light text-sm flex items-center text-left justify-center">
          <input type="checkbox" className="rounded-3xl p-4 h-5 w-5 mr-2" />
          <span className="flex-wrap">
            By clicking the checkbox, you agree to the Terms and Conditions
          </span>
        </div>

        <button className="w-1/2 rounded-lg bg-[#7C4CE0] p-3 font-semibold tracking-wider text-white">
          Register
        </button>
      </section>
    </main>
  );
};

export default LogIn;
