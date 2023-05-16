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

class LLDomController {
  linked_list : LinkedList;

  constructor(){
    this.linked_list = new LinkedList();
  }

  createLLElement(item: string){
    const el = document.createElement('div');
    el.setAttribute('id', 'll_element');
    const p = document.createElement('p');
    p.innerHTML = item;
    el.append(p);
    return el;
  }

  ex(){
    console.console.log('1');
    
  }
  
  add(){
    const ll_holder = document.getElementById('ll_holder');
    if(ll_holder ==  null){
      console.log('Err: ll_holder is null');
      return;
    }
    this.createLLElement('item')
    ll_holder.append(this.createLLElement('item'));
  }
}


function main(){
  let LL: LLDomController = new LLDomController();
  document.getElementById('add_element').addEventListener('click', LL.add);
}

main()
