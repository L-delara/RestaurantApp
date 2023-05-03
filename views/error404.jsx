const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>PAGE NOT FOUND!</h1>
        <h3>Sorry about that!</h3>
        <div>
          <img
            src="/images/sad-404-image.jpg"
            alt="empty plate with sad face drawn on"
            className="page404Image"
          />
          <div className="imgCredits">
            Photo by{" "}
            <a href="https://unsplash.com/@thoughtcatalog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Thought Catalog
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/fnztlIb52gU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
