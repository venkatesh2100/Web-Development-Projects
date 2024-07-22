import React from "react";

export const BlueRevenueCard = ({ title, amount, orderCount, Day, Time }) => {
  return (
    <div className="bg-sky-600  h-fit hover:bg-sky-900 text-white rounded shadow-md  flex-grow min-w-80">
      <div className="flex p-5 flex-col gap-4">
        <div className="flex items-center gap-3">
          <div>{title}</div>
          <div></div>
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

        {/* For the Amount and Order section  */}
        <div className="flex justify-between ">
          <div className="font-medium text-3xl">₹{amount}</div>

          <div className="flex items-center">
            {orderCount ? (
              <div className="flex">
                <p className="underline text-base items-center ">
                  {orderCount} order(s)
                </p>
                <p>
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
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Here Next page Date and Time */}
      <div className="bg-sky-900 flex justify-between rounded px-6 py-2 ">
        <div>Next Payment Date:</div>
        <div>
          {Day}, {Time}
        </div>
      </div>
    </div>
  );
};
