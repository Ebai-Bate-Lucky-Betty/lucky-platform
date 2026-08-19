import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Meet Lucky", href: "/about" },
  { label: "My Journey", href: "/journey" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          Lucky Betty
        </Link>

        <div className="navbar-links">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="navbar-link"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
