Tinytest.add('Tinytest works', test => {
  test.equal(true, true);
});

Tinytest.add('MTT object OK', test => {
  test.equal(typeof MTT, "object");
});

Tinytest.add('MTT#fillIn OK', test => {
  test.equal(typeof MTT.fillIn, "function");
});

Tinytest.add('MTT#check OK', test => {
  test.equal(typeof MTT.check, "function");
});

Tinytest.add('MTT#submit OK', test => {
  test.equal(typeof MTT.submit, "function");
});

Tinytest.add('MTT#getValidity OK', test => {
  test.equal(typeof MTT.getValidity, "function");
});

Tinytest.skip('#fillIn', test => {
  // TODO
});

Tinytest.skip('#check', test => {
  // TODO
});

Tinytest.skip('#submit', test => {
  // TODO
});

Tinytest.skip('#getValidity', test => {
  // TODO
});
