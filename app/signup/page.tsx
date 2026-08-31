"use client";

import { useState } from "react";
import { signupSchema, SignupSchemaType } from "../lib/signupSchema";

const SignupPage = () => {
  //*form data state
  const [form, setform] = useState<SignupSchemaType>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  //*error state
  const [errors, seterrors] = useState<any>({});

  //*Onchange function
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  //*onsubmit function
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    //*parsing form
    const result = signupSchema.safeParse(form);

    //*error handling
    if (!result.success) {
      const fieldErrors: any = {};

      result.error.issues.forEach((err) => {
        const field = err.path[0];
        fieldErrors[field] = err.message;
      });

      seterrors(fieldErrors);
      return;
    }

    //*success
    console.log("Success", result.data);
    seterrors({});
    alert("form Submitted Successfully")
  }

  return (
    <div className="bg-[#2B2D2A] flex flex-col justify-center items-center h-[100vh] ">
      <div className="flex flex-col justify-center items-center m-8">
        <h1 className="text-[#FFFFFF] font-bold text-3xl mb-2">
          Create Account
        </h1>
        <p className="text-[#99A69E]">
          Join KIVO and start organizing your day
        </p>
      </div>

      <div className="bg-[#393D39] w-[25vw] border border-[#393D39] rounded-2xl text-[#99A69E] ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center w-full p-10">

            <div className="w-full mb-2">
              <label className="text-[#FFFFFF] font-bold" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="you@example.com"
                onChange={handleChange}
                className="w-full my-2 p-3 border outline-none border-[#99A69E] rounded-lg focus:shadow-[0_0_0_2px_#7A9E7E]
transition"
              />
              <p className="text-red-200">{errors.email}</p>
            </div>

            <div className="w-full mb-2">
              <label className="text-[#FFFFFF] font-bold" htmlFor="password">
                Password
              </label>{" "}
              <br />
              <input
                type="password"
                name="password"
                value={form.password}
                placeholder="At least 6 characters"
                onChange={handleChange}
                className="w-full my-2 p-3 border outline-none border-[#99A69E] rounded-lg focus:shadow-[0_0_0_2px_#7A9E7E]
transition"
              />
              <p className="text-red-200">{errors.password}</p>
            </div>

            <div className="w-full mb-2">
              <label
                className="text-[#FFFFFF] font-bold"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>{" "}
              <br />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                placeholder="Re-enter your password"
                onChange={handleChange}
                className="w-full my-2 p-3 border outline-none border-[#99A69E] rounded-lg focus:shadow-[0_0_0_2px_#7A9E7E]
transition"
              />
              <p className="text-red-200">{errors.confirmPassword}</p>
            </div>

            <button
              className="bg-[#7A9E7E] text-[#2E2A2A] w-full rounded-lg p-3  my-2 "
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
