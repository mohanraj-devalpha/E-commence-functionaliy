import React from "react";
import Layout from "./Layout";
import { useForm } from "react-hook-form";

// import {useForm} from "react-hook-form"

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  // const {register ,handleSubmit}=useForm()
  return (
    <Layout>
      <div className="bg-slate-100 text-center space-y-5 py-10 mb-[1000px] md:mb-[800px]">
        <div>{/* <img src={} alt="" /> */}</div>
        <div>
          <span className="text-7xl font-cormorant">Contact Us</span>
          <p className="text-contact text-base">
            love talking to our customers and are here to help. Please use one
            of the methods below to get in touch
          </p>
        </div>
        <div className="flex flex-col text-contact">
          <span className="text-blue-500 text-lg">hello@furniturehome.com</span>
          <span>(877)-1404-6763</span>
          <span>M-F 9am - 5:30pm EST</span>
          <span>18 North Water St, Suite 55</span>
          <span>Lancaster, PA 17603 (by appointment only)</span>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit(onSubmit)} > */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute top-[560px] md:top-[360px] left-0 w-full flex flex-col justify-center items-center py-10 px-10"
      >
        <div className="space-y-5 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            className="border-2 rounded-lg w-full p-2 hover:border-blue-500 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                placeholder="First name"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="border-2 rounded-lg w-full p-2 hover:border-blue-500 focus:outline-none"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                placeholder="Last name"
                {...register("lastName", { required: "Last name is required" })}
                className="border-2 rounded-lg w-full p-2 hover:border-blue-500 focus:outline-none"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <input
            type="text"
            placeholder="Address"
            {...register("address", { required: "Address is required" })}
            className="border-2 rounded-lg w-full p-2 hover:border-blue-500 focus:outline-none"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}

          <input
            type="text"
            placeholder="Product/Order inquiry"
            className="border-2 rounded-lg w-full p-2 hover:border-blue-500 focus:outline-none"
          />
          {errors.inquiry && (
            <p className="text-red-500 text-sm">{errors.inquiry.message}</p>
          )}

          <input
            type="text"
            placeholder="Additional Address"
            {...register("additionalAddress")}
            className="border-2 rounded-lg w-full p-2 hover:border-blue-500 focus:outline-none"
          />

          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
            <input
              type="text"
              placeholder="Mobile Phone (optional)"
              {...register("mobile")}
              className="border-2 rounded-lg w-full sm:w-1/2 p-2 hover:border-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone (optional)"
              {...register("phone")}
              className="border-2 rounded-lg w-full sm:w-1/2 p-2 hover:border-blue-500 focus:outline-none "
            />
          </div>

          <textarea
            placeholder="Message"
            className="border-2 rounded-lg w-full p-2 pb-40 hover:border-blue-500 focus:outline-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}

          <button
            type="submit"
            className="bg-black text-white px-10 py-3 rounded-lg hover:border-yellow-500 hover:opacity-70 w-full sm:w-auto"
          >
            Send
          </button>
        </div>
      </form>
      {/* </form> */}
    </Layout>
  );
};

export default Contact;
