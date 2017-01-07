import * as maps from 'source-map-support';
import Foo from './Foo';
maps.install();

const foo = {
	foo1: 1,
	foo2: 2
};

const bar = new Foo();
console.trace('Do i show the correct line number?');

// throw new Error("asdzs");
