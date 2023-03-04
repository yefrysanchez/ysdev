import React from "react";

const Subscribe = () => {
  return (
    <div className="w-4/5 mx-auto text-center my-16">
      <div className="text-3xl">
        <i className="fa-solid fa-envelope-circle-check"></i>
      </div>
      <h3 className="font-bold text-2xl">Subscribe to Out Newsletter</h3>
      <p>and received $20 coupon for your next order!</p>
      <div class="flex justify-center mt-4">
        <div class="mb-3 xl:w-[500px]">
          <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="email"
              class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-black focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Subscribe"
              aria-label="Subscribe"
              aria-describedby="button-addon3"
            />
            <button
              class="relative z-[2] rounded-r border-2 border-black px-6 py-2 text-xs font-medium uppercase text-black transition duration-150 ease-in-out hover:bg-black hover:text-white  focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
