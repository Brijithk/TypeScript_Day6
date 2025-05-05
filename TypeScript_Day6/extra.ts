function printLength<T extends { length: number }>(item: T) {
    console.log(item.length);
  }
  
  printLength("Hello");             // ✅ string has length
  printLength([1, 2, 3]);           // ✅ array has length
  printLength({ length: 10 });      // ✅ object with length property
  // printLength(123);              // ❌ Error: number doesn't have length

  function identity<T extends string | number>(value: T): T {
    return value;
  }
  
  identity("hello"); // ✅
  identity(42);      // ✅

  
  interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
  }
  
  // Use with a string type
  const stringResponse: ApiResponse<string> = {
    status: 200,
    message: "Success",
    data: "This is a string data"
  };
  
  // Use with an object type
  interface User {
    id: number;
    name: string;
  }
  
  const userResponse: ApiResponse<User> = {
    status: 200,
    message: "User fetched",
    data: { id: 1, name: "John" }
  };

  class Box<T> {
    private value: T;
  
    constructor(value: T) {
      this.value = value;
    }
  
    getValue(): T {
      return this.value;
    }
  
    setValue(value: T): void {
      this.value = value;
    }
  }
  
  // Use with a number
  const numberBox = new Box<number>(100);
  console.log(numberBox.getValue()); // 100
  
  // Use with a string
  const stringBox = new Box<string>("Hello");
  console.log(stringBox.getValue()); // "Hello"
  