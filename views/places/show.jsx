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
                  {data.place.showEstablished()}
                </p>

                <a
                  href={`/places/${data.place.id}/edit`}
                  className="btn btn-warning"
                >
                  Edit
                </a>

                <form
                  method="POST"
                  action={`/places/${data.place.id}?_method=DELETE`}
                >
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
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
