// loading form

const modalFormContainer = document.getElementById("modal__form-container");

function loadForm() {
  const loginForm = `
    <form action="#!" method="POST" class="modal__form form" id="form">
              <h2 class="form__title">Войти в систему</h2>
              <input
                class="form__input"
                id="emailInput"
                type="text"
                placeholder="Email/Телефон"
              />
              <input
                class="form__input"
                id="passwordInput"
                type="password"
                placeholder="Пароль"
              />

              <label class="form__checkbox-label">
                <input
                  class="form__checkbox-input"
                  id="checkbox"
                  type="checkbox"
                  name="checkbox"
                />
                Запомнить пароль
              </label>
              <a
                class="form__link"
                href="https://www.google.com/"
                target="_blank"
                >Восстановить</a
              >
              <span class="errorMessage" id="errorMessage"></span>
              <button type="submit" class="form__button form__button-login">
                Войти
              </button>
              <a
                type="submit"
                class="form__button form__button-register"
                href="https://www.google.com/"
                target="_blank"
              >
                Зарегестрироваться
              </a>
            </form>
  `;

  modalFormContainer.innerHTML = loginForm;
}

loadForm();

//modal
const demoButton = document.querySelector(".demo__button");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".modal__close-button");

demoButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  errorMessage.textContent = "";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    errorMessage.textContent = "";
  }
});

// form - checkboxes
const checkbox = document.querySelector(".form__checkbox-input");

checkbox.addEventListener("change", function () {
  checkbox.setAttribute("checked", !checkbox.checked);
});
