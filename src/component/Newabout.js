import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Newabout() {
  return (
    <>
      <div id="header">
        <div class="container mt-2">
          <div class="header-text">
            <h3 style={{ color: "white" }}>Web Designer</h3>
            <h1 style={{ color: "white" }}>
              Hi, I'm <span style={{ color: "red" }}>Sachin </span>
              <br />
              Raj from Delhi
            </h1>
          </div>
        </div>
      </div>

      <div id="about" className="bg-dark">
        <div class="container">
          <div class="row">
            <div class="about-col-1">
              <img src="image/user1.png" />
            </div>
            <div class="about-col-2">
              <h1 class="sub-title">About Me</h1>
              <p style={{ color: "white" }}>
                Hello, my name is Sachin and I am a student of Computer Science
                engineering. I am currently pursuing my degree from ABESIT in
                Ghaziabad, UP, India. I am passionate about exploring new
                technologies and solving real-world problems using my knowledge
                of computer science. I have always been fascinated by the power
                of technology to transform lives, and I am constantly learning
                new skills and tools to stay up-to-date with the latest trends
                in the industry. I have completed courses in DBMS, DAA,
                DSA,...etc and I am proficient in C , Python. During my time at
                college, I have been actively involved in extracurricular
                activities and projects. As I am from Bihar, I am proud of my
                heritage and culture, and I believe that my background has
                shaped my values of hard work, perseverance, and empathy. In my
                free time, I enjoy to play chess, and I am always on the lookout
                for new challenges and opportunities to learn and grow. I am
                excited to see where my passion for computer science will take
                me in the future, and I am eager to contribute my skills to make
                a positive impact on the world.
              </p>
              <div class="tab-titles">
                <p class="tab-links" style={{ color: "white" }}>
                  Skills
                </p>
              </div>
              <div class="tab-contents active-tab" id="skills">
                <ul>
                  <li style={{ color: "white" }}>
                    <span>UI/UX</span>
                    <br />
                    Designing Web/App Interfaces
                  </li>
                  <li style={{ color: "white" }}>
                    <span>Web Development</span>
                    <br />
                    Web app Development
                  </li>
                  <li style={{ color: "white" }}>
                    <span>App Development</span>
                    <br />
                    Building Android Apps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center my-2">
          <p style={{ color: "white" }}>
            Copyright Sachin. <span className="heart">&#10084;</span>
          </p>
        </footer>
    </>
  );
}
