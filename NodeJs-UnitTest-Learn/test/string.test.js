test("string", () => {
  const name = "Arisqi Setyawan";

  expect(name).toBe("Arisqi Setyawan");
  expect(name).toMatch(/awan/);
});
