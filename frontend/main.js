window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const functionApi = "";

const getVisitCount = () => {
  let count = 0;

  fetch(functionApi)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      count = json.count;
      document.getElementById("counter").innerText = count;
    })
    .catch((err) => console.log(err));

  return count;
};
