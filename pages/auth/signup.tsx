//mui
import Button from "@mui/material/Button";

//components
import Google from "../../components/circleIcons/Google";
import Facebook from "../../components/circleIcons/Facebook";
import LinkedIn from "../../components/circleIcons/LinkedIn";
// import Input from "../input/input";

//next
import Link from "next/link";
import { useRouter } from "next/router";

//react
import { useState } from "react";

//types
import { User } from "../../types";

function SignUp() {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: `${user.firstName}`,
        lastName: `${user.lastName}`,
        email: `${user.email}`,
        password: `${user.password}`,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));

    router.push("/auth/signin");
  };

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center bg-[#99CCFF] md:justify-center sm:items-center">
      <form
        className="form absolute mt-24 space-y-8 bg-white py-10 px-10 md:mt-0 md:max-w-sm md:px-14  rounded-sm"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-2xl font-semibold">SIGN UP</h2>
        <div className="space-y-4">
          {/* <Input
            title="First Name"
            value={user.firstName}
            type="text"
            className="input"
            name="firstName"
            onChange={handleChange}
          />
          <Input
            title="Last Name"
            value={user.lastName}
            type="text"
            className="input"
            name="lastName"
            onChange={handleChange}
          />
          <Input
            title="Email"
            value={user.email}
            type="email"
            className="input"
            name="email"
            onChange={handleChange}
          />
          <Input
            title="Password"
            value={user.password}
            type="password"
            className="input"
            name="password"
            onChange={handleChange}
          /> */}
          <label className="inline-block w-full">
            <p>First Name</p>
            <input
              type="text"
              className="input"
              value={user.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </label>
          <label className="inline-block w-full">
            <p>Last Name</p>
            <input
              type="text"
              className="input"
              value={user.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </label>
          <label className="inline-block w-full">
            <p>Email</p>
            <input
              type="email"
              className="input"
              value={user.email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <label className="inline-block w-full">
            <p>Password</p>
            <input
              type="password"
              className="input"
              value={user.password}
              name="password"
              onChange={handleChange}
            />
          </label>

          <Button
            variant="outlined"
            className="w-full bg-pink-600 rounded-lg text-white border-none hover:bg-pink-600/75 hover:border-none"
            type="submit"
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
            <Link href="/auth/signin">
              <span className="underline cursor-pointer hover:opacity-75">
                LOGIN
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
