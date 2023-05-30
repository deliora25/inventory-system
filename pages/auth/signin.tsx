//mui
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";

//components
import Google from "../../components/circleIcons/Google";
import Facebook from "../../components/circleIcons/Facebook";
import LinkedIn from "../../components/circleIcons/LinkedIn";

//next
import { signIn } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";

//react
import { useState, FormEvent } from "react";

//types
import { UserOnLogin } from "@/types";

function SignIn() {
  const [user, setUser] = useState<UserOnLogin>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validate userInfo
    const res: any | undefined = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });
    if (res.ok) Router.replace("/");
    console.log(user);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center bg-[#99CCFF] md:justify-center sm:items-center">
      <form
        onSubmit={handleSubmit}
        className="absolute mt-24 space-y-8 bg-white py-10 px-10 md:mt-0 md:max-w-sm md:px-14  rounded-sm"
      >
        <h2 className="text-2xl font-semibold">LOGIN</h2>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <p>Email</p>
            <input
              type="email"
              name="email"
              className="input"
              value={user.email}
              onChange={handleChange}
            />
          </label>
          <label className="inline-block w-full">
            <p>Password</p>
            <input
              type="password"
              name="password"
              className="input "
              value={user.password}
              onChange={handleChange}
            />
          </label>
          <div className="mt-0">
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": { color: pink[600] },
                  }}
                />
              }
              label="Remember me?"
            />
          </div>
          <Button
            type="submit"
            variant="outlined"
            className="w-full bg-pink-600 rounded-lg text-white border-none hover:bg-pink-600/75 hover:border-none"
          >
            LOGIN
          </Button>
          <p className="!mt-1 text-right font-light opacity-60 hover:opacity-75 cursor-pointer justify-items-end max-w-md ">
            Forgot password?
          </p>
          <hr className="p-2" />
          <div className="w-full h-full flex items-center justify-center gap-5">
            <Google className="cursor-pointer h-5 w-5" />
            <Facebook className="cursor-pointer h-5 w-5" />
            <LinkedIn className="cursor-pointer h-5 w-5" />
          </div>
          <div className="text-center">
            <span>Need an account? </span>
            <Link href="/auth/signup">
              <span className="underline cursor-pointer hover:opacity-75">
                SIGN UP
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
