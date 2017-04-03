import $ from 'jquery';

class MobileMenu {
    constructor(){
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events(){ // Listen for click on menu icon
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu(){ // set the mobile menu to show
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}
export default MobileMenu;