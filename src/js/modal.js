// (() => {
//   const refs = {
//     // Додати атрибут data-modal-open на кнопку відкриття
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     // Додати атрибут data-modal-close на кнопку закриття
//     closeModalBtns: document.querySelectorAll('[data-modal-close]'),
//     // Додати атрибут data-modal на бекдроп модалки
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   // refs.closeModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtns.forEach(btn => {
//     btn.addEventListener('click', toggleModal);
//   });

//   function toggleModal(event) {
//     if (event) event.preventDefault(); // отменяем submit/перезагрузку
//     refs.modal.classList.toggle('is-open'); // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
//   }
// })();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    form: document.querySelector('form'), // ⚡ ссылка на форму
  };

  refs.openModalBtn.addEventListener('click', function (event) {
    event.preventDefault(); // отключаем автоотправку формы

    // ✅ используем стандартную проверку формы
    if (!refs.form.checkValidity()) {
      refs.form.reportValidity(); // покажет встроенные подсказки браузера
      return; // если не валидно → не открываем модалку
    }

    toggleModal(); // если форма валидна → открываем
  });

  refs.closeModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
