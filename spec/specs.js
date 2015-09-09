describe("pig_latin", function() {
  it("will combine add_ay and move_consonants for make input into pig latin", function() {
    expect(pig_latin("shirt")).to.equal("irtshay");
  });
});
