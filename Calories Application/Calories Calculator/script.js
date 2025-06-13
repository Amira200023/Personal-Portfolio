function calculateTDEE() {
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const sex = document.getElementById('gen').value;
    const activity = document.getElementById('activity').value;
    let bmr;

    if (sex === 'barbat') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (sex === 'femeie') {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let tdee;
    if (activity === 'sedentar') {
        tdee = bmr * 1.2;
    } else if (activity === 'usoara') {
        tdee = bmr * 1.375;
    } else if (activity === 'moderata') {
        tdee = bmr * 1.55;
    } else if (activity === 'intensa') {
        tdee = bmr * 1.725;
    } else if (activity === 'foarte-intensa') {
        tdee = bmr * 1.9;
    }

    document.getElementById('result').innerText = `Caloriile necesare zilnic sunt: ${tdee.toFixed(2)} calorii/zi.`;
}