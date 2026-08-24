interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Interfaces that feel fast, responsive, and intentional with smooth interactions and attention to the details users actually notice.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building scalable and efficient server-side applications. The logic behind the experience. APIs, authentication, business logic, and systems built to work reliably beyond the screen.",
  },
  {
    number: "03",
    title: "Fullstack Development",
    description:
      "Developing complete web applications, integrating frontend with backend for seamless experiences.",
  },
  {
    number: "04",
    title: "Design & Experience",
    description:
      "Not just making things pretty. I focus on turning ideas into clear, usable interfaces where design and functionality work together.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative bg-background px-4 py-16">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="flex-center text-4xl font-black leading-none">
          About Me (&)
          <br />
          My Journey
        </h2>

        <p className="mt-6 text-sm leading-relaxed ">
          I’m not one of those developers who always knew this was what they
          wanted to do. I stumbled into it, got curious, and then got obsessed
          with understanding it.
        </p>

        <p className="mt-4 text-sm leading-relaxed">
          Years later, I’ve gone from learning the basics of the web to building
          full-stack products and I still find myself going down rabbit holes
          over things most people never see. That’s probably the best
          description of me as a developer.
        </p>

        <p className="mt-4 text-sm leading-relaxed">
          I don’t like using things I don’t understand. I like building them.
        </p>
      </div>

      {/* What I Build */}
      <div>
        <h3 className="flex-center mb-8 text-3xl font-black">What I Build?</h3>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Timeline background */}
          <div className="absolute left-2 top-0 h-full w-px bg-black/30" />

          {/* Timeline progress - GSAP will animate this later */}
          <div className="absolute  left-2 top-0 h-0 w-px bg-primary" />

          {/* Services */}
          <div className="flex flex-col gap-8">
            {services.map((service) => (
              <article
                key={service.number}
                className="relative rounded-xl border border-white/50 bg-white/20 p-5 backdrop-blur-sm"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[2.05rem] top-8 h-3 w-3 rounded-full border-2 border-black bg-primary" />

                <span className="text-5xl font-black text-primary">
                  {service.number}
                </span>

                <h4 className="mt-3 text-xl font-black">{service.title}</h4>

                <p className="mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
