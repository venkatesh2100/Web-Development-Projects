import React from "react";

export const RevenueCard = ({ title, amount, orderCount }) => {
  return (
    <div className="flex-grow gap-4  px-4 py-5 shadow-md rounded p-4 min-w-80 h-fit" >
      <div className="flex">
        <div className="flex items-center  ">
          <div className="text-gray-700 text-md  mr-2 ">{title}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between  pt-3">
        <div className="font-semibold text-3xl">₹{amount}</div>
        <div className="flex items-center">
          {orderCount ? (
            <div className="flex">
              <div className="text-blue-800 underline cursor-pointer font-medium flex justify-center ">
                {orderCount} order(s)
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
