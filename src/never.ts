export {};

function error(message: string): never {
  throw new Error(message);
}

try {　
  error('test');
  // console.log({ result });
} catch(error) {
  console.log({ error })
}

let foo:void = undefined;
let bar:never = error('only me!');
