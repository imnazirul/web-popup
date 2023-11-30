const container = document.querySelector(".container");

const popup = document.querySelector(".popup");

const close_pup = document.querySelector(".close-pup");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  popup.classList.add("active");
  container.classList.add("active");
});

close_pup.addEventListener("click", () => {
  popup.classList.remove("active");
  container.classList.remove("active");
});
