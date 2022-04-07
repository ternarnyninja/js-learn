let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let animalsCollator = new Intl.Collator();
animals.sort((a, b) => animalsCollator.compare(a, b));

console.log(animals);