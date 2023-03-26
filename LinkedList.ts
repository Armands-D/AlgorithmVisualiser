class LLNode {
  item: string;
  next: LLNode | null;

  constructor(item: string){
    this.item = item;
    this.next = null;
  }

  getLastNode(): LLNode {
    if(this.next == null){return this;}
    return this.next.getLastNode();
  }
}

class LinkedList {
  head: LLNode | null;
  
  constructor(){
    this.head = null;
  }

  insertFront(item: string){
    if(this.head == null){
      this.head = new LLNode(item);
      return;
    }
    let node: LLNode = new LLNode(item)
    node.next = this.head;
    this.head = node;
  }

  insertBack(item: string){
    if(this.head == null){this.head = new LLNode(item);}
    let lastNode: LLNode | null = this.head.getLastNode();
    lastNode.next = new LLNode(item);
  }

  getLastNode(): LLNode | null{
    if(this.head == null){return null;}
    return this.head.getLastNode();
  }
}

let LL: LinkedList = new LinkedList();
console.log(LL);
LL.insertFront("1");
console.log(LL);
LL.insertFront("2");
console.log(LL);
LL.insertBack("3");
console.log(LL);
