typeof undefined === 'undefined'; // true
typeof true === 'boolean'; // true
typeof 42 === 'number'; // true
typeof '42' === 'string'; // true
typeof { life: 42 } === 'object'; // true

// ES6 부터 추가
typeof Symbol() === 'symbol'; // true

// null은 특이한 케이스
typeof null === 'object'; // true