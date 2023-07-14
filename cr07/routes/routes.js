const express = require("express");
const routes = express.Router();

let courseInfo = [
  { course: "node", info: "NODE.js COURSE" },
  { course: "js", info: "JAVASCRIPT COURSE" },
  { course: "web", info: "HTML/CSS COURSE" },
  { course: "py", info: "PYTHON COURSE" },
];

routes.get("/", (req, res) => {
  res.json({ msg: "WELCOME AGAIN!!" });
});

routes.get("/:courseid", (req, res) => {
  const course = req.params.courseid;
  const courseI = courseInfo.find((i) => i.course == course);
  if (!courseI) {
    res.status(404).json({ erro: "Course not found", searchedCourse: course });
  } else {
    res.status(200).json(courseI);
  }
});

module.exports = routes;
