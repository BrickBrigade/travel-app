import request from 'supertest';
import app from '../src/server/prodApp.js';


describe('test root path', () => {
	test("It should respond with status 200", () => {
		return request(app)
		.get("/")
		.then(response => {
			expect(response.statusCode).toBe(200);
		});
	});
	test("It should respond with ____", () => {
		return request(app)
		.get("/")
		.then(response => {
			expect(response.type).toBe('text/html');
		});
	});
});
describe('test geonames path', () => {
	test("It should respond with status 200", () => {
		return request(app)
		.get("/api/geo")
		.then(response => {
			expect(response.statusCode).toBe(200);
		});
	});
	test("It should respond with json", () => {
		return request(app)
		.get("/api/geo")
		.then(response => {
			expect(response.type).toBe('application/json');
		});
	});
});
describe('test current weather path', () => {
	test("It should respond with status 200", () => {
		return request(app)
		.get("/api/weather/current")
		.then(response => {
			expect(response.statusCode).toBe(200);
		});
	});
	test("It should respond with json", () => {
		return request(app)
		.get("/api/weather/current")
		.then(response => {
			expect(response.type).toBe('application/json');
		});
	});
});
describe('test future weather path', () => {
	test("It should respond with status 200", () => {
		return request(app)
		.get("/api/weather/future")
		.then(response => {
			expect(response.statusCode).toBe(200);
		});
	});
	test("It should respond with json", () => {
		return request(app)
		.get("/api/weather/future")
		.then(response => {
			expect(response.type).toBe('application/json');
		});
	});
});