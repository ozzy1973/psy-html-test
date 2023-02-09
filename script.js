const elements = document.querySelectorAll(".rasa");
const elementDetails = document.querySelectorAll(".opis");

elements.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const id = e.currentTarget.id;
    console.log(e);
    console.log(e.currentTarget.id);

    elementDetails.forEach((detail) => {
      if (detail.id === id + "-detale") {
        console.log(detail.id);
        console.log("wybrany");

        detail.style.display = "block";
      } else {
        detail.style.display = "none";
      }
    });
  });
});
