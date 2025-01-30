# Advanced Decorators and Generics in TypeScript

This repo demonstrates the use of advanced decorators and generics in TypeScript.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)


## Introduction
This project explores advanced concepts in TypeScript, focusing on decorators and generics. Decorators provide a way to add annotations and a meta-programming syntax for class declarations and members. Generics allow for the creation of reusable components that work with a variety of data types.

## Installation
To install the dependencies, run:
```bash
bun install
```

## Usage

To execute the TypeScript file, run:
```bash
bun --watch name-of-file.ts
```

## Examples
### Decorators
```typescript
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class Example {
  @Log
  sayHello(name: string) {
    return `Hello, ${name}!`;
  }
}
```

### Generics
```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
```
