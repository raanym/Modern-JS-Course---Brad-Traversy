function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  }
}


const names = ['raaneem', 'shabie', 'ali hussain', 'fathun'];

const iterator = nameIterator(names);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


function* generator() {
  yield 'raaneem';
  yield 'shabie';
  yield 'ali hussain';
  yield 'fathun';
}

const gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const ids = createIds();

console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());