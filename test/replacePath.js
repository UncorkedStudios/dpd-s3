var assert = require("assert");

var fullBucketPath = '/full/bucket/path';

var replacePath = function(){
  var path = '';
  for(var i in Array.prototype.slice.call(arguments)) {
    var val = arguments[i];
    if(typeof val==='string'){
      if(val.slice(0,1)==='/' && path.slice(-1)==='/'){
        path += val.slice(1);
      }else if(val.slice(0,1)==='/' || path.slice(-1)==='/'){
        path += val;
      }else{
        path += '/'+val;
      }
    }
  }
  if(path !== ''){
    console.log("replaced bucket path: "+path);
    fullBucketPath = path;
  }
  return fullBucketPath;
};

describe('replacePath()', function(){
  it('should return replaced path and fullBucketPath changed', function(){
    var expected = '/replace/path';
    assert.equal(expected, replacePath(expected));
    assert.equal(expected, fullBucketPath);
  })

  it('should work with string only', function(){
    var expected = '/no/change/path';
    fullBucketPath = expected;
    assert.equal(expected, replacePath({}));
    assert.equal(expected, fullBucketPath);
    assert.equal('/replace/path', replacePath('/replace', {}, '/path'));
  })

  it('should pass many args', function(){
    var expected = '/foo/bar/path';
    assert.equal(expected, replacePath('foo', 'bar', 'path'));
    assert.equal(expected, replacePath('/foo', 'bar/', '/path'));
    assert.equal(expected, replacePath('/foo/', 'bar', '/path'));
  })
})
