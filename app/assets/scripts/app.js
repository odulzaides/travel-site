import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from '../scripts/modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

const test = new MobileMenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), '60%');
var stickyHeader = new StickyHeader();
