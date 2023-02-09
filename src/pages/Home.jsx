import React from "react";

const Home = () => {
  return (
    <div className="px-2 py-4 md:grid md:grid-cols-2 bg-white">
      <div className="max-w-md">
        <img
          className="mt-6 rounded-lg shadow-xl bg-green-400"
          src="/static/banner.jpg"
          alt="Woman workcationing on the beach"
        />
      </div>
      <div className="max-w-md md:order-first md:pr-2">
        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          You can work from anywhere.
          <br />
          <span class="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p class="mt-2 text-gray-600 text-justify">
          Workcation helps you find work-friendly rentals in beautiful locations so you can
          enjoy some nice weather even when you're not on vacation.
        </p>
        <div className="mt-4">
          <a
            className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm"
            href="/"
          >
            Book your escape
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
