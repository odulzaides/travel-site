import $ from 'jquery';

class ModalReveal {
    constructor() {
        this.triggerButton = $('#get-in-touch');
        this.modal = $('#modal');
        this.events();
    }

    events() {
        this.triggerButton.click(this.showModal.bind(this));
    }

    showModal() {
        this.modal.addClass("modal__is-visible");
    }
}


export default ModalReveal;