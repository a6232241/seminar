const getSyncFoo = () => {
  let array = [];
  for(let i = 0; i <= 99999999; i++) {
    array.push(i);
  }
  console.log('after some time')
}

const getSyncBar = () => {
  let array = [];
  const timestamp = Date.now();
  while(timestamp + 2000 >=  Date.now()) {
    array.push(Date.now());
  }
  console.log('after 2 second')
}

const getSyncQux = () => {
  let array = [];
  const timestamp = Date.now();
  while(timestamp + 3000 >=  Date.now()) {
    array.push(Date.now());
  }
  console.log('after 3 second')
}

const onClick = () => {
  getSyncFoo();
  getSyncBar();
  getSyncQux();

  console.log('foo');
  console.log('bar');
  console.log('Qux');
  console.log('Finally my turn!')
}
