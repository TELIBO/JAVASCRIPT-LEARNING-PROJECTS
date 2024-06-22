function fetchFlag() {
    const countryName = document.getElementById('countryName').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    // Clear previous result
    resultDiv.innerHTML = '';

    if (countryName === '') {
        resultDiv.innerHTML = 'Please enter a country name.';
        return;
    }

    fetch(`https://restcountries.com/v3.1/all`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch countries data');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const countries = data.reduce((acc, country) => {
                console.log(country);
                acc[country.name.common.toLowerCase()] = country;
                return acc;
            }, {});
            if (countries[countryName]) {
                const country = countries[countryName];
                const flagUrl = country.flags.png;
                resultDiv.innerHTML = `
                    <h2>${country.name.common}</h2>
                    <img src="${flagUrl}" alt="Flag of ${country.name.common}">
                `;
            } else {
                resultDiv.innerHTML = 'Country not found. Please try again.';
            }
        })
        .catch(error => {
            resultDiv.innerHTML = 'An error occurred. Please try again.';
            console.error(error);
        });
}
