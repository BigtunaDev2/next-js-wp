import ThemeSwitcher from "../ThemeSwitcher";

export default function Header() {
  return (
    <header className="sticky top-3 z-40 px-3">
      <nav
        className="panel mx-auto flex max-w-5xl items-center justify-between rounded-full py-2 pl-6 pr-2 backdrop-blur"
        aria-label="Main"
      >
        <a href="#top" className="font-display text-lg font-extrabold">
          fieldwork<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium lg:flex">
          <li>
            <a className="hover:text-accent" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-accent" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="hover:text-accent" href="#process">
              Process
            </a>
          </li>
          <li>
            <a className="hover:text-accent" href="#team">
              Team
            </a>
          </li>
          <li>
            <a className="hover:text-accent" href="#packages">
              Packages
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <a
            href="#contact"
            className="btn btn-solid hidden !py-2.5 sm:inline-flex"
          >
            Start a project
          </a>
        </div>
      </nav>
    </header>

  )
}