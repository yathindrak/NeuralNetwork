class NeuralNetwork {
    constructor (input_nodes, hidden_nodes, output_nodes) {
        // count for each input, hidden and output nodes
        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;

        // weights between input and hidden
        // as per the matrix-weights.png in this num of rows is num of hidden nodes
        // num of cols is num of input nodes
        this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);

        // weights between hidden and output
        // as per the matrix-weights.png in this num of rows is num of output nodes
        // num of cols is num of hidden nodes
        this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);

        // randomize weights
        this.weights_ih.randomize();
        this.weights_ho.randomize();

        // bias -> matrix for each -> cols is num of nodes , row is one
        // bias for each node in hidden layer
        this.bias_h = new Matrix(this.hidden_nodes,1);
        // bias for each node in output layer
        this.bias_o = new Matrix(this.output_nodes,1);

    }

    feedForward(input_array) {

        // convert array into matrix obj
        let inputs = Matrix.fromArray(input_array);

        // matrix multiplication of weights * inputs
        let hidden = Matrix.multiply(this.weights_ih, inputs);
        // add bias to the weighted sum calculated
        hidden.add(this.bias_h);

        // activation function

        //return guess;
    }
}
