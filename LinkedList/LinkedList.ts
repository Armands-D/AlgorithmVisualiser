class LLNode {
  item: string
  next: LLNode | null

  constructor(item: string){
    this.item = item
    this.next = null
  }

  getLastNode(): LLNode {
    if(this.next == null){return this}
    return this.next.getLastNode()
  }
}

class LinkedList {
  head: LLNode | null
  
  constructor(){
    this.head = null
  }

  insertFront(item: string){
    if(this.head == null){
      this.head = new LLNode(item)
      return
    }
    let node: LLNode = new LLNode(item)
    node.next = this.head
    this.head = node
  }

  insertBack(item: string){
    if(this.head == null){this.head = new LLNode(item)}
    let lastNode: LLNode | null = this.head.getLastNode()
    lastNode.next = new LLNode(item)
  }

  getLastNode(): LLNode | null{
    if(this.head == null){return null}
    return this.head.getLastNode()
  }
}

class LLDomController {
  linked_list : LinkedList
  count: number = 0

  constructor(){
    this.linked_list = new LinkedList()
  }

  createLLElement() {
    const ll_element = document.createElement('div')
    ll_element.setAttribute('id', 'll_element')
    const p = document.createElement('p')
    p.innerHTML = 'item' + this.count
    this.count += 1
    ll_element.append(p)
    return ll_element
  }

  add(): undefined {
    const ll_holder = document.getElementById('ll_holder')
    if(ll_holder ==  null){
      console.log('Err: ll_holder is null')
      return
    }
    const ll_element = this.createLLElement()
    ll_holder.append(ll_element)
  }

  remove(): undefined {
    const ll_holder = document.getElementById('ll_holder')
    if(! ll_holder){
      console.log('Err: ll_holder is null')
      return

    }

    if(! ll_holder.hasChildNodes()){
      console.log('War: ll_holder has no children')
      return
    }

    const ll_element_count = ll_holder.children.length
    ll_holder.removeChild(ll_holder.children[ll_element_count - 1])

  }

}


function main(){
  let LL: LLDomController = new LLDomController()
  let add_btn = document.getElementById('add_element')
  if(add_btn){
    add_btn.onclick = () => LL.add()
  }
  let remove_btn = document.getElementById('del_element')
  if(remove_btn){
    remove_btn.onclick = () => LL.remove()
  }
}

main()

