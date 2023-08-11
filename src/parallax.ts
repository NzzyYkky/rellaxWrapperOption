import Rellax from 'rellax';

interface ParallaxElement {
	selector: string;
	wrapper: string;
}

export function parallax() {
	const parallaxElements: ParallaxElement[] = [
		{ selector: '.rellax', wrapper: '.js-rellax' },
		{ selector: '.rellax2', wrapper: '.js-rellax2' },
	];

	const parallaxInstances: Rellax[] = parallaxElements.map((element) => {
		return new Rellax(element.selector, {
			wrapper: element.wrapper,
			relativeToWrapper: true,
		});
	});

	window.addEventListener('scroll', function () {
		parallaxInstances.forEach((parallaxInstance) => {
			parallaxInstance.refresh();
		});
	});
}
