import "/style.css";

function toggleLabsTable() {
  const labValuesSwitch = document.querySelector("[name=lab-step-1]");
  const labsTable = document.querySelector("[data-labs-visible=false]");

  labValuesSwitch.addEventListener("click", (event) => {
    labsTable.dataset.labsVisible = event.target.checked;
  });
}

function toggleLabStep() {
  const steps = document.querySelectorAll(".lab-step-switch");

  steps.forEach((step) => {
    step.addEventListener("click", (event) => {
      const tHead = event.target.closest("thead");
      const firstRow = tHead.firstElementChild;
      const tBody = tHead.nextElementSibling;

      firstRow.classList.toggle("table-secondary");
      firstRow.classList.toggle("table-primary");
      tBody.classList.toggle("lab-step-visible");
    });
  });
}

function fillForms() {
  const fillFormBtn = document.querySelector(".fill-form-btn");
  const defaultValues = document.forms["questionnaire"].querySelectorAll("[data-default-value]");

  fillFormBtn.addEventListener("click", () => {
    defaultValues.forEach((element) => {
      element.value = element.dataset.defaultValue;
    });
  });
}

toggleLabsTable();
toggleLabStep();
fillForms();
