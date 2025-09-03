
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtns: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    form: document.querySelector('form'), 
  };

  refs.openModalBtn.addEventListener('click', function (event) {
    event.preventDefault(); 


    if (!refs.form.checkValidity()) {
      refs.form.reportValidity(); 
      return; 
    }

    toggleModal(); 
  });

  refs.closeModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
