describe("pig_latin", function() {
  it("will take the first letter and move it to the end of the word.", function() {
    expect(pig_latin("word")).to.equal("ordw");
  });
});
