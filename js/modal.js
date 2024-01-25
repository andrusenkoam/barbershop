(() => {
  const refs = {
    openModalBtnPrimary: document.querySelector('[data-modal-open-primary]'),
    openModalBtnSecondary: document.querySelector('[data-modal-open-secondary]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtnPrimary.addEventListener('click', toggleModal);
  refs.openModalBtnSecondary.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
