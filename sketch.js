
/**
 * P5.js setup
 */
function setup() {
  let nn = new NeuralNetwork(2,2,1);

  let input = [1, 0];

  let output = nn.feedForward(input);
  console.log(output);
  // let a = new Matrix(2, 3);
  // // let b = new Matrix(3, 2);
  // a.randomize();
  // a.print();
  //
  // function doubleIt(x) {
  //   return x * 2;
  // }
  //
  // a.map(doubleIt);
  // a.print();
  // b.randomize();
  // console.table(a.data);
  // console.table(b.data);
  // let c = a.multiply(b);
  // console.table(c.data);
  // console.table(a.transpose().data)

}

function draw() {
  background(0);
}
