test("array simple", () => {
  const names = ["Arisqi", "Setyawan"];
  expect(names).toEqual(["Arisqi", "Setyawan"]);
  expect(names).toContain("Arisqi");
});

test("array object", () => {
  const persons = [
    {
      name: "Arisqi",
    },
    {
      name: "Budi",
    },
  ];
  expect(persons).toContainEqual({
    name: "Arisqi",
  });
});
