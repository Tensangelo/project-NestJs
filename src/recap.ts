// const myName = 'Angelo';
// const age = 22;

const suma = (a: number, b: number) => {
  return a + b;
};
suma(9, 10);

class Usuario {
  constructor(private age: number, private name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const Angelo = new Usuario(22, 'Angelo');
Angelo.getSummary();
