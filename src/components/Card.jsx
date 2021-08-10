import React from "react";
import useColorState from "../context/useColorState";
import Size from "./Size";

const sizes = ["xs", "s", "m", "l", "xl"];

export default function Card() {
  const { color } = useColorState();

  return (
    <div className="max-w-xl bg-white md:flex md:p-6 rounded-xl overflow-hidden">
      <div className="w-full md:flex-none md:w-44">
        <img
          src="https://images.unsplash.com/photo-1623450350546-42a0f8c19694?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=348&q=80"
          alt=""
          className="w-full h-52 md:h-full object-cover md:rounded-md"
        />
      </div>
      <div className="flex-auto p-6 md:p-0 md:pl-6">
        <div className="flex flex-wrap items-baseline">
          <h1 className="w-full flex-none font-semibold mb-2.5">
            Kids Jumpsuit
          </h1>
          <div className={`text-4xl leading-7 font-bold text-${color}-600`}>
            $39.00
          </div>
          <div className="text-sm font-medium text-gray-400 ml-3">In stock</div>
        </div>
        <div className="md:flex md:items-baseline md:my-8 my-5">
          <div className="space-x-2 flex text-sm font-medium">
            <Size sizeList={sizes} />
          </div>
          <div className="mt-3 md:ml-3 md:mt-0 text-sm text-gray-500 underline">
            Size Guide
          </div>
        </div>
        <div className="flex space-x-3 mb-4 text-sm font-semibold">
          <div className="flex-auto flex space-x-3">
            <button
              className={`w-1/2 flex items-center justify-center rounded-full bg-${color}-700 text-white`}
            >
              Buy now
            </button>
            <button
              className={`w-1/2 flex items-center justify-center rounded-full bg-${color}-50 text-${color}-700`}
            >
              Add to bag
            </button>
          </div>
          <button
            className={`flex-none flex items-center justify-center w-9 h-9 rounded-full bg-${color}-50 text-${color}-700`}
            type="button"
            aria-label="like"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Free shipping on all continental US orders.
        </p>
      </div>
    </div>
  );
}
