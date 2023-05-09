const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h4>
          <a href={`/places/${place.id}`}>{place.name}</a>
        </h4>
        <p className="text-center">{place.cuisines}</p>
        <p className="text-center">
          {place.city}, {place.state}
        </p>
        <img
          className="restaurantImage"
          src={place.pic}
          alt={place.name}
        />
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>REST-rant</h1>
        <h3>Places to Rant and Rave About!</h3>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
