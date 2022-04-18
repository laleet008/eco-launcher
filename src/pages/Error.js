import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Layout>
      <div className="bg-[#26331A]">
        <div className="flex flex-col gap-6 justify-center items-center align-center  h-screen">
          <h1 className="text-neutral-300 text-[200px] font-bold">404</h1>
          <p className="text-2xl text-neutral-400">Oops! Page note found</p>

          <Link to="/">
            <button className="border bg-transparent text-neutral-300 border-green-700 py-3 px-6 rounded hover:bg-green-800 hover:text-white">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
