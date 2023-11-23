// Exports `Triangle`, `Square`, and `Circle` classes.

class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('render() method must be implemented');
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<svg height="200" width="300">
                <polygon points="150,0 0,200 300,200" fill="${this.color}" />
              </svg>`;
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<svg height="200" width="300">
                <circle cx="150" cy="100" r="100" fill="${this.color}" />
              </svg>`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<svg height="200" width="300">
                <rect width="300" height="200" fill="${this.color}" />
              </svg>`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };