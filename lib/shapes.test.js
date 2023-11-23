// Jest tests for shapes
const { Triangle, Circle, Square } = require('./lib/shapes');

describe('Triangle', () => {
    test('render() should return the correct SVG', () => {
      const triangle = new Triangle('red');
      expect(triangle.render()).toBe(`<svg height="200" width="300">
                <polygon points="150,0 0,200 300,200" fill="red" />
              </svg>`);
    });
  });
  
  describe('Circle', () => {
    test('render() should return the correct SVG', () => {
      const circle = new Circle('green');
      expect(circle.render()).toBe(`<svg height="200" width="300">
                <circle cx="150" cy="100" r="100" fill="green" />
              </svg>`);
    });
  });
  
  describe('Square', () => {
    test('render() should return the correct SVG', () => {
      const square = new Square('blue');
      expect(square.render()).toBe(`<svg height="200" width="300">
                <rect width="300" height="200" fill="blue" />
              </svg>`);
    });
  });
  