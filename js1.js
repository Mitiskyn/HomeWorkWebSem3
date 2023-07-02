//Решение спомошью функиции
// const temperature = +prompt("Сколько градусов сейчас?");

// function degrees(temp){

//     return Math.floor (9/5) * temp
// }
// alert(`${temperature} это ${degrees(temperature)} градусов по цельсию`);

//Просто решение:xD

const temperature = +prompt("Сколько градусов сейчас?");

alert(`${temperature} градуса по цельсию это ${(Math.floor(temperature*9/5+32))}`);