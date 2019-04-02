## 1-2 페어프로그래밍



### Lisp 프로그래밍

```
// 이름 변수 설정
(defvar name (read))

//함수 만들기
(defun hello(name)
    (format t "Hello ~a! ~%" name)
)

//출력
(hello name)
```



### JavaScript 배열 forEach 사용해보기



배열의 메서드 중 하나인 forEach메서드이다.

배열 전체를 돌며 해당 배열의 요소를 직접 어떤 작업을 수행하고 싶을 때 매우 적합한 메서드이다.



배열 전체를 돌 때, 요소마다 콜백함수를 실행하며 이 콜백함수의 인자는 다른 모든 메서드와 동일한 순서의 인자를 갖는다.

첫번째 인자는 현재 배열 요소의 값이고, 

두번째 인자는 현재 배열요소의 위치(index)이며 0부터 시작한다.

세번째 인자는 현재 돌고 있는 배열 자체를 가리킨다.

```
//원본 배열
var testArray = ["aaa", "bbb", "ccc", "ddd"];

//배열의 모든 요소에 EDIT라는 문자열을 더하기
//메서드 수행 후 리턴값은 undefined
var callback = function (item, index, array) {
	array[index] = item + "EDIT";
}
testArray.forEach(callback);

//메서드 수행 후 원본 배열
console.log(testArray);
["aaaEDIT", "bbbEDIT", "cccEDIT", "dddEDIT"]
```











