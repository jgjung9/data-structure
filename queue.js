// 자바스크립트를 이용한 큐 자료구조 구현
// 일반적으로 자바스크립트에서 큐는 배열을 통해 유사하게 동작하도록 조작가능
// 또는 투 포인터를 이용해 front(head) rear(tail)를 지정하여 추적해 가면서 구현가능하다.
// 공부차원으로 클래스를 통한 구현 연결리스트 방식을 사용

class Node {
  constructor() {
    this.data = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.head && !this.tail; // 두 값이 null인경우 빈 큐
  }

  enqueue(value) {
    if (this.isEmpty()) {
      const newNode = new Node();
      newNode.data = value;
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      const newNode = new Node();
      newNode.data = value;
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.error('Error! ❌ : queue is empty');
      return;
    }
    const result = this.head.data;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return result;
  }

  size() {
    return this.size;
  }
}

const q = new Queue();
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);

while (!q.isEmpty()) {
  console.log(q.dequeue());
}

q.dequeue();
