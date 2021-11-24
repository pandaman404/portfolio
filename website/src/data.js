import Accountant from "./assets/accountant.jpg";
import Office from "./assets/office.jpg";
import Truck from "./assets/truck.jpg";

const frontendMentorProjects = [
  {
    name: "Fetch Countries App",
    url: "https://pandaman404.github.io/rest-countries-api/",
    repo: "https://github.com/pandaman404/rest-countries-api",
    image:
      "https://raw.githubusercontent.com/pandaman404/rest-countries-api/main/design/desktop-preview.jpg",
    tags: ["React", "Fetch API", "Dark Mode", "Sass"],
  },
  {
    name: "IP Address Tracker",
    url: "https://pandaman404.github.io/ip-address-tracker/",
    repo: "https://github.com/pandaman404/ip-address-tracker",
    image:
      "https://raw.githubusercontent.com/pandaman404/ip-address-tracker/master/design/desktop-preview.jpg",
    tags: ["React", "Fetch API", " LeafletJS", "Sass"],
  },
  {
    name: "Todo App",
    url: "https://pandaman404.github.io/todo-app/",
    repo: "https://github.com/pandaman404/todo-app",
    image:
      "https://raw.githubusercontent.com/pandaman404/todo-app/master/design/desktop-preview.jpg",
    tags: ["JavaScript", "LocalStorage", "Dark Mode", "Sass"],
  },
];

const freelanceProjects = [
  {
    name: "DMF Express Website",
    url: "https://dmfexpress.cl/",
    image: Truck,
    tags: ["WordPress", "JavaScript", "SEO"],
  },
  {
    name: "Mofisillas E-commerce",
    url: "https://mofisillas.cl/",
    image: Office,
    tags: ["WordPress", "WooCommerce", "SEO"],
  },
  {
    name: "Ibis Asesores Landing Page",
    url: "https://ibis-asesores.cl/",
    image: Accountant,
    tags: ["WordPress", "CSS", "SEO"],
  },
];

export { frontendMentorProjects, freelanceProjects };
