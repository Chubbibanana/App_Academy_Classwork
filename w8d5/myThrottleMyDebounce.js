Function.prototype.myThrottle = function(interval) {
  let tooSoon = false;
  return (...args) => {
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(()=> {tooSoon = false}, interval);
      this(...args)
    }
  }
}
// Test Code
// class Neuron {
//   fire() {
//     console.log("Firing!");
//   }
// }

// const neuron = new Neuron();
// // When we create a new Neuron,
// // we can call #fire as frequently as we want

// // The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//   neuron.fire();
// }, 1000);

Function.prototype.myDebounce = function(interval) {
  let timeout;
  return (...args) => {
    let origFunc = () => {
      this(...args);
    }
    // set timeout, invoke only if timeout has passed
    clearTimeout(timeout); // reset old timeout on every .type
    timeout = setTimeout(origFunc, interval); // if interval passes, call origFunc
  }
}

class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};

// queryForHelloWorld();
searchBar.search = searchBar.search.myDebounce(500); // only after stop typing for 500 ms, searchBar.search has access to previous
// timeout variable 
queryForHelloWorld(); // should only see searching for hello world
