describe('pingPong', function() {
  it('returns an array of numbers counting by 1 from 1 to the chosen number', function() {
    expect(pingPong(10)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
