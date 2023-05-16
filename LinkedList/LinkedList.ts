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

function createElement(item: string){
  const el = document.createElement('div');
  el.setAttribute('id', 'll_element');
  const p = document.createElement('p');
  p.innerHTML = item;
  el.append(p);
  return el;
}

function add(){
  const ll_holder = document.getElementById('ll_holder');
  if(ll_holder ==  null){return;}
  ll_holder.append(createElement('item'))
  console.log(ll_holder);
}

function main(){
  let LL: LinkedList = new LinkedList();
  const ll_holder = document.getElementById('ll_holder');
}

main()
