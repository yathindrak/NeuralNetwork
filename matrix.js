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

    static fromArray(arr) {
        // num of cols in matrix should be array size
        let m = new Matrix(arr.length, 1);
        for (let i = 0; i < arr.length; i++) {
            m.data[i][0] = arr[i];
        }
        return m;
    }

    toArray() {
        let arr = [];

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                arr.push(this.data[i][j]);
            }
        }
        return arr;
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

    static substract(a, b) {
        // return new matrix a-b
        let result = new Matrix(a.rows, a.cols);
        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {
                result.data[i][j] = a.data[i][j] - b.data[i][j];
            }
        }
        return result;

    }
    randomize () {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] = Math.random() * 2 -1;
            }
        }
    }

     static multiply(a, b) {
         if (a.cols !== b.rows) {
             console.log("Columns of A must match to the rows of B");
             return undefined;
         }
         let results = new Matrix(a.rows, b.cols);

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
    }

    multiply(n) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.data[i][j] *= n;
            }
        }
    }

    map(func) {
        // apply a function to every element of matrix
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let val = this.data[i][j];
                this.data[i][j] = func(val);
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

    print() {
        console.table(this.data);
    }
}