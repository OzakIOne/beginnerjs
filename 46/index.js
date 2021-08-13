const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const students = [
  {
    id: '11ce',
    first_name: 'Dall',
    last_name: 'Puckring',
  },
  {
    id: '2958',
    first_name: 'Margarete',
    last_name: 'Brandi',
  },
  {
    id: '565a',
    first_name: 'Bendicty',
    last_name: 'Woodage',
  },
  {
    id: '3a16',
    first_name: 'Micki',
    last_name: 'Mattes',
  },
  {
    id: 'f396',
    first_name: 'Flory',
    last_name: 'Gladeche',
  },
  {
    id: 'de5f',
    first_name: 'Jamill',
    last_name: 'Emilien',
  },
  {
    id: '54cb',
    first_name: 'Brett',
    last_name: 'Aizikowitz',
  },
  {
    id: '9135',
    first_name: 'Lorry',
    last_name: 'Smallman',
  },
  {
    id: '978f',
    first_name: 'Gilly',
    last_name: 'Flott',
  },
];

const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley',
    },
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep',
    },
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer',
    },
  },
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const inventory = [
  { type: 'shirt', price: 4000 },
  { type: 'pants', price: 4532 },
  { type: 'socks', price: 234 },
  { type: 'shirt', price: 2343 },
  { type: 'pants', price: 2343 },
  { type: 'socks', price: 542 },
  { type: 'pants', price: 123 },
];

const logTopping = (topping, index, ogArr) => {
  const nextTopping = ogArr[index + 1];
  const prevTopping = ogArr[index - 1];
  console.log('curr:', topping);
  prevTopping ? console.log('prev:', prevTopping) : null;
  nextTopping ? console.log('next:', nextTopping) : null;
  index === ogArr.length - 1
    ? console.log('Goodbye')
    : console.log('Getting the next Topping');
  console.log('---------------');
};

toppings.forEach(logTopping);

const addArms = (face) => `👋 ${face} 👋`;
const bosify = (name) => `${name} Bos`;
const capitalize = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;
console.log(faces.map(addArms));
console.log(['wes', 'kait', 'poppy'].map(capitalize).map(bosify));
console.log(orderTotals.map((total) => total * 1.13));

const cleanPeople = people.map((person) => {
  const bDay = new Date(person.birthday).getTime();
  const now = Date.now();
  const age = Math.floor((now - bDay) / 31536000000);
  return {
    age,
    name: `${person.names.first} ${person.names.last}`,
  };
});

console.log('cleanPeople:', cleanPeople);
console.log(cleanPeople.filter((person) => person.age > 40));

const findById = (id) => (isStudent = (student) => student.id === id);
const findByProp = (prop, propWeAreLookingFor) =>
  (isStudent = (student) => student[prop] === propWeAreLookingFor);

console.log(students.find(findByProp('id', '565a')));
console.log(students.find(findByProp('first_name', 'Micki')));

const tallyNumbers = (tally, currentTotal) => {
  console.log(`The current tally is ${tally}`);
  console.log(`The current total is ${currentTotal}`);
  console.log('---------');
  return tally + currentTotal;
};
orderTotals.reduce(tallyNumbers, 0);
const inventoryReducer = (totals, item) => {
  console.log(`Looping over ${item.type}`);
  totals[item.type] = totals[item.type] + 1 || 1;
  return totals;
};

console.log(inventory.reduce(inventoryReducer, {}));
console.log(inventory.reduce((acc, item) => acc + item.price, 0));
