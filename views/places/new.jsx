const React = require("react");
const Def = require("../default");

function new_form(data) {
  let message = "";
  if (data.message) {
    message = <h4 className="alert-danger">{data.message}</h4>;
  }
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        {message}
        <form method="POST" action="/places" className="mx-auto w-50">
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">* Place Name:</label>
              <input
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="name">* Cuisine Type:</label>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group  col-sm-9">
              <label htmlFor="pic">Place Picture:</label>
              <input
                className="form-control"
                type="url"
                id="pic"
                name="pic"
              />
            </div>
            <div className="form-group  col-sm-3">
              <label htmlFor="founded">Founded Year:</label>
              <input
                type="number"
                className="form-control"
                id="founded"
                name="founded"
                defaultValue={new Date().getFullYear()}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">City:</label>
              <input className="form-control" id="city" name="city" />
            </div>

            <div className="form-group col-sm-6">
              <label htmlFor="name">State:</label>
              <input className="form-control" id="state" name="state" />
            </div>
            <p>* = required</p>
            <input
              className="btn btn-primary"
              type="submit"
              value="Add a Place"
            />
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = new_form;
