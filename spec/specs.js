describe('pingPong', function() {
  it('returns an array of numbers from 1 to the chosen number in increments of 1', function() {
    expect(pingPong(10)).to.have.length(10);
  });

  it('will replace numbers divisible by 3 with "ping"', function() {
    expect(pingPong(4)).to.eql([1, 2, 'ping', 4]);
  });

  it('will replace numbers divisible by 5 with "pong"', function() {
    expect(pingPong(7)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7])
  })
});
