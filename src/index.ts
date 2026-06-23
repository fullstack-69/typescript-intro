//  Example 1
function sayHello(name: string) {
  console.log("Hello " + name);
}

sayHello("World");

// Example 2
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
}

getData().then((data) => console.log(data));

// Example 3
import { name } from "./lib.js";

sayHello(name);

// Example 4
import * as fs from "fs";
// Fix __dirname is not defined error https://stackoverflow.com/a/64383997
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dir = fs.readdirSync(__dirname);
console.log(dir);
