import Button from "@mui/material/Button";

import Google from "../circleIcons/Google";
import Facebook from "../circleIcons/Facebook";
import LinkedIn from "../circleIcons/LinkedIn";

function SignUp() {
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center bg-[#99CCFF] md:justify-center sm:items-center">
      <form className="absolute mt-24 space-y-8 bg-white py-10 px-10 md:mt-0 md:max-w-sm md:px-14  rounded-sm">
        <h2 className="text-2xl font-semibold">SIGN UP</h2>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <p>Email</p>
            <input type="email" className="input" />
          </label>
          <label className="inline-block w-full">
            <p>Password</p>
            <input type="password" className="input " />
          </label>
          <div className="mt-0"></div>
          <Button
            variant="outlined"
            className="w-full bg-pink-600 rounded-lg text-white border-none hover:bg-pink-600/75 hover:border-none"
          >
            SIGN UP
          </Button>

          <hr className=" p-2  !mt-10" />

          <div className="w-full h-full flex items-center justify-center gap-5">
            <Google className="cursor-pointer h-5 w-5" />
            <Facebook className="cursor-pointer h-5 w-5" />
            <LinkedIn className="cursor-pointer h-5 w-5" />
          </div>
          <div className="text-center">
            <span>Already a user? </span>
            <span className="underline cursor-pointer hover:opacity-75">
              LOGIN
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
