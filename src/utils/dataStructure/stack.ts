export interface IStack<T> {
  push(e: T): void
  pop(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  size(): number
  clear(): void
  toString(): string
}

export class Stack<T> implements IStack<T> {
  private count: number
  private items: any

  constructor() {
    this.count = 0
    this.items = {}
  }

  push(e: T) {
    this.items[this.count] = e
    this.count++
  }

  pop() {
    if (this.isEmpty())
      return undefined
    this.count--
    const ans = this.items[this.count]
    delete this.items[this.count]
    return ans
  }

  isEmpty() {
    return this.count === 0
  }

  peek(): T | undefined {
    if (this.isEmpty())
      return undefined
    return this.items[this.items[this.count - 1]]
  }

  size(): number {
    return this.count
  }

  clear(): void {
    this.items = {}
    this.count = 0
  }

  toString(): string {
    if (this.isEmpty())
      return ''
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++)
      objString = `${objString},${this.items[i]}`
    return objString
  }
}
