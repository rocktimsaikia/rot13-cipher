import test from 'ava';
import rot13Cypher from '.';

test('main', t => {
	t.is(rot13Cypher('hello world'), 'uryyb jbeyq');
	t.is(rot13Cypher('uryyb jbeyq'), 'hello world');
	t.is(rot13Cypher('foo-bar'), 'sbb-one');
	t.is(rot13Cypher('foo123bar'), 'sbb123one');
	t.is(rot13Cypher('foo!@bar'), 'sbb!@one');
});
