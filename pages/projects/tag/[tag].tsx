import Page from "components/utility/Page";
import { GetStaticProps, GetStaticPaths } from "next";
import projects from "@/data/content/projects";
import { kebabCase, kebabArray } from "@/utils/utils";
import Projects from "components/projects/Projects";
import Heading from "components/projects/Heading";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const allTechStacks: string[] = [];

  projects.forEach((project) => {
    project.techStack.forEach((tech) => {
      allTechStacks.push(tech);
    });
  });

  const uniqueTechStacks = [...new Set(allTechStacks)];

  const allTagsPaths = uniqueTechStacks.map((tech) => ({
    params: { tag: kebabCase(tech) },
  }));

  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { tag: string };
}) => {
  const tag = params.tag;

  const filteredProjects = projects.filter((project) =>
    kebabArray(project.techStack).includes(tag),
  );

  return {
    props: {
      filteredProjects,
      tag,
    },
  };
};

function PostPage({
  filteredProjects,
  tag,
}: {
  filteredProjects: typeof projects;
  tag: string;
}) {
  const allTechStacks = [
    ...new Set(projects.flatMap((project) => project.techStack)),
  ];
  const allKebabTechStacks = allTechStacks.map((tech) => kebabCase(tech));
  const capsTag = allTechStacks[allKebabTechStacks.indexOf(tag)];

  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${capsTag} Projects`,
        desc: `A showcase of projects built with ${capsTag}.`,
      }}
    >
      <Heading tag={capsTag} />
      <Projects overwriteProjects={filteredProjects} />

      <Link href="/projects">
        <a className="mx-auto mt-8 inline-flex w-full max-w-sm items-center justify-center rounded-full border border-fun-pink bg-fun-pink-darkerer px-8 py-3 text-center text-fun-pink transition-colors hover:bg-fun-pink hover:text-white md:max-w-xs">
          View All Projects
        </a>
      </Link>
    </Page>
  );
}

export default PostPage;
