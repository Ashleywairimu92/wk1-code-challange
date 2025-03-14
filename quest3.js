const prompt = require("prompt-sync")(); 

let basicSalary = prompt('Please enter the basicSalary:');
basicSalary = parseInt(basicSalary); 

let benefits = prompt('please enter the benefits:');
benefits = parseInt(benefits);

if (isNaN(basicSalary) || isNaN(benefits)) {
    console.log(' Invalid input.Please enter a valid basic salary and benefits.');
} else if (basicSalary <= 0 || benefits <= 0) {
    console.log('Invalid input. Basic salary and benefits must be greater than 0');
} else {

    const grossSalary = basicSalary + benefits;
    console.log(`Gross Salary: ${grossSalary}`)


    let paye = 0;
    if (grossSalary <= 28895) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 38895) {
        paye = 2889.5 + (grossSalary - 28895) * 0.15;
    } else if (grossSalary <= 56395) {
        paye = 5889.5 + (grossSalary - 38895) * 0.2;
    } else if (grossSalary <= 71695) {
        paye = 10889.5 + (grossSalary - 56395) * 0.25;
    } else {
        paye = 15189.5 + (grossSalary - 71695) * 0.3;
    }


    console.log(`PAYE: ${paye}`);

    const nhifDeductions = 0;

    if (grossSalary <= 5999) {
    nhifDeductions ===150;
    } 

    else if (grossSalary <= 7999) {
    nhifDeductions === 300;
    } 

    else if (grossSalary <= 11999) {
    nhifDeductions === 400;
    } 

    else if (grossSalary <= 14999) {
    nhifDeductions ===500;
    } 

    else if (grossSalary <= 19999) {
    nhifDeductions === 600;
    } 

    else if (grossSalary <= 24999) {
    nhifDeductions === 750;
    }


    else if (grossSalary <= 29999) {
    nhifDeductions === 850;
    }


    else if (grossSalary <= 34999) {
    nhifDeductions === 900;
    }


    else if (grossSalary <= 39999) {
    nhifDeductions ===950;
    }

    else if (grossSalary <= 44999) {
    nhifDeductions === 1000;
    }

    else if (grossSalary <= 49999) {
    nhifDeductions === 1100;
    }


    else if (grossSalary <= 59999) {
    nhifDeductions === 1200;
    }


    else if (grossSalary <= 69999) {
    nhifDeductions === 1300;
    }


    else if (grossSalary <= 79999) {
    nhifDeductions === 1400;
    }


    else if (grossSalary <= 89999) {
    nhifDeductions === 1500;
    }
 

    else if (grossSalary <= 99999) {
    nhifDeductions === 1600;
    }


    else {
    nhifDeductions === 1700;
    }

    console.log(`NHIF Deductions: ${nhifDeductions}`);


    const nssfDeductions = grossSalary * 0.06;


    console.log(`NSSF Deductions: ${nssfDeductions}`);


    const housingLevy = grossSalary * 0.015;
    

    console.log(`Housing Levy: ${housingLevy}`);


    const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions - housingLevy;
    

    console.log(`Net Salary: ${netSalary}`);

}
