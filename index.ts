// Q63
// creating a custom type (type alias) for shape that can be circle and rectangular
type Shape = {
  type: "circle" | "rectangular";
  radius?: number;
  width?: number;
  height?: number;
}
let circle: Shape = { type: "circle", radius: 10 };
let rectangular: Shape = { type: "rectangular", width: 10, height: 20 };
console.log(circle);
console.log(rectangular);// we make a flexiable programme that make a different shapes in details