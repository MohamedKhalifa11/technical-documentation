let codeTags = document.querySelectorAll("code");

codeTags.forEach(codeTag => {
  let span = document.createElement("span");
  Object.assign(span.style, {
    position: "absolute",
    top: "0",
    right: "0",
    padding: "5px",
    cursor: "pointer"
  });

  span.innerHTML = `<i class="fa-regular fa-copy fa-xl"></i>`;

  codeTag.appendChild(span);

  span.addEventListener("click", e => {
    let copyText = e.target.parentElement.parentElement.innerText;
    navigator.clipboard.writeText(copyText);

    let icon = span.querySelector("i");
    icon.style.color = "green";

    setTimeout(() => {
      icon.style.color = "";
    }, 1000);
  });
});
