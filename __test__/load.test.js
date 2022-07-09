const request = require('supertest');
const path = require('path');
const app = require(path.resolve('src/server/app.js'));

describe('test that root loaded', () => {
	test('it should response the GET method', () => {
		return request(app)
		.get('/')
		.then(response => {
			expect(response.statusCode).toBe(200);
		});
	});
});
describe('test that css loaded', () => {
	test('response should be 200', () => {
		return request(app)
		.get('/main.css')
		.then(response => {
			expect(response.statusCode).toBe(200);
		});
	});
});
describe('test that js loaded', () => {
	test('response should be 200', () => {
		return request(app)
		.get('/main.js')
		.then(response => {
			expect(response.statusCode).toBe(200);
		});
	});
});