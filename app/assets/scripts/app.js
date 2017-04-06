import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from '../scripts/modules/RevealOnScroll';

const test = new MobileMenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), '60%');
