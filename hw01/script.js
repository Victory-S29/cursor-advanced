// 1
const FIRST = 15.678, SECOND = 123.965, THIRD = 90.2345;
const STR1 = "Найбільше число: " + Math.max(FIRST, SECOND, THIRD) + " ";
const STR2 = "Найменше число: " + Math.min(FIRST, SECOND, THIRD) + " ";
console.log(STR1);
console.log(STR2); 

const SUM = FIRST + SECOND + THIRD;
const STR3 = `Сума товарів: ${SUM} `;
console.log(STR3);

const SUM_ROUND_FLOOR = Math.floor(FIRST) + Math.floor(SECOND) + Math.floor(THIRD);
const STR4 = `Сума округлених цін: ${SUM_ROUND_FLOOR} `;
console.log(STR4);

const SUM_ROUND_CEIL = Math.ceil(SUM / 100) * 100;
const STR5 = `Округлена сума до сотень: ${SUM_ROUND_CEIL} `;
console.log(STR5);

const SUM_ROUND_BOOLEAN = Boolean(SUM_ROUND_FLOOR % 2 === 0);
const STR6 = `Округлена сума в меншу сторону: ${SUM_ROUND_FLOOR} `;
const STR7 = `Округлена сума є: ${SUM_ROUND_BOOLEAN ? "парною" : "непарною"} `;
console.log(STR6);
console.log(STR7);

const STR8 = `Решта: ${500 - SUM} `;
console.log(`Решта: ${500 - SUM}`);

const STR9 = `Середнє значення: ${(SUM / 3).toFixed(2)} `;
console.log(STR9);

// 2
const DISCOUNT = Math.round(((Math.floor((Math.random() * (SUM + 1)))) / 100) * SUM);
const STR10 = `Знижка: ${DISCOUNT} `;
const STR11 = `Сума зі знижкою: ${(SUM - DISCOUNT).toFixed(2)} `;
console.log(STR10);
console.log(STR11);

let percentage = Math.round(((Math.floor((Math.random() * (FIRST + 1)))) / 100) * FIRST); //знижка для першого елемента
let cost = Math.round(FIRST / 2);
let net_profit = cost - percentage
percentage = Math.round(((Math.floor((Math.random() * (SECOND + 1)))) / 100) * SECOND); //знижка для 2 елемента
cost = Math.round(SECOND / 2);
net_profit += cost - percentage
percentage = Math.round(((Math.floor((Math.random() * (THIRD + 1)))) / 100) * THIRD); //знижка для 3 елемента
cost = Math.round(THIRD / 2);
net_profit += cost - percentage
const STR12 = "Чистий прибуток: " + net_profit + " ";
console.log(STR12);

//3
const PATTERN_STR = STR1 + STR2 + STR3 + STR4 + STR5 + STR6 + STR7 + STR8 + STR9 + STR10 + STR11 + STR12;
console.log(PATTERN_STR);