import $ from 'jquery';

class ModalReveal {
    constructor() {
        this.triggerButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events() {
        // clicking the open modal button
        this.triggerButton.click(this.showModal.bind(this));

        // clicking x to close modal
        this.closeModalButton.click(this.hideModal.bind(this));
        
        // user pushes escpae key.
        $(document).keyup(this.keyPressHandler.bind(this));


    }

    showModal() {
        console.log("hello", this);
        this.modal.addClass("modal--is-visible");
        return false;
    }

    hideModal(){
        this.modal.removeClass("modal--is-visible");

    }

    keyPressHandler(e){
        if (e.keyCode == 27 ){
            this.hideModal();
        }
    }


}


export default ModalReveal;