console.log(132);

let collator = new Intl.Collator();

console.log("ёжик" > "яблоко"); // true (ёжик больше, что неверно)
console.log(collator.compare("ёжик", "яблоко")); 

let collator1 = new Intl.Collator();

console.log(collator1.compare("ЁжиК", "ёжик")); // 1, разные

let collator2 = new Intl.Collator(undefined, {
  sensitivity: "accent"
});

console.log(collator2.compare("Ёжик", "ёжик")); // 0, одинаковые

let date = new Date(2014, 11, 31, 12, 30, 0);

let formatter = new Intl.DateTimeFormat("ru");
console.log(formatter.format(date)); // 31.12.2014

let formatter1 = new Intl.DateTimeFormat("en-US");
console.log(formatter1.format(date)); // 12/31/2014

let formatter2 = new Intl.DateTimeFormat("ru", {
  weekday: "long",
  year: 'numeric',
  month: "long",
  day: "numeric"
});

console.log(formatter2.format(date)); // среда, 31 декабря 2014 г. 

let formatter3 = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

console.log(formatter3.format(date)); // 12:30:00

let formatterNumber = new Intl.NumberFormat("ru");
console.log(formatterNumber.format(1234567890.123));

let formatterNumber1 = new Intl.NumberFormat("ru", {
  maximumSignificantDigits: 3
});

console.log(formatterNumber1.format(123456789.123)); 

let formatterCurrency = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "GBP"
});

console.log(formatterCurrency.format(1234.5));

let formatterCurrency1 = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2
});

console.log(formatterCurrency1.format(1234.5));

let str = "ёжик";

console.log(str.localeCompare("яблоко", "ru")); // -1

let date1 = new Date(2014, 11, 31, 12, 0);

console.log(date.toLocaleString("ru", {year: "numeric", month: "long"}));

