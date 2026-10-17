import { useState } from "react";

// PASTE YOUR ACCESS KEY HERE
const WEB3FORMS_ACCESS_KEY = "8b5e8643-e040-4d1d-8b7a-75e2631f6d45";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  // New states for handling the submission process
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset status when the user starts typing again
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-background px-5 py-20"
    >
      {/* HEADING */}
      <h2 className="text-center font-serif text-[13vw] font-black leading-[0.8] decoration-primary">
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
            disabled={isSubmitting}
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
              disabled:opacity-50
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
            disabled={isSubmitting}
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
              disabled:opacity-50
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
            disabled={isSubmitting}
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
              disabled:opacity-50
            "
          />

          {/* SUCCESS / ERROR MESSAGE */}
          {status === "success" && (
            <p className="mt-3 text-center text-sm font-bold text-green-600">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-center text-sm font-bold text-red-600">
              Oops! Something went wrong. Please try again.
            </p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
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
              disabled:cursor-not-allowed
              disabled:hover:translate-y-0
              disabled:opacity-70
            "
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;