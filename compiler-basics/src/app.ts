const button = document.querySelector("button");

let appId = "abc";

// No implicit returns example
function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }

  // return;
}

function clickHandler(message: string, age: number) {
  let userName = "Max";
  console.log("Clicked! " + message);
}

if (button) {
  button.addEventListener(
    "click",
    clickHandler.bind(null, "You're welcome", 32)
  );
}
