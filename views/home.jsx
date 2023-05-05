const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="/images/ice-cream.jpg"
            alt="vanilla and chocolate icecream cones"
            className="foodHomeImg"
          />
          <div className="imgCredits">
            Photo by{" "}
            <a href="https://unsplash.com/pt-br/@littlebearhugs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Donna G
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/images/food/ice-cream?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
