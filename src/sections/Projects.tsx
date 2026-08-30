import amazonImg from "../assets/images/amazon.png";
import netflixImg from "../assets/images/netflix.png";
import apple from "../assets/images/apple.png";
import evangadiForum from "../assets/images/evangadiForum.png";

interface Project {
  number: string;
  title: string;
  categories: string[];
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Amazon",
    categories: ["React", "Node.js", "Stripe"],
    image: amazonImg,
    description: "A fullstack e-commerce experience.",
    link: "https://fancy-tiramisu-f90fb5.netlify.app/",
  },
  {
    number: "02",
    title: "Netflix",
    categories: ["React", "API", "Responsive"],
    image: netflixImg,
    description: "A responsive movie streaming interface.",
    link: "https://esuye302.github.io/Netflix-clone-2024/",
  },
  {
    number: "03",
    title: "Apple",
    categories: ["React.js", "Node.js", "PostgreSQL"],
    image: apple,
    description: "A fullstack web application.",
    link: "https://esudevreact-appl.netlify.app/",
  },
  {
    number: "04",
    title: "Evangadi Forum",
    categories: ["React", "Node.js", "MySQL"],
    image: evangadiForum,
    description: "A community discussion platform.",
    link: "https://inquisitive-begonia-8299b7.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#1f1f1f] py-20 text-white"
    >
      {/* HEADER */}

      <div className="px-4">
        <span className="inline-flex rounded-full border border-white/50 px-2 py-1 text-[9px] font-bold uppercase leading-none">
          Selected Work
        </span>

        <h2 className="mt-5 max-w-[300px] text-5xl font-black leading-[0.9]">
          Made to
          <br />
          Perform
        </h2>

        <p className="mt-6 max-w-[350px] text-sm leading-relaxed text-white/80">
          I’ve spent the last two years learning, building, and turning ideas
          into real websites and fullstack products. Here’s a look at some of
          the work I’ve built along the way.
        </p>
      </div>

      {/* HORIZONTAL PROJECTS */}

      <div
        className="
          mt-14
          flex
          gap-4
          overflow-x-auto
          px-4
          pb-6
          snap-x
          snap-mandatory
          scrollbar-none
        "
      >
        {projects.map((project) => (
          <article
            key={project.number}
            className="
              group
              w-[88vw]
              max-w-[420px]
              shrink-0
              snap-start
              overflow-hidden
              rounded-xl
              border
              border-white/20
              bg-black/30
            "
          >
            {/* TOP */}

            <div className="flex items-center justify-between gap-3 px-3 py-3">
              {/* NUMBER */}

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-white/50 px-1 text-[9px]">
                {project.number}
              </span>

              {/* CATEGORIES */}

              <div className="flex flex-wrap justify-end gap-1.5">
                {project.categories.map((category) => (
                  <span
                    key={category}
                    className="
                      rounded-full
                      border
                      border-white/50
                      px-2
                      py-1
                      text-[8px]
                      font-medium
                      leading-none
                    "
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE */}

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-105
                  "
                />
              </div>
            </a>

            {/* PROJECT INFO */}

            <div className="flex items-end justify-between gap-4 p-4">
              <div>
                <h3 className="text-2xl font-black leading-none">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  {project.description}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="
                  shrink-0
                  text-2xl
                  transition-transform
                  duration-300
                  border-2
                  w-10
                  h-10
                  text-center
                  bg-primary
                  text-black
                  rounded-full
                  group-hover:translate-x-1
                "
              >
                ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
