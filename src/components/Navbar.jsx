import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">R.'s Portfolio</Link>
      </div>
      <a href="" className="cta-btn">
        Under Working
      </a>
    </div>
  );
};

export default Navbar;
