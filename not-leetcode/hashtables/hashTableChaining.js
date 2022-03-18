const hashStringToInt = require("./hashFunc");

// Use primes!
class HashTableChain {
  constructor() {
    this.table = new Array(3);
    this.numItems = 0;
  }

  // O(1)
  setItem = (key, value) => {
    if (!key) return;

    const idx = hashStringToInt(key.toString(), this.table.length);
    this._resizeTable();

    // Either this is an update, or a collision
    if (this.table[idx]) {
      this._updateOrCreate(idx, key, value);
    } else {
      // Idx is completely empty, push new
      this.table[idx] = [[key, value]];
      this.numItems++;
    }
  };

  // O(1)
  getItem = (key = "") => {
    const idx = hashStringToInt(key.toString(), this.table.length);

    if (!this.table[idx]) return null;

    return this.table[idx].find((item) => item[0] === key)[1];
  };

  /*
   **
   ** Private Methods
   **
   */

  // For when a collision happens:
  // We should know whether to update an existing item or add a new one
  _updateOrCreate(idx, key, value) {
    const foundIdx = this.table[idx].findIndex((kv) => kv[0] === key);

    if (foundIdx === -1) {
      this.table[idx].push([key, value]);
      this.numItems++;
    } else this.table[idx][foundIdx] = [key, value];
  }

  _getLoadFactor() {
    return this.numItems / this.table.length;
  }

  _resizeTable() {
    const loadFactor = this._getLoadFactor();

    if (loadFactor < 0.5) return;

    const newTableSize = this._getPrimeSize();
    const newTable = new Array(newTableSize);

    this.table.forEach((arr) => {
      if (arr) {
        arr.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTableSize);

          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });

    this.table = newTable;
  }

  _getPrimeSize() {
    // Start with double + 1, which will be odd
    let k = this.table.length * 2 + 1;

    while (true) {
      const sqrt = parseInt(Math.sqrt(k));
      let isPrime = true;

      for (let i = 2; i <= sqrt; i++) {
      if (k % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) return k;

      k += 2;
    }
  }
}

const hash = new HashTableChain();
hash.setItem("hey", 5);
hash.setItem("hey", 10);
hash.setItem("big", 3);
hash.setItem("money", 1);

console.log(hash.getItem("hey"));
console.log(hash.getItem("big"));
console.log(hash.getItem("money"));
const a = [];
console.log(typeof false);
