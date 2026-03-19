import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div
      className={`relative w-full text-center ${
        tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"
      }`}
    >
      {tag ? (
        <h1 className="relative mx-auto mb-8 inline-block w-auto text-3xl sm:text-4xl">
          Projects built with <b>{tag}</b>
          <img
            className="sqD absolute -top-6 -right-2 w-8 sm:-top-8 sm:-right-8 sm:w-10"
            src="/static/doodles/hero/code.svg"
            alt="Decorative doodle"
          />
        </h1>
      ) : (
        <>
          <h1 className="relative mx-auto mb-6 inline-block w-auto text-4xl font-bold text-white sm:text-6xl">
            Selected Projects
            <img
              className="sqD absolute -top-8 -right-8 w-10"
              src="/static/doodles/hero/code.svg"
              alt="Decorative doodle"
            />
          </h1>

          <p className="m-auto max-w-3xl text-lg leading-8 text-fun-gray sm:text-xl">
            A selection of digital products, websites, and platforms we have
            designed and developed across different goals, teams, and use cases.
          </p>
        </>
      )}
    </div>
  );
}

export default Heading;
