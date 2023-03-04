import React from "react";

const ShoppingList = () => {
  return (
    <div className="lg:w-4/5 mt-[80px] mx-auto">
      <div className="mb-4">
        <h3 className="text-center text-5xl">
          Our Feature <b>Products</b>
        </h3>
      </div>

      <ul
        className="mb-5 flex list-none justify-center border-b-0 pl-0 "
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation" className=" text-center">
          <a
            href="#tabs-home01"
            className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-home01"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-home01"
            aria-selected="true"
          >
            ALL
          </a>
        </li>
        <li role="presentation" className=" text-center">
          <a
            href="#tabs-profile01"
            className="focus:border-transparen my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-profile01"
            role="tab"
            aria-controls="tabs-profile01"
            aria-selected="false"
          >
            BEST SELLERS
          </a>
        </li>
        <li role="presentation" className=" text-center">
          <a
            href="#tabs-messages01"
            className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-messages01"
            role="tab"
            aria-controls="tabs-messages01"
            aria-selected="false"
          >
            NEW ARRIVALS
          </a>
        </li>
        <li role="presentation" className=" text-center">
          <a
            href="#tabs-contact01"
            className="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-contact01"
            role="tab"
            aria-controls="tabs-contact01"
            aria-selected="false"
          >
            TOP RATED
          </a>
        </li>
      </ul>
      <div className="mb-6">
        <div
          className="hidden opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home01"
          role="tabpanel"
          aria-labelledby="tabs-home-tab01"
          data-te-tab-active
        >
          Tab 1 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile01"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01"
        >
          Tab 2 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages01"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01"
        >
          Tab 3 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-contact01"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab01"
        >
          Tab 4 content
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
