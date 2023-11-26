class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        let result = this.template;
        for (let key in dictionary) {
            // Create a regular expression pattern for the placeholder
            let pattern = new RegExp(`{{${key}}}`, 'g');
            result = result.replace(pattern, dictionary[key]);
        }

        // For any placeholders that weren't replaced, replace them with an empty string
        result = result.replace(/{{\w+}}/g, "");

        return result;
    }
}

// Test Cases
var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new TemplateProcessor(template);

var dictionary = {month: 'July', day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary);
console.assert(str === 'My favorite month is July but not the day 1 or the year 2016', 'Test Case 1 Failed');

var dictionary2 = {day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary2);
console.assert(str === 'My favorite month is but not the day 1 or the year 2016', 'Test Case 2 Failed');
