function samplePromise() {
  return Promise.resolve("Hi, Arisqi");
}

const name = await samplePromise();
console.info(name);
