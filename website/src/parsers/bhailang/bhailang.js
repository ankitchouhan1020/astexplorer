import pkg from 'tmp-bhai-lang-parser/package.json';

import defaultParserInterface from '../utils/defaultParserInterface';

const ID = 'bhailang';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage,
  locationProps: new Set(['position']),

  loadParser(callback) {
    require(['tmp-bhai-lang-parser'], parser => callback(parser.default));
  },

  parse(parser, code) {
    return parser.parse(code);
  },

  nodeToRange({ position }) {
    if (position) {
      return [position.start, position.end];
    }
  },

  opensByDefault(node, key) {
    return key === 'children';
  },
};