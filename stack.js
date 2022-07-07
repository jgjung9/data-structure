// 자바스크립트를 이용한 스택 자료구조 구현
// 일반적으로 배열을 통해 스택처럼 사용할 수 있으나
// 공부 차원으로 클래스를 통한 구현

class Stack {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    this.data.push(value);
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      console.error('Error! ❌ : stack is empty');
      return;
    }
    const result = this.data.pop();
    this.size--;
    return result;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(3);
stack.push(4);
stack.push(1);

while (!stack.isEmpty()) {
  console.log(stack.pop());
}

stack.pop();
