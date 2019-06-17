class Matrix {
    constructor (rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.matrix = [];

        for (let i = 0; i < this.rows; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    add(n) {

        if (n instanceof Matrix) {
            // Matrix addition
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.matrix[i][j] += n.matrix[i][j];
                }
            }
        } else {
            // Scalar addition
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.matrix[i][j] += n;
                }
            }
        }
    }
    randomize (n) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] = Math.floor(Math.random() * 10);
            }
        }
    }

     multiply(n) {
         if (n instanceof Matrix) {
             // Matrix multiplication
             if (this.cols !== n.rows) {
                 console.log("Columns of A must match to the rows of B");
                 return undefined;
             }

             let a = this;
             let b = n;
             let results = new Matrix(this.rows, n.cols);

             for (let i = 0; i < results.rows; i++) {
                 for (let j = 0; j < results.cols; j++) {
                    // Dot product of values in col
                     let sum = 0;
                     for (let k = 0; k < a.cols; k++) {
                         sum += a.matrix[i][k] * b.matrix[k][j];
                     }
                     results.matrix[i][j] = sum;
                 }
             }

             return results;

         } else {
             // Scalar multiplication
             for (let i = 0; i < this.rows; i++) {
                 for (let j = 0; j < this.cols; j++) {
                     this.matrix[i][j] *= n;
                 }
             }
         }
    }
}