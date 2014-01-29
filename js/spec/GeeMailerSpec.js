describe ("test mail-generator.js", function(){
	"use strict";

	it("window.geemails should not be null on page load and have length greater than 0", function(){
			expect(window.geemails).not.toBe("undefined");
			expect(window.geemails.length).toBeGreaterThan(0);
	});

	it("getRandomDate() should generate different dates", function(){
		var firstDateSample = getRandomDate();
		var secondDateSample = getRandomDate();
		var thirdDateSample = getRandomDate();

		expect(firstDateSample).not.toEqual(secondDateSample);
		expect(secondDateSample).not.toEqual(thirdDateSample);
		expect(thirdDateSample).not.toEqual(
			firstDateSample);
	});

	it("generateMessage(date) should give back message in object notation and not be null", function(){
		var message = generateMessage(new Date);
		expect(message).toBeDefined();
		expect(message["date"]).toBeDefined();
		expect(message["subject"]).toBeDefined();
		expect(message["sender"]).toBeDefined();
		expect(message["body"]).toBeDefined();
	});

	it("getNewMessage() should give back message in object notation and not be null", function(){
		var message = getNewMessage();
		expect(message).toBeDefined();
		expect(message["date"]).toBeDefined();
		expect(message["subject"]).toBeDefined();
		expect(message["sender"]).toBeDefined();
		expect(message["body"]).toBeDefined();
	});
});

xdescribe("test spy functionality on getRandomElement", function(){
	var spy = window.getRandomElement(subject);
	spyOn(window, 'getRandomElement');

	it("tracks that getRandomElement has been called", function(){
		expect(spy).toHaveBeenCalled();
	});
});
