// input vectors
const a = [1, 2, 3];
const b = [4, 5, 6];

// dot product
// formula
// a*b = a[0]*b[0] + a[1]*b[1] + a[2]*b[2]

const dotProduct = (a, b) => {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

console.log('dot product', dotProduct(a, b))

// vector product for two vectors
// formula
// x = a[1]*b[2] - a[2]*b[1]
// y = a[2]*b[0] - a[0]*b[2]
// z = a[0]*b[2] - a[1]*b[0]

const vectorProduct = (a, b) => {
  let c = [];
  c[0] = a[1] * b[2] - a[2] * b[1];
  c[1] = a[2] * b[0] - a[0] * b[2];
  c[2] = a[0] * b[1] - a[1] * b[0];
  return c;
};

console.log('vector product', vectorProduct(a, b));

// angle between vectors
// formulas
// dot product ab = a[0]*b[0] + a[1]*b[1] + a[2]*b[2]
// vector length |a| = sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2])
// cos angle cos(q) = ab/|a|*|b|

const angleBetweenVectors = (a, b) => {
  const ab = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const lengthA = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
  const lengthB = Math.sqrt(b[0] * b[0] + b[1] * b[1] + b[2] * b[2]);
  const radians = ab / (lengthA * lengthB)
  const angle = (radians * 180) / Math.PI
  return angle
}

console.log('angle between vectors', angleBetweenVectors(a, b));
