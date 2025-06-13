// app.js
const apiKey = 'PxaleGyfBa5svquh5yGZug==xz1wevvhHKXjGKWh'; // Înlocuiește cu cheia ta API reală
const button = document.getElementById('getInfo');
const input = document.getElementById('foodInput');
const resultDiv = document.getElementById('result');

button.addEventListener('click', () => {
    const query = input.value;
    const url = `https://api.calorieninjas.com/v1/nutrition?query=${query}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.items && data.items.length > 0) {
            const food = data.items[0];
            resultDiv.innerHTML = `
                <h2>${food.name}</h2>
                <p>Calories: ${food.calories}</p>
                <p>Protein: ${food.protein_g} g</p>
                <p>Fat: ${food.fat_total_g} g</p>
                <p>Carbohydrates: ${food.carbohydrates_total_g} g</p>
            `;
        } else {
            resultDiv.innerHTML = '<p>No data found. Please try another food item.</p>';
        }
    })
    .catch(error => {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
