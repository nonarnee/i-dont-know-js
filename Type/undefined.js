var a;
typeof a; // 'undefined'

var b = 42;
var c;

b = c;

typeof b; // 'undefined'
typeof c; // 'undefined'
// undefined 와 undeclared 를 동의어로 생각하기 쉬운데,
// 자바스크립트에서 둘은 완전히 다른 개념이다.
// undefined 는 접근 가능한 스코프에 변수가 선언되었으나
// 현재 아무런 값도 할당되지 않은 상태를 가리키며,
// undeclared 는 접근 가능한 스코프에 변수 자체가
// 선언조차 되지 않은 상태를 의미한다.

var c;
c; // undefined
d; // ReferenceError: d is not defined
// is not defined 는 undefined로 해석할 수 있지만
// is not found, is not declared의 의미로 해석하자.

var e;
typeof e; // 'undefined'
typeof f; // 'undefined'
// 선언되지 않은 변수도 typeof하면 'undefined'로 나온다.
// b는 분명 선언조차 하지 않은 변수인데 typeof b를 해도 브라우저는 오류 처리를 하지 않는다.
// 이것이 typeof만의 독특한 safety guard이다.
