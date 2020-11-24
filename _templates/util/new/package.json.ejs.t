---
to: packages/<%= name %>/package.json
---
{
  "name": "@himynameisdave/utils.<%= name %>",
  "description": "<%= description %>",
  "version": "0.1.0",
  "main": "./index.js",
  "types": "./index.d.ts",
  "files": [
    "index.js",
    "index.d.ts"
  ],
  "scripts": {
    "build": "npm run clean && npm run compile",
    "clean": "del index.js index.d.ts",
    "compile": "tsc index.ts --declaration"
  },
  "dependencies": {},
  "devDependencies": {
    "del-cli": "3.0.1"
  },
  "publishConfig": {
    "access": "public"
  },
  "author": {
    "name": "Dave Lunny",
    "email": "d@velunny.com",
    "url": "https://himynameisdave.com"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/himynameisdave/utils.git"
  },
  "homepage": "https://github.com/himynameisdave/utils/tree/master/packages/<%= name %>",
  "license": "MIT",
  "sideEffects": false,
  "private": false
}
