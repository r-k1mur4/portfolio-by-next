// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/rkimura@2x.png"
        className="profile-img"
        width={300}
        height={300}
        alt="R.KIMURA's personal headshot"
      />
      <div className="hero-text">
        <h1>Hey, I&apos;m R.KIMURA 👋</h1>
        <p>I&apos;m a Frontend Web Developer based in Chiba.</p>
        <div className="social-icons">
          <a
            href="https://twitter.com/olawanle_joel"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
