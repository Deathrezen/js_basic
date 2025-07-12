// The for...of statement executes a loop that operates on
// a sequence of values sourced from an iterable object.
// Iterable objects include instances of built-ins such as
// Array, String, TypedArray, Map, Set, NodeList (and other DOM collections),
// as well as the arguments object, generators produced by generator functions,
// and user-defined iterables.
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// The for...in statement iterates over all enumerable string properties of an object
// (ignoring properties keyed by symbols), including inherited enumerable properties.

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"
