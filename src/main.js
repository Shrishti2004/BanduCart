import "./style.css";  // go one folder up, because main.js is inside src/
import products from "../api/products.json";  // this is fine
import { showProductContainer } from "./homeProductCards"; // add ./ because homeProductCards.js is inside src/
 
// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);