import { getAuthority } from '../1-user-authority';
var assert = require('assert');
describe('#getAuthority()', function() {
  it('输入空值应该得到 000', function() {
    assert.equal(getAuthority(0), '000');
  });
  it('输入 7 应该得到 111', function() {
    assert.equal(getAuthority(7), '111');
  });
  it('输入 4 应该得到 001', function() {
    assert.equal(getAuthority(4), '001');
  });
  it('输入 2 应该得到 010', function() {
    assert.equal(getAuthority(2), '010');
  });
  it('输入 1 应该得到 100', function() {
    assert.equal(getAuthority(1), '100');
  });
});
