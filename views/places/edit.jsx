const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit a Place</h1>
        <form
          method="POST"
          action={`/places/${data.place.id}?_method=PUT`}
          className="mx-auto w-50"
        >
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">* Place Name:</label>
              <input
                className="form-control"
                id="name"
                name="name"
                value={data.place.name}
                required
              />
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="name">* Cuisine Type:</label>
              <input
                className="form-control"
                id="name"
                name="name"
                value={data.place.cuisines}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="pic">Picture URL:</label>
            <input
              className="form-control"
              type="url"
              id="pic"
              name="pic"
              value={data.place.pic}
            />
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">City:</label>
              <input
                className="form-control"
                id="city"
                name="city"
                value={data.place.city}
              />
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="name">State:</label>
              <input
                className="form-control"
                id="state"
                name="state"
                value={data.place.state}
              />
            </div>
          </div>
          <p>* = required</p>
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit Edit"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
