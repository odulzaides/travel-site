import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from '../scripts/modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import ModalReveal from './modules/ModalReveal';

const test = new MobileMenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), '60%');
var stickyHeader = new StickyHeader();

var showModal = new ModalReveal();
