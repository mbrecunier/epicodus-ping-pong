describe('pingPong', function() {
  it('returns an array of numbers from 1 to the chosen number in increments of 1', function() {
    expect(pingPong(10)).to.have.length(10);
  });

  it('will replace numbers divisible by 3 with "ping"', function() {
    expect((7)).to.eql([1, 2, 'ping', 4, 5, 'ping', 7]);
  });
});
