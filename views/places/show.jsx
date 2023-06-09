const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <p className="inactive">No reviews yet! Be the first!</p>;

  let rating = <p className="inactive">No ratings yet! Be the first!</p>;
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(
      sumRatings / data.place.comments.length
    );
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐️";
    }
    rating = <p>{stars} stars</p>;

    comments = data.place.comments.map((c) => {
      return (
        <div className="border border-gray rounded col-sm-4">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
          <p>{c.content}</p>
          <p className="text-center font-weight-bold">- {c.author}</p>
          <h5>Rating: {c.stars}</h5>
          <form
            method="POST"
            action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}
          >
            <input
              type="submit"
              className="btn btn-danger btn-sm"
              value="Delete Comment"
            />
          </form>
        </div>
      );
    });
  }

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
                  {rating} <br />
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
        <div className="mx-auto commentBox">{comments}</div>

        <h3 className="pt-4">Share Your Rant or Rave!</h3>

        <form
          action={`/places/${data.place.id}/comment`}
          method="POST"
          className="mx-auto w-75"
        >
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="author">Author</label>
              <input id="author" name="author" className="form-control" />
            </div>

            <div className="form-group col-sm-5">
              <label htmlFor="stars">Star Rating</label>
              <input
                type="range"
                step="0.5"
                min="1"
                max="5"
                id="stars"
                name="stars"
                className="form-range"
              />
            </div>

            <div className="form-group col-sm-1">
              <label htmlFor="rant">Rant?</label>
              <input
                type="checkbox"
                id="rant"
                name="rant"
                className="form-check-input form-check mx-auto"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-sm-12">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Add Comment"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
