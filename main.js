'use strict';

let money,
    time;

start();

let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// Бюджет на месяц...............
function start () {
    money = +prompt("Ваш бюджет на месяц?");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-10-05");
}
// ...............Бюджет на месяц



// Статья расходов.................
function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let monthCost = prompt("Введите стятью расходов в этом месяце"),
            totalCost = +prompt("Во сколько обойдется?");
            if ( (typeof(monthCost) === 'string') && (typeof(monthCost) != ' ') && (typeof(totalCost) != ' ') && (typeof(monthCost) != null) && (typeof(totalCost) != null) && monthCost.length !== 0) {
                console.log("Прошла запись");
                appData.expenses[monthCost] = totalCost;
            } else {
                alert('Введены неверные данные. Начнем заново.');
                i--;
            }
    }
}
// .................Статья расходов


// Проверка накоплений..............
function checkSavings () {
    let deposit = confirm("Есть ли у вас накопления?");
    if (deposit) {
        appData.savings = deposit;
        if(appData.savings) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = +(save/100/12*percent).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    } else {
        alert("У вас нету подушки безопасности.");
    }
}
// ..............Проверка накоплений

// второй способ - цикл while....................................
// let k = 0;
// while ( k < 2 ) {
//     let monthCost = prompt("Введите стятью расходов в этом месяце");
//     let totalCost = +prompt("Во сколько обойдется?");
//     if ( (typeof(monthCost) === 'string') && (typeof(monthCost) != null) && (typeof(monthCost) != ' ') && monthCost.length != 0 && (typeof(totalCost) != null) && (typeof(totalCost) != ' ')  ) {
//         console.log("Запись прошла");
//         appData.expenses[monthCost] = totalCost;
//     } else {
//         alert("Введите корректные данные");
//         k--;
//     }
//     k++;
// }
// ................................второй способ - цикл while

// третий способ - цикл do while....................................
// let m = 0,
//     monthCost,
//     totalCost;

// do {
//     monthCost = prompt("Введите стятью расходов в этом месяце");
//     totalCost = +prompt("Во сколько обойдется?");
//     if ( (typeof(monthCost) === 'string') && (typeof(monthCost) != null) && (typeof(monthCost) != ' ') && monthCost.length != 0 && (typeof(totalCost) != null) && (typeof(totalCost) != ' ') ) {
//         console.log("Запись прошла");
//         appData.expenses[monthCost] = totalCost;
//     } else {
//         alert("Введите корректные данные");
//         m--;
//     }
//     m++;
// }
// while (m < 2);
// ................................третий способ - цикл do while

// Расчет дневного бюджета.............
function detectDayBudget () {
    let costPerDay = +(money/30).toFixed();
    appData.moneyPerDay = costPerDay;
    alert("Ежедневный бюджет: " + costPerDay);
}
// .............Расчет дневного бюджета

// Расчет уровня достатка..............
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert("У вас минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
        alert("У вас средний уровень достатка");
    } else if (appData.moneyPerDay >= 1000) {
        alert("У вас высокий уровень достатка");
    } else {
        alert("Что то пошло не так");
    }
}
// ..............Расчет уровня достатка

// Функция необязательных расходов.............
function chooseOptExpenses () {
    for (let i = 1; i < 4; i++) {
        let otherCosts = prompt("Статья необязательных расходов");
        let numberQuest = i;
        if ( (typeof(otherCosts) === 'string') && (typeof(otherCosts) != null) && (typeof(otherCosts)  != " ") ) {
            appData.optionalExpenses[numberQuest] = otherCosts;
        } else {
            alert("Произошел сбой.... Попробуйте снова.");
            i--;
        }
    }
}
// .............Функция необязательных расходов


chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
chooseOptExpenses();