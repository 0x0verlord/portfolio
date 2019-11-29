const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("C:\\portfolio\\client\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\portfolio\\client\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\portfolio\\client\\src\\pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\portfolio\\client\\src\\pages\\projects.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("C:\\portfolio\\client\\src\\pages\\resume.js")))
}

