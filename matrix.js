class Matrix {
    constructor (rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];

        for (let i = 0; i < this.rows; i++) {
            this.data[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = 0;
            }
        }
    }

    add(n) {

        if (n instanceof Matrix) {
            // Matrix addition
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n.data[i][j];
                }
            }
        } else {
            // Scalar addition
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n;
                }
            }
        }
    }
    randomize (n) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.floor(Math.random() * 10);
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
                         sum += a.data[i][k] * b.data[k][j];
                     }
                     results.data[i][j] = sum;
                 }
             }

             return results;

         } else {
             // Scalar multiplication
             for (let i = 0; i < this.rows; i++) {
                 for (let j = 0; j < this.cols; j++) {
                     this.data[i][j] *= n;
                 }
             }
         }
    }

    transpose() {
        let result = new Matrix(this.cols, this.rows);

        for (let i=0; i <  this.rows; i++) {
            for (let j=0; j <  this.cols; j++) {
                result.data[j][i] = this.data[i][j];
            }
        }

        return result;
    }
}