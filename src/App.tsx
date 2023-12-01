import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <a className="logoimage">
              <img src="public/images/ela logo.jpeg" alt="ELA Club Logo" />
              &nbsp;&nbsp;&nbsp; ELA Club
            </a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Event Book</a>
              </li>
              <li>
                <a href="#">Magazine</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <h1>Welcome to English Literary Association</h1>
            <p>Explore the world of English Language Arts with us.</p>
            <a href="#" className="cta-button">
              Join Now
            </a>
          </div>
        </section>

        {/* Additional Section with the Provided Text */}
        <section className="about-ela">
          <div className="container">
            <h2>Why Choose English Literary Association?</h2>
            <p>
              English Literary Association is the go-to club for soft skills
              development. We firmly believe that mastering the soft skills is
              going to be the ace up your sleeves you will need to set yourself
              apart from the crowd. ELA is all set to offer you all a bunch of
              amazing events and fun trivia to enhance your levels of English in
              the most fun way out there.
            </p>
            <p>
              TIM - Our priority is to develop sensitization about improving our
              oration skills and confidence. We also aim to bring forth a
              community with increased involvement with each passing event.
              Allowing students to exercise their mental faculties and oratory
              skills is at the focal center of everything that we do in this
              club.
            </p>
          </div>
        </section>

        {/* Other sections of your homepage */}
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 English Literary Association. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
