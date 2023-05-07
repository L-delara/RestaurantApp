const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>

        <div className="card mb-3 mx-auto bg-transparent w-75">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={data.place.pic}
                className="img-fluid rounded-start"
                alt={data.place.name}
              />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.place.cuisines}</h5>
                <p className="card-text">
                  Rating: No rating yet! <br />
                  Location: {data.place.city}, {data.place.state}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3>Reviews</h3>
        <p>No reviews yet! Be the first!</p>
      </main>
    </Def>
  );
}

module.exports = show;
