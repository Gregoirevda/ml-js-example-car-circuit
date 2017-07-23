//y = Ø0 + Ø1*x
import {HEIGHT, WIDTH} from '../constants/index';
export const line = (x, y) => {
  return 0 + x * 1 === y;
};


// radius² = x² + y²
// General hypothesis (center not in 0,0)
// radius² = (x - a)² + (y-b)²
export const circle = (x, y) => {
  const RADIUS = 40;
  const ROUTE_WIDTH = 400;
  const predicatedYExponent2 = Math.round(
      Math.pow(RADIUS, 2) - Math.pow(x - WIDTH/2, 2)
  );
  //console.log(Math.round(Math.pow(y - HEIGHT/2, 2)),predicatedYExponent2);
  const yExponent = Math.round(Math.pow(y - HEIGHT/2, 2));
  return (yExponent - ROUTE_WIDTH) <= predicatedYExponent2 &&
    predicatedYExponent2 <= (yExponent + ROUTE_WIDTH);
};