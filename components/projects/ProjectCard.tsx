import React from "react";
import Image from "next/image";

function ProjectCard({ project }) {
  return (
    <article className="group mx-auto flex h-full w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-fun-pink/40">
      <a
        href={project.deploymentUrl || project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="relative block overflow-hidden border-b border-white/10"
      >
        <img
          className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          src={project.image}
          alt={project.title}
        />
      </a>

      <div className="flex flex-1 flex-col p-5 text-left">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-left text-xl font-bold leading-tight text-white">
            {project.title}
          </h3>

          <div className="flex items-center gap-2 pt-1 shrink-0">
            {project.deploymentUrl && (
              <a
                href={project.deploymentUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} live site`}
              >
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="External link icon"
                />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} GitHub repository`}
              >
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="GitHub icon"
                />
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 min-h-[72px] text-sm leading-6 text-fun-gray-light text-left">
          {project.summary}
        </p>

        <div className="mt-4 space-y-2 text-sm text-left">
          {project.role && (
            <p className="text-fun-gray">
              <span className="font-semibold text-white">Scope:</span>{" "}
              {project.role}
            </p>
          )}

          <p className="text-fun-gray">
            <span className="font-semibold text-white">Built by:</span>{" "}
            {project.builtBy.map((person, index) => (
              <React.Fragment key={person.name}>
                {person.url ? (
                  <a
                    href={person.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-4 transition-colors hover:text-fun-pink hover:underline"
                  >
                    {person.name}
                  </a>
                ) : (
                  <span>{person.name}</span>
                )}

                {index < project.builtBy.length - 1 && ", "}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="mt-auto pt-5 text-left">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-fun-gray">
            Tech Stack
          </p>

          <ul className="flex min-h-[64px] flex-wrap content-start gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-fun-gray-light transition duration-300 group-hover:border-fun-pink/30 group-hover:text-white"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
