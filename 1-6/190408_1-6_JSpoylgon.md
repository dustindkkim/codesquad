# JS학습

### 변수선언방법
var, let(ES6), const(ES6)
-> let과 const가 ES6추가된 배경을 이해해야함.
-> var 또한 어떤 점이 단점인지. 

### type
type체크를 어떻게 하는 지 잘 알아야함.  
타입체크를 하는 표준적인 방법이 없다.(배열도 객체도 같은 object로 나온다. 이런 점을 어떻게 보완할 지 공부해야함.)      
타입이 실행될 때 결정된다.  

### Scope


### 반복문
while, switch, for 등 다양한 반복문 사용방법이 있는 데 일단 편한 것으로 하고 다양한 경험을 하면서 상황에 맞는 반복문을 알아가자.


# 디버깅
공유받은 url을 실행해서 에러메세지를 다 기록해보자.  
에러메세지가 나오면 바로 코드를 수정하거나 콘솔을 켜서 디버깅을 하는 데 큰 프로젝트나 복잡한 코드는 그렇게 하면 안된다.

## 과제

`main.js`

```const sum = require("util");

function runProgram(arr) {
    const result = sum(arr);
    return `result is ${result}`;
}

const result = runProgram([undefined, 1,2,3,4,5,-1,"3"]);
console.log(result); //result is 14
```  


`util.js`

```(function callModuleChecker(){
    result = new Date();
    console.log("WELCOME UTIL MODULE : " + result);
})();

module.exports.sum = (arr) => {
    result = result || 0;

    for (const i = 0; i < arr.length; i++) {
        if (typeof arr !== undefined) continue;
        result += arr[i]
    }

    return result;
}
```

## 디버깅 순서

1. `require("util");` @main.js:1
   -> 패스 지정이 이상하다. `require("./util");` 로 수정

2. Error명 : `TypeError : sum is not a function` 
   -> `const sum ~~~` @main.js:1 -> `sum`을 제대로 가져오지 못함.  
   -> `sum`을 `util`로 변경

3. Error명 : `Assignment to constant variable.`
   -> `

4. reference Error 
   ![](http://pyrasis.com/assets/images/GoForTheReallyImpatientUnit01/1.png)