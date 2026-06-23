// Give warning
// function sumNumber(a, b) {
//   return a + b;
// }

function sumNumber(a: number, b: number) {
  return a + b;
}

// Hover cursor on "text" to see the type
function greeter(text: string | null | undefined) {
  if (!text) {
    console.log("...");
    return;
  }
  console.log(text);
}
