class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('nice', []),
  new Comment('smile', []),
  new Comment('good', [])
]
const tree = new Comment('great', children);

const values = [];
for (let value of tree) {
  values.push(value);
}


const testingTeam = {
  lead: 'meina',
  tester: 'sarah',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
}

const names = [];
for(let name of engineeringTeam) {
  names.push(name);
}


function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const geng = colors();
geng.next();



function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield 'money';

  // walking to laundry place
  const cleanClothes = yield 'laundry';

  // walking back home
  return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen = shopping();

// leaving our house
gen.next();

// walked into the store

// walking up and down the aisles..

// purchase our stuff

// leaving the store with groceries
gen.next('groceries');
gen.next('clean clothes');