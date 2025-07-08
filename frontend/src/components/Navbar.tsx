export default function Navbar() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div
          className="text-2xl font-bold tracking-wide cursor-pointer text-blue-400"
          onClick={() => scrollToSection("home")}
        >
          MichaelShiferaw
        </div>
        <div className="space-x-6 hidden md:flex">
          {["home", "about", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="capitalize text-gray-300 hover:text-white transition"
            >
              {id.replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
