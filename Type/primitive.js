typeof undefined === 'undefined'; // true
typeof true === 'boolean'; // true
typeof 42 === 'number'; // true
typeof '42' === 'string'; // true
typeof { life: 42 } === 'object'; // true

// ES6 부터 추가됨
typeof Symbol() === 'symbol'; // true

// null은 특이한 케이스
typeof null === 'object'; // true

// null은 false나 다름 없는 유일한 원시값(강제변환 참고)지만,
// 타입은 'object'인 특이한 존재다.
var a = null;
(!a && typeof a === 'object'); // true

// function은 최상위 레벨의 내장 타입처럼 보이지만
// 명세를 보면 실제로 object의 하위 타입이다.
// 함수는 '호출 가능한 객체(callable object)'라고 명시되어 있다.
// 객체라서 유용한 점은 함수에 프로퍼티를 둘 수 있다는 것이다.
typeof function b(){} === 'function'; // true

// 함수의 인자 개수는 함수 객체의 length 프로퍼티로 알 수 있다.
function c(one, two) {

}
c.length; // 2

// 배열은 어떤가? 독특한 타입일까?
typeof [1,2,3] === 'object' // true
// 객체다. 배열은 숫자 인덱스를 가지며,
// length 프로퍼티가 자동으로 관리되는 등의 추가 특성을 지닌,
// 객체의 '하위 타입'이라 할 수 있다.