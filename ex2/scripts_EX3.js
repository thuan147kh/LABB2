document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    // Prevent form from actually submitting
    event.preventDefault();

    // Get the birthdate from the input field
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date();

    // Calculate the age
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }

    // Display the age
    document.getElementById('age').textContent = age;
});
