const router = require("express").Router();

// GET /places
router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/", (req, res) => {
  res.send("GET /places stub");
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

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST /places");
});

module.exports = router;
