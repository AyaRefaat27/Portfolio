import React from "react";
import "./home.css";

export default function Socials() {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/aya-refaat-4b605b197/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://www.instagram.com/ayarefaat27/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://twitter.com/smilyface1681"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-twitter"></i>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100025235237640"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-facebook"></i>
      </a>

      {/* <a href="" className="home__social-link" target="_blank">
        <i class="fa-brands fa-behance"></i>
      </a> */}

      {/* <a href="" className="home_social-link" target="_blank">
        <i class="fa-brands fa-upwork"></i>
      </a> */}

      <a
        href="https://github.com/AyaRefaat27"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>

      <a
        href="https://t.me/Ayaa_Refaat"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-telegram"></i>
      </a>
    </div>
  );
}
