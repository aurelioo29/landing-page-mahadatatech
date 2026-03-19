import React from "react";

function CTA() {
  const whatsappNumber = "6282168302985";
  const whatsappMessage =
    "Hello Mahadata Technology, I'd like to discuss a project with your team.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <div className="relative w-full pt-36">
      <img
        className="m-auto mb-2 w-30"
        src="/static/doodles/lineBreak.svg"
        alt="Decorative line break"
      />

      <div className="pt-14 pb-40 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Let’s Build Something That Matters
        </h2>

        <p className="mx-auto max-w-2xl text-sm leading-7 text-fun-gray-light md:text-base">
          Have a product, platform, or internal system in mind? Let’s talk about
          how we can turn it into something clear, useful, and built to last.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex cursor-pointer whitespace-nowrap rounded-full border-2 border-white bg-bg px-8 py-3 font-bold text-white transition-colors hover:border-fun-pink hover:bg-fun-pink"
        >
          Discuss Your Project
        </a>
      </div>

      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 -translate-x-1/2 object-cover sm:bottom-[-150px] sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src="/static/doodles/hero/fancyLines.svg"
        alt="Decorative background lines"
      />
    </div>
  );
}

export default CTA;
