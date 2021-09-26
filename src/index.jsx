import React from "react";
import { render } from "react-dom";
import "./style.css";

const blogPosts = [
  {
    heading: "Název prvního článku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg/1920px-Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg",
    author: "Petra",
    postDate: "1. 1. 2020",
    readingTime: "5",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi placeat sit voluptates? Deserunt, quas error. Vel recusandae dolorem, enim ad quam consequuntur? Officiis beatae temporibus facere eaque eligendi, et quas.",
    link: "#prvni",
  },
  {
    heading: "Název druhého článku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Zugspitze_-_June_2018_-_31911455517.jpg/1920px-Zugspitze_-_June_2018_-_31911455517.jpg",
    author: "Jana",
    postDate: "2. 2. 2020",
    readingTime: "3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo, quidem eum vero voluptates asperiores quas optio sunt odio repudiandae eius reiciendis in architecto placeat cupiditate! Voluptatibus beatae enim numquam?",
    link: "#druhy",
  },
  {
    heading: "Název třetího článku",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/EverestfromKalarPatarcrop.JPG",
    author: "Lucie",
    postDate: "3. 3. 2020",
    readingTime: "8",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi placeat sit voluptates? Deserunt, quas error. Vel recusandae dolorem, enim ad quam consequuntur? Officiis beatae temporibus facere eaque eligendi, et quas.",
    link: "#treti",
  },
  {
    heading: "Název čtvrtého článku",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg/1920px-Monasterio_Khor_Virap%2C_Armenia%2C_2016-10-01%2C_DD_25.jpg",
    author: "Luděk",
    postDate: "4. 4. 2020",
    readingTime: "10",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo, quidem eum vero voluptates asperiores quas optio sunt odio repudiandae eius reiciendis in architecto placeat cupiditate! Voluptatibus beatae enim numquam?",
    link: "#ctvrty",
  },
];

const Header = () => (
  <header classname="header">
    <div className="logo"></div>
    <h1>Můj boží blog</h1>
    <em>/* Ta věc fakt úplně samostatně generuje články z arraye... Teď ještě zjistit, jak komunikovat s databází a pak ještě tisíc dalších věcí a ono to třeba časem půjde...!!! */ </em>
  </header>
);

const Blog = (props) => (
  <div className="blog-box">
    <img src={props.image} alt="" className="blog-image" />
    <h2 className="blog-heading">{props.heading}</h2>
    <div className="meta">
      <small>
        autor: {props.author}| {props.postDate}| {props.readingTime} min čtení
      </small>
    </div>
    <p className="blog-text">{props.text}</p>
    <a href={props.link} className="read-more-link">
      Číst dál
    </a>
  </div>
);

const Main = () => (
  <main>
    <div className="blog-section">
      {blogPosts.map((e) => (
        <Blog image={e.image} heading={e.heading} author={e.author} postDate={e.postDate} readingTime={e.readingTime} text={e.text} link={e.link} />
      ))}
    </div>
  </main>
);

const Footer = () => (
  <footer className="footer">
    <small>
      Copyrigth &copy; 2021 <a href="https://www.mariekocabova.cz/">Marie Kocábová</a>. All rights reserved.
    </small>
  </footer>
);

const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

render(<App />, document.querySelector("#app"));
