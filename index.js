const toggleText = (obj) => {
  if (obj.text == undefined || obj.img == undefined)
    return console.log("Missing html elements");

  const isExpanded = obj.el.getAttribute("aria-expanded") == "true";
  obj.el.setAttribute("aria-expanded", !isExpanded);

  if (isExpanded) {
    obj.text.classList.add("hidden");
    obj.img.setAttribute("src", "assets/images/icon-plus.svg");
  } else {
    obj.text.classList.remove("hidden");
    obj.img.setAttribute("src", "assets/images/icon-minus.svg");
  }
};

const questions = [...document.getElementsByClassName("faq__question")]
  .map((element) => {
    return {
      el: element,
      text: document.getElementById(element.getAttribute("aria-controls")),
      img: element.querySelector("img"),
    };
  })
  .forEach((element) =>
    element.el.addEventListener("click", () => toggleText(element))
  );
