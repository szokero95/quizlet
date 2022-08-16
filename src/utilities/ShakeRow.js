export const ShakeRow = (currentRow) => {
  const wrongRow = document.getElementById("row" + currentRow);
  wrongRow.classList.add("wrongWord");
  setTimeout(() => {
    wrongRow.classList.remove("wrongWord");
  }, 1000);
};
