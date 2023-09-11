export const createArr = (n: number): Array<number> => {
	const newArr = [];
	for (let i = 1; i <= n; i++) {
		newArr.push(i);
	}
	return newArr;
};

export const lerp = (start: number, end: number, amt: number): number => {
	return (1 - amt) * start + amt * end;
};

export const clamp = (value: number, min: number, max: number): number => {
	return Math.min(Math.max(value, min), max);
};

export function transform(el, transformValue) {
	el.style.webkitTransform = transformValue;
	el.style.msTransform = transformValue;
	el.style.transform = transformValue;
}

export const splitNum = (num: number): number[] => {
	return String(Math.abs(Math.floor(num)))
		.split('')
		.map((o) => parseInt(o));
};
