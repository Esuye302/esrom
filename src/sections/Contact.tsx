import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-background px-5 py-20"
    >
      {/* HEADING */}

      <h2 className="text-center font-serif text-[13vw] font-black leading-[0.8] decoration-primary ">
        Get In Touch
      </h2>

      {/* CONTENT */}

      <div className="mt-16 flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        {/* LEFT */}

        <div className="max-w-sm">
          <h3 className="text-xl font-black">Let's Talk</h3>

          <p className="mt-2 text-sm italic leading-relaxed">
            I&apos;m currently available for new projects.
            <br />
            Feel free to send me a message about anything you&apos;d like to
            work on, and we can discuss how we can make it happen.
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="
            w-full
            max-w-md
            rounded-3xl
            border
            border-black/10
            bg-white/20
            p-5
            shadow-[8px_10px_0_rgba(0,0,0,0.25)]
            backdrop-blur-sm
          "
        >
          {/* NAME */}

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="
              w-full
              rounded-full
              border
              border-black/5
              bg-white/50
              px-5
              py-3
              text-sm
              outline-none
              placeholder:text-black/50
              focus:border-primary
            "
          />

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            className="
              mt-3
              w-full
              rounded-full
              border
              border-black/5
              bg-white/50
              px-5
              py-3
              text-sm
              outline-none
              placeholder:text-black/50
              focus:border-primary
            "
          />

          {/* MESSAGE */}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            rows={5}
            className="
              mt-3
              w-full
              resize-none
              rounded-2xl
              border
              border-black/5
              bg-white/50
              px-5
              py-4
              text-sm
              outline-none
              placeholder:text-black/50
              focus:border-primary
            "
          />

          {/* SUBMIT */}

          <button
            type="submit"
            className="
              mt-4
              w-full
              rounded-full
              bg-primary/80
              px-5
              py-3
              text-sm
              font-bold
              transition-transform
              duration-200
              hover:-translate-y-1
        cursor-pointer
        active:bg-primary
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
