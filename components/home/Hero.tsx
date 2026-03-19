import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <div className="relative heroElem m-auto flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center px-5 pt-24 pb-16 text-center z-[1]">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-fun-pink">
        Mahadata Informatics Technology
      </p>

      <h1 className="heroTitle heroShinyBg relative inline-block w-auto max-w-2xl text-5xl font-bold tracking-tighter text-white md:text-6xl lg:max-w-4xl lg:text-7xl">
        We build <span className="heroShiny1 text-fun-pink">websites</span>,{" "}
        <span className="heroShiny2 text-fun-pink">platforms</span>, and digital
        systems that solve real business problems.
        <img
          className="sqD squiggle-hero-nextjs hidden top-[70px] right-[20px] w-10 md:block"
          style={{ animationDelay: "0.2s" }}
          src="/static/doodles/hero/nextjs.svg"
          alt="Next.js doodle"
        />
        <img
          className="sqD hidden sm:block bottom-[-300px] left-[-150px] w-28"
          style={{ animationDelay: "0.4s" }}
          src="/static/doodles/hero/coder.svg"
          alt="Coder doodle"
        />
        <img
          className="sqD hidden sm:block left-[120px] bottom-[-135px] w-14 lg:left-[180px]"
          style={{ animationDelay: "0.5s" }}
          src="/static/doodles/hero/js.svg"
          alt="JavaScript doodle"
        />
        <img
          className="sqD bottom-[-260px] left-[50%] w-12 -translate-x-1/2 sm:bottom-[-220px]"
          style={{ animationDelay: "0.6s" }}
          src="/static/doodles/hero/dino.svg"
          alt="Dino doodle"
        />
        <img
          className="sqD right-[-10px] bottom-[-170px] w-14 sm:right-[20px] lg:right-[40px]"
          style={{ animationDelay: "0.7s" }}
          src="/static/doodles/hero/paintbrush.svg"
          alt="Paintbrush doodle"
        />
        <img
          className="sqD squiggle-hero-pop1 hidden sm:block top-[-120px] left-[12%] w-12 lg:left-[120px]"
          src="/static/doodles/hero/pop1.svg"
          alt="Pop doodle"
        />
        <img
          className="sqD left-[-20px] bottom-[-90px] w-16 opacity-40 sm:left-[10px] sm:bottom-[-95px]"
          style={{ animationDelay: "0.9s" }}
          src="/static/doodles/hero/code.svg"
          alt="Code doodle"
        />
        <img
          className="sqD hidden sm:block right-[90px] bottom-[-115px] w-10"
          style={{ animationDelay: "0.75s" }}
          src="/static/doodles/hero/w.svg"
          alt="W doodle"
        />
        <img
          className="sqD right-[10px] bottom-[-95px] w-10 sm:right-[0px]"
          style={{ animationDelay: "0.8s" }}
          src="/static/doodles/hero/arrow.svg"
          alt="Arrow doodle"
        />
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-8 text-fun-gray-light md:text-lg">
        From company websites to internal tools and custom digital products, we
        design and develop solutions with clarity, efficiency, and intention.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link href="/projects">
          <a className="cursor-pointer whitespace-nowrap rounded-full border-2 border-fun-pink bg-fun-pink px-10 py-4 text-lg font-bold text-white transition-colors hover:border-fun-pink-light hover:bg-fun-pink-light">
            View Projects
          </a>
        </Link>

        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer whitespace-nowrap rounded-full border-2 border-fun-white bg-bg px-10 py-4 text-lg font-bold text-fun-white transition-colors hover:border-fun-pink hover:bg-fun-pink hover:text-white">
            Learn More
          </div>
        </ScrollLink>
      </div>
    </div>
  );
}

export default Hero;
