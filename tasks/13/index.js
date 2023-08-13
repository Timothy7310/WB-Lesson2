class Shape {
  getArea() {
    return "вернуть площадь фигуры";
  }

  getPerimeter() {
    return "вернуть периметр фигуры";
  }
}

class Rectangle extends Shape {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
  }

  getArea() {
    return this.a * this.b;
  }

  getPerimeter() {
    return 2 * (this.a + this.b);
  }
}

class Triangle extends Shape {
  constructor(a) {
    super();
    this.a = a;
  }

  getArea() {
    return (Math.sqrt(3) / 4) * Math.pow(this.a, 2);
  }

  getPerimeter() {
    return 3 * this.a;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }

  getArea() {
    return this.r * Math.PI;
  }

  getPerimeter() {
    return 2 * Math.PI * this.r;
  }
}

// Пример
const rectangle = new Rectangle(5, 10);

const traingle = new Triangle(5);

const circle = new Circle(10);

console.log("Периметр прямоугольника", rectangle.getPerimeter());
console.log("Площадь прямоугольника", rectangle.getArea());

console.log("Периметр треугольника", traingle.getPerimeter());
console.log("Площадь треугольника", traingle.getArea());

console.log("Периметр круга", circle.getPerimeter());
console.log("Площадь круга", circle.getArea());
