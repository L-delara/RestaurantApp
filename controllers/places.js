const router = require("express").Router();

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "Tokyo Sushi",
      city: "Seattle",
      state: "WA",
      cuisines: "Japanese, Pan-Asian",
      pic: "/images/sushi.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Boston",
      state: "MA",
      cuisines: "Coffee, Bakery",
      pic: "/images/raspberry-cake.jpg",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;
