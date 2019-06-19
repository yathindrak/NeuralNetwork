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
        // randomize bias
        this.bias_h.randomize();
        this.bias_o.randomize();

    }

    feedForward(input_array) {
        /*
            Generating hidden outputs
         */
        // convert array into matrix obj
        let inputs = Matrix.fromArray(input_array);

        // matrix multiplication of weights * inputs
        let hidden = Matrix.multiply(this.weights_ih, inputs);
        // add bias to the weighted sum calculated
        hidden.add(this.bias_h);

        // activation function
        hidden.map(sigmoid);

        /*
            Generating the output
         */
        let output = Matrix.multiply(this.weights_ho, hidden);
        output.add(this.bias_o);
        output.map(sigmoid);

        return output.toArray();
    }

    train(inputs, targets) {
        // feed forward
        let outputs = this.feedForward(inputs);

        // convert array to matrix object
        outputs = Matrix.fromArray(outputs);
        targets = Matrix.fromArray(targets);
        console.log(outputs.print());
        // calculate the error
        // error = targets - outputs
        let output_errors = Matrix.substract(targets, outputs);

        // in order to calculate errors in hidden layer nodes,
        // need to do W*e . But here W should be the transpose of previous W
        let weights_ho_tr = Matrix.transpose(this.weights_ho);
        let hidden_errors = Matrix.multiply(weights_ho_tr, output_errors);
        console.log(output_errors.print());
        console.log(hidden_errors.print());


    }
}

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}
