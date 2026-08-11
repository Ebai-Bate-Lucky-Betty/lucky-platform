export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-gray-200 px-10 py-6 flex items-center justify-between">
      
      <div className="font-bold text-xl">
        Lucky Betty
      </div>

      <div className="flex gap-6 text-sm text-gray-600">
        <a className="hover:text-black transition" href="#hero">
          Home
        </a>

        <a className="hover:text-black transition" href="#about">
          Meet Lucky
        </a>

        <a className="hover:text-black transition" href="#projects">
          My Journey
        </a>

        <a className="hover:text-black transition" href="#projects">
          Projects
        </a>

        <a className="hover:text-black transition" href="#projects">
          Resume
        </a>

        <a className="hover:text-black transition" href="#projects">
          Contact
        </a>
      </div>

    </nav>
  );
}