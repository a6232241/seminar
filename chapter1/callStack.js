function foo() {
  console.log('Hi, I am foo');
}

function bar() {
  foo();
  console.log('Hi. I am bar');
}

bar();