import Link from "next/link";
import Image from "next/image";
import React from "react";
import { footer } from "@/data/global";

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-bg px-5 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              MahadataTech
            </h3>
            <p className="mt-3 text-sm leading-6 text-fun-gray">
              We build digital systems, platforms, and products that are made to
              solve real problems — clearly, efficiently, and with intention.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:justify-self-end">
            {footer.columns.map((column, index) => (
              <div key={index} className="text-left md:text-right">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-fun-gray">
                  {column.title}
                </h4>

                <ul className="mt-4 space-y-3">
                  {column.links.map((linkItem, linkIndex) => (
                    <li key={linkIndex}>
                      {linkItem.leavesWebsite ? (
                        <a
                          href={linkItem.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-fun-gray-light transition hover:text-white md:justify-end"
                        >
                          {linkItem.icon && (
                            <Image
                              src={linkItem.icon}
                              alt={linkItem.name}
                              width={18}
                              height={18}
                              className="shrink-0"
                            />
                          )}
                          <span>{linkItem.name}</span>
                        </a>
                      ) : (
                        <Link href={linkItem.link}>
                          <a className="inline-flex items-center text-sm text-fun-gray-light transition hover:text-white md:justify-end">
                            {linkItem.name}
                          </a>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-fun-gray">
          <div className="grid gap-3 sm:grid-cols-2 sm:items-center">
            <p>
              © {new Date().getFullYear()} MahadataTech. All rights reserved.
            </p>
            <p className="sm:text-right">
              Built to create real impact, not just pretty screens.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
