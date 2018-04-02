describe('Main', function() {
  var arr;

  // roda uma vez, antes do bloco
  before(function() {
    console.log('before')
  });

  // roda uma vez, depois do bloco
  after(function() {
    console.log('after')
  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(function() {
    console.log('beforeEach')
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(function() {
    console.log('afterEach')
  });

  it('test1', function() {
    console.log('test1')
  });

  it('test2', function() {
    console.log('test2')
  });


});

// Output dos testes:
// before
// beforeEach
// test 1
// afterEach
// beforeEach
// test 2
// afterEach
// after