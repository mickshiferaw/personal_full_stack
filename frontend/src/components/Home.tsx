export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6"
    >
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Michael Shiferaw</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">
          Full Stack Developer & AI Engineer in Progress
        </p>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I design and build web apps, automation tools, and AI-powered solutions that solve real problems and deliver impact.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
