describe('pingPong', function() {
  it('returns an array of numbers from 1 to the chosen number in increments of 1', function() {
    expect(pingPong(10)).to.have.length(10);
  });

  it('will replace numbers divisible by 3 with "ping"', function() {
    expect(pingPong(4)).to.eql([1, 2, 'ping', 4]);
  });

  it('will replace numbers divisible by 5 with "pong"', function() {
    expect(pingPong(7)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7])
  });

  it('will replace numbers divisible by both 3 and 5 with "pingpong"', function() {
    expect(pingPong(15)).to.eql([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping', 13, 14, 'pingpong'])
  });

  it('will ignore blank entries', function() {
    expect(pingPong()).to.eql([]);
  });

  it('will ignore numbers after a decimal point', function() {
    expect(pingPong(3.9)).to.eql([1, 2, 'ping']);
  });

  it('will count from -1 to the userNumber if userNumber is negative', function() {
    expect(pingPong(-6)).to.eql([-1, -2, 'ping', -4, 'pong']);
  });
});
