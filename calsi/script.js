function clearDisplay() {
  document.getElementById("display").value = "";
}

function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function appendOperator(op) {
  const display = document.getElementById("display");
  const value = display.value;

  // Prevent operator if display is empty or ends with operator (except for '(' or ')')
  if (
    value === "" && op !== "(" ||
    /[+\-*/.]$/.test(value) && op !== "(" && op !== ")"
  ) {
    alert("Please enter a number first!");
    return;
  }

  display.value += op;
}

function calculateResult() {
  const display = document.getElementById("display");
  const expression = display.value;

  if (expression === "") {
    alert("Nothing to calculate!");
    return;
  }

  try {
    // Using Function constructor instead of eval for slightly better safety
    const result = Function(`return (${expression})`)();

    if (!isFinite(result)) {
      alert("Invalid operation (e.g., division by zero)!");
      display.value = "";
    } else {
      display.value = result;
    }
  } catch (error) {
    alert("Invalid expression!");
    display.value = "";
  }
}

