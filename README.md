01. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
Ans:
  1.getElementById
  Usage:document.getElementById("idName")
  Selector:Only by ID (must be unique).

  3. getElementsByClassName
  Usage:document.getElementsByClassName("className")
  Selector: By class name.
  4. querySelector
  Usage:document.querySelector("CSS_Selector")
  Selector:Any CSS selector

  5. querySelectorAll
  Usage:document.querySelectorAll("CSS_Selector")
  Selector: Any CSS selector (same as querySelector).

02. How do you create and insert a new element into the DOM?

Ans:
  const newDiv = document.createElement("div");
  newDiv.textContent = "Hello, I am a new div!";



03. What is Event Bubbling and how does it work?

Ans:
  Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. 

04. What is Event Delegation in JavaScript? Why is it useful?

Ans:
  Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
  It’s useful for performance, dynamic content handling, and cleaner code.



