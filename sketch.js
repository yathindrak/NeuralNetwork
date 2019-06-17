let brain;
/**
 * P5.js setup
 */
function setup() {
  // brain = new NeuralNetwork(3,3,1);

  let a = new Matrix(2, 3);
  // let b = new Matrix(3, 2);
  a.randomize();
  // b.randomize();
  console.table(a.data);
  // console.table(b.data);
  // let c = a.multiply(b);
  // console.table(c.data);
  console.table(a.transpose().data)

}

function draw() {
  background(0);
}
