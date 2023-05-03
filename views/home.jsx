const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="/images/pizza-margarita.jpg"
            alt="cheese, tomato, and basil picture"
            className="pizzaHome"
          />
          <div className="imgCredits">
            Photo by{" "}
            <a href="https://unsplash.com/es/@innagurina?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              {" "}
              Inna Gurina
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/JspLKUauwSI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              {" "}
              Unsplash
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
