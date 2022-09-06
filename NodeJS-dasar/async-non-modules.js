function samplePromise() {
  return Promise.resolve("Hi, Arisqi");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
