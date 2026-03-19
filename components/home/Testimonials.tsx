import React from "react";
import SectionTitle from "../global/SectionTitle";
import { testimonials } from "@/data/content/home";

function Testimonials() {
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="flex w-full max-w-full flex-col text-left m-auto overflow-hidden">
      <SectionTitle title="What clients say" />

      <div className="relative w-full overflow-hidden">
        <div className="testimonial-track flex w-max gap-6 hover:[animation-play-state:paused]">
          {loopTestimonials.map((item, index) => {
            const originalIndex = index % testimonials.length;

            return (
              <div
                key={`${item.name}-${index}`}
                className="relative flex h-full min-h-[220px] w-[320px] shrink-0 flex-col justify-between rounded-lg border border-fun-pink-light bg-fun-pink-darker p-5"
              >
                {originalIndex === 0 && index === 0 && (
                  <img
                    className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
                    src="/static/doodles/testimonials/yay.svg"
                    alt="decorative doodle"
                  />
                )}

                <p className="testimonialQuote relative text-base italic leading-7 text-white">
                  “{item.quote}”
                </p>

                <p className="mt-6 text-xs text-fun-gray">
                  <span className="font-monospace text-fun-pink font-bold">
                    {item.name}
                  </span>
                  <span> · {item.job}</span>
                </p>

                {originalIndex === 2 && index === 2 && (
                  <img
                    className="sqD top-[-30px] right-[-15px] w-11"
                    src="/static/doodles/testimonials/squiggle2.svg"
                    alt="decorative doodle"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
