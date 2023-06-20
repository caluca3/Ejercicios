//*Seleccionar todos los botones "subir" y "bajar"
const moveUpButtons = document.querySelectorAll(".move-up");
const moveDownButtons = document.querySelectorAll(".move-down");

//*Asignar la función al evento "click" de los botones "bajar"
moveDownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const listItem = button.parentNode;
    const nextItem = listItem.nextElementSibling;

    if (nextItem) {
      listItem.parentNode.insertBefore(nextItem, listItem);
    }
  });
});

// *Asignar la función al evento "click" de los botones "subir"
moveUpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const listItem = button.parentNode;
    const previousItem = listItem.previousElementSibling;

    if (previousItem) {
      listItem.parentNode.insertBefore(listItem, previousItem);
    }
  });
});
