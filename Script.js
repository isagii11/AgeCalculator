document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthDay = parseInt(document.getElementById('birthDay').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const today = new Date();

    if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear) ||
        birthDay < 1 || birthDay > 31 ||
        birthMonth < 1 || birthMonth > 12 ||
        birthYear < 1900 || birthYear > today.getFullYear()) {
        alert("Please enter a valid birth date.");
        return;
    }

    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    
    const resultElement = document.getElementById('result');
    const ageOutput = document.getElementById('ageOutput');

    resultElement.style.opacity = 1; 
    ageOutput.textContent = `Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;

    ageOutput.style.animation = 'slideInResult 0.5s ease-out';
});
