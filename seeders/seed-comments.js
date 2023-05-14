const db = require("../models");

// To use await, we need an async function.
async function seed() {
  // Get the place, Sushi Time
  let place = await db.Place.findOne({ name: "Sushi Time" });

  //fake sample comment
  let comment = await db.Comment.create({
    author: "HungryHelen",
    rant: false,
    stars: 5.0,
    content: "Wow! Amazing! Will return!",
  });

  //add comment to place's comment array
  place.comments.push(comment.id);

  //save place now that it has a comment
  await place.save();
  //exit program
  process.exit();
}

seed();
