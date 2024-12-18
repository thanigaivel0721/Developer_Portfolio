"use client"; 
// @flow strict
import { useForm } from "react-hook-form";
import { TbMailForward } from "react-icons/tb";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const { register, reset, handleSubmit } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "1103d617-d884-4690-a6dd-7e2c32238bc0";

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        ...data,
        access_key: accessKey,
      });
      setIsSuccess(true);
      setResult("Message sent successfully!");
      reset();
    } catch (error) {
      setIsSuccess(false);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">{"For any issues, feel free to contact me!"}</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              {...register("name", { required: true })}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              {...register("email", { required: true })}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              {...register("message", { required: true })}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              rows="4"
              required
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            {result && (
              <p
                className={`text-sm ${
                  isSuccess ? "text-green-400" : "text-red-400"
                }`}
              >
                {result}
              </p>
            )}
            <button
              type="submit"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            >
              <span className="flex items-center gap-1">
                Send Message
                <TbMailForward size={20} />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
