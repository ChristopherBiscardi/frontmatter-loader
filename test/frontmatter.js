import { resolve } from 'path';
import { expect } from 'chai';
import webpack from 'webpack';
import config from './webpack.config';
import MemoryFS from 'memory-fs';

describe('frontmatter-loader', () => {
  let compiler, fs;

  beforeEach('Set up a clean filessystem', () => {
    compiler = webpack(config);
    fs = new MemoryFS();
    compiler.outputFileSystem = fs;

  it('should return exactly what it sent', (done) => {
    compiler.run((err, stats) => {
//      console.log(err, stats);
      console.log(fs.readdirSync(resolve(__dirname, 'build')))
      done();
    })
  });
  });
})
