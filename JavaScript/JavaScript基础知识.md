# JavaScript基本语法

> 按照相关JS语法去操作页面中动元素，有时还要操作浏览器里面的一些功能

- EMCAScript3/5/6...：JS的语法规范（变量、数据类型、操作语句等等）
- DOM（document object model）：文档对象模型，提供一些JS的属性和方法，用来操作页面中的DOM元素
- BOM（browser object model）：浏览器对象模型，提供一些JS动属性和方法，用来操作浏览器

## 变量 variable

> 可变的量，变量就是一个符号，用来代表不同值的东西

### 定义变量

```javascript
//es3
var first = 5;

//es6
let second = 10;

const thrid = 20; //不能被修改

//创建函数也相当于在创建变量
function fun() {}
//创建类也相当于创建变量
class A {}
//ES6的模板导入也可以创建变量
import B from './B.js';
//Symbol创建唯一值
let num = Symbol(100);
let aount = Symbol(100);
console.log(num == aount); //false

```

#### 总结

- var 会发生变量提升，其他声明方式不会

  ```javascript
  console.log(a); //undefined
  var a = 5;
  console.log(a); //5
  ```

  上面代码等价于：

  ```javascript
  var a;
  console.log(a); //undefined
  a = 5;
  console.log(a); //5
  ```

  javascript引擎会把所有通过var声明的变量进行变量提升，即对变量声明的语句提升到代码头部

- Symbol 声明的变量是唯一的，即使里面的值是一样的，他们在内存中的地址是不一样的

## 数据类型

- 原始数据类型（primitive type）
  - number
  - string
  - boolean
  - bigInt
  - symbol
  - null
  - undefined
- 合成数据类型（complex type）
  - object
  - function