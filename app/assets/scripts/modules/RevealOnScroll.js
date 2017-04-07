import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.pageSections = $('.page-section');
        this.headerLinks = $('.site-header a');
        this.hideInitially();
        this.createWaypoints();
    }

    addSmoothScrolling(){
        this.headerLinks.smoothScroll();

    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function () {
            let currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass("reveal-item--is-visible")
                },
                offset: that.offsetPercentage
            });
        });
    }
}
    
export default RevealOnScroll; 