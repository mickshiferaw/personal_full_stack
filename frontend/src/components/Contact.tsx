export default function Contact() {
    return (
      <section id="contact" className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            I’m open to freelance work, collaboration, or full-time opportunities.  
            Feel free to reach out if you think we can work together!
          </p>
  
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:shiferawmichael13@gmail.com"
                className="text-blue-600 hover:underline"
              >
                shiferawmichael13@gmail.com
              </a>
            </p>
            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/michael-shiferaw"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                www.linkedin.com/in/michael-shiferaw
              </a>
            </p>
            <p>
              💻 GitHub:{" "}
              <a
                href="https://github.com/mickshiferaw"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                https://github.com/mickshiferaw
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
  