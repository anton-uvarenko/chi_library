let books = ['Harry Potter', 'Witcher', '1984'];
console.log(books);

books.sort();
console.log(books);

books.pop();
console.log(books);

books.unshift('Game of thrones');
console.log(books);

books.shift();
console.log(books);

books.splice(1, 1, 'Hobbit');
console.log(books);

console.log(books.includes('Harry Potter'));