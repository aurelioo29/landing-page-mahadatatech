import React from "react";
import { capabilities } from "@/data/content/home";

function Capabilities() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="relative max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fun-pink">
            Our Capabilities
          </p>

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            What We Build
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-fun-gray-light md:text-base">
            From web platforms to mobile applications and internal systems, we
            build digital solutions that are practical, scalable, and designed
            to solve real business needs.
          </p>

          <img
            className="sqD float-slow left-[-40px] top-[20px] hidden w-16 md:block"
            src="/static/doodles/skills/laptop.svg"
            alt="Decorative laptop"
          />

          <img
            className="sqD float-medium right-[-10px] top-[-10px] w-8"
            src="/static/doodles/skills/fillStar.svg"
            alt="Decorative star"
          />

          <img
            className="sqD float-fast right-[-50px] top-[100px] hidden w-12 md:block"
            src="/static/doodles/skills/coding.svg"
            alt="Decorative coding"
          />
        </div>

        <div className="mt-14 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-fun-pink-light/20 bg-fun-pink-darker/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-fun-pink-light/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-fun-pink-light/20 text-xs font-bold text-fun-pink">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm leading-7 text-fun-gray-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
