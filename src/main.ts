import './style.scss';
import { parallax } from './parallax';

const eventHandler = () => {
	parallax();
};

document.addEventListener('DOMContentLoaded', eventHandler());
