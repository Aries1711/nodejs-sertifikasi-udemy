test("test toBe", () => {
  const name = "Aris";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Aris");
});

test("test toEqual", () => {
  let person = { id: "aris" };
  Object.assign(person, { name: "Aris" });

  expect(person).toEqual({ id: "aris", name: "Aris" });
});
