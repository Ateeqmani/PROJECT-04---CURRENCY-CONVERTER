#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let convertion_currency = {
    "PKR":{
        "USD":0.0033,
        "EURO":0.0030,
        "DIRHAM":0.012,
        "SAUDI_RIYAL":0.012,
        "OMANI_RIAL":0.0013,
        "KUWAITI_DINAR":0.0010,
        "QATARI_RIYAL":0.012,
        "AUSTRALIAN_DOLLAR":0.0051,
        "INDIAN_RUPEE":0.27,
        "Chinese_Yuan":0.024,
        "Russian_Ruble":0.32,
        "POUND_STERLING":0.0026,
        "PKR":1
    },
    "USD":{
        "USD":1,
        "PKR":307.38,
        "EURO":0.93,
        "DIRHAM":3.67,
        "SAUDI_RIYAL":3.75,
        "OMANI_RIAL":0.38,
        "KUWAITI_DINAR":0.31,
        "QATARI_RIYAL":3.64,
        "AUSTRALIAN_DOLLAR":1.57,
        "INDIAN_RUPEE":83.12,
        "Chinese_Yuan":7.34,
        "Russian_Ruble":97.75,
        "POUND_STERLING":0.80,

    },
    "EURO":{
        "EURO":1,
        "PKR":329.31,
        "USD":1.07,
        "DIRHAM":3.94,
        "SAUDI_RIYAL":4.02,
        "OMANI_RIAL":0.41,
        "KUWAITI_DINAR":0.33,
        "QATARI_RIYAL":3.90,
        "AUSTRALIAN_DOLLAR":1.68,
        "INDIAN_RUPEE":89.06,
        "Chinese_Yuan":7.87,
        "Russian_Ruble":104.72,
        "POUND_STERLING":0.86,

    },
    "DIRHAM":{
        "DIRHAM":1,
        "PKR":83.68,
        "USD":0.27,
        "EURO":0.25,
        "SAUDI_RIYAL":1.02,
        "OMANI_RIAL":0.10,
        "KUWAITI_DINAR":0.084,
        "QATARI_RIYAL":0.99,
        "AUSTRALIAN_DOLLAR":0.43,
        "INDIAN_RUPEE":22.63,
        "Chinese_Yuan":2.00,
        "Russian_Ruble":26.61,
        "POUND_STERLING":0.22,

    },
    "SAUDI_RIYAL":{
        "SAUDI_RIYAL":1,
        "PKR":81.95, 
        "USD":0.27,
        "EURO":0.25,
        "DIRHAM":0.98,
        "OMANI_RIAL":0.10,
        "KUWAITI_DINAR":0.082,
        "QATARI_RIYAL":0.97,
        "AUSTRALIAN_DOLLAR":0.42,
        "INDIAN_RUPEE":22.16,
        "Chinese_Yuan":1.96,
        "Russian_Ruble":26.06,
        "POUND_STERLING":0.21,

    },
    "OMANI_RIAL":{
        "OMANI_RIAL":1,
        "PKR":799.22,
        "USD":2.60,
        "EURO":2.43,
        "DIRHAM":9.53,
        "SAUDI_RIYAL":9.75,
        "KUWAITI_DINAR":0.80,
        "QATARI_RIYAL":9.47,
        "AUSTRALIAN_DOLLAR":4.07,
        "INDIAN_RUPEE":216.14,
        "Chinese_Yuan":19.09,
        "Russian_Ruble":254.17,
        "POUND_STERLING":2.09,

    },
    "KUWAITI_DINAR":{
        "KUWAITI_DINAR":1,
        "PKR":996.51,
        "USD":3.24,
        "EURO":3.03,
        "DIRHAM":11.91,
        "SAUDI_RIYAL":12.16,
        "OMANI_RIAL":1.25,
        "QATARI_RIYAL":11.81,
        "AUSTRALIAN_DOLLAR":5.08,
        "INDIAN_RUPEE":269.49,
        "Chinese_Yuan":23.81,
        "Russian_Ruble":316.91,
        "POUND_STERLING":2.60,

    },
    "QATARI_RIYAL":{
        "QATARI_RIYAL":1,
        "PKR":84.41,
        "USD":0.27,
        "EURO":0.26,
        "DIRHAM":1.01,
        "SAUDI_RIYAL":1.03,
        "OMANI_RIAL":0.11,
        "KUWAITI_DINAR":0.085,
        "AUSTRALIAN_DOLLAR":0.43,
        "INDIAN_RUPEE":22.83,
        "Chinese_Yuan":2.02,
        "Russian_Ruble":26.84,
        "POUND_STERLING":0.22,

    },
    "AUSTRALIAN_DOLLAR":{
        "AUSTRALIAN_DOLLAR":1,
        "PKR":196.24,
        "USD":0.64,
        "EURO":0.60,
        "DIRHAM":2.34,
        "SAUDI_RIYAL":2.39,
        "OMANI_RIAL":0.25,
        "KUWAITI_DINAR":0.20,
        "QATARI_RIYAL":2.32,
        "INDIAN_RUPEE":53.07,
        "Chinese_Yuan":4.69,
        "Russian_Ruble":62.41,
        "POUND_STERLING":0.51,

    },
    "INDIAN_RUPEE":{
        "INDIAN_RUPEE":1,
        "PKR":3.70,
        "USD":0.012,
        "EURO":0.0113,
        "DIRHAM":0.0442127,
        "SAUDI_RIYAL":0.045,
        "OMANI_RIAL":0.0046,
        "KUWAITI_DINAR":0.003714,
        "QATARI_RIYAL":0.0438215,
        "AUSTRALIAN_DOLLAR":0.018862,
        "Chinese_Yuan":0.088,
        "Russian_Ruble":1.1804,
        "POUND_STERLING":0.00965453,

    },
    "Chinese_Yuan":{
        "Chinese_Yuan":1,
        "PKR":41.86,
        "USD":0.14,
        "EURO":0.13,
        "DIRHAM":0.50,
        "SAUDI_RIYAL":0.51,
        "OMANI_RIAL":0.052,
        "KUWAITI_DINAR":0.042,
        "QATARI_RIYAL":0.50,
        "AUSTRALIAN_DOLLAR":0.21,
        "INDIAN_RUPEE":11.32,
        "Russian_Ruble":13.52,
        "POUND_STERLING":0.11,

    },
    "Russian_Ruble":{
        "Russian_Ruble":1,
        "PKR":3.14,
        "USD":0.010,
        "EURO":0.0096,
        "DIRHAM":0.038,
        "SAUDI_RIYAL":0.038,
        "OMANI_RIAL":0.0039,
        "KUWAITI_DINAR":0.0032,
        "QATARI_RIYAL":0.037,
        "AUSTRALIAN_DOLLAR":0.016,
        "INDIAN_RUPEE":0.85,
        "Chinese_Yuan":0.075,
        "POUND_STERLING":0.0082,

    },
    "POUND_STERLING":{
        "POUND_STERLING":1,
        "PKR":383.14,
        "USD":1.25,
        "EURO":1.16,
        "DIRHAM":4.58,
        "SAUDI_RIYAL":4.68,
        "OMANI_RIAL":0.48,
        "KUWAITI_DINAR":0.38,
        "QATARI_RIYAL":4.54,
        "AUSTRALIAN_DOLLAR":1.95,
        "INDIAN_RUPEE":103.62,
        "Chinese_Yuan":9.15,
        "Russian_Ruble":121.85,
    }
}

const currency:{
        from: "PKR" | "USD" | "EURO" | "DIRHAM" | "SAUDI_RIYAL" | "OMANI_RIAL" | "KUWAITI_DINAR" | "QATARI_RIYAL" | "AUSTRALIAN_DOLLAR" | "INDIAN_RUPEE" | "Chinese_Yuan" | "Russian_Ruble" | "POUND_STERLING",
        to:   "PKR" | "USD" | "EURO" | "DIRHAM" | "SAUDI_RIYAL" | "OMANI_RIAL" | "KUWAITI_DINAR" | "QATARI_RIYAL" | "AUSTRALIAN_DOLLAR" | "INDIAN_RUPEE" | "Chinese_Yuan" | "Russian_Ruble" | "POUND_STERLING",
        amount: number
    }=await inquirer.prompt([
        {
            type:"list",
            name:"from",
            choices:["PKR" , "USD" , "EURO" , "DIRHAM" , "SAUDI_RIYAL" , "OMANI_RIAL" , "KUWAITI_DINAR" , "QATARI_RIYAL" , "AUSTRALIAN_DOLLAR" , "INDIAN_RUPEE" , "Chinese_Yuan" , "Russian_Ruble" , "POUND_STERLING"],
            message:"Choose your Currency : "
        },
        {
            type:"list",
            name:"to",
            choices:["PKR" , "USD" , "EURO" , "DIRHAM" , "SAUDI_RIYAL" , "OMANI_RIAL" , "KUWAITI_DINAR" , "QATARI_RIYAL" , "AUSTRALIAN_DOLLAR" , "INDIAN_RUPEE" , "Chinese_Yuan" , "Russian_Ruble" , "POUND_STERLING"],
            message:"Choose the Currency which you want to convert : "
        },
        {
            type:"number",
            name:"amount",
            message:"your Conversion Currency Amount Rate : "
        }
    ]);

const {from,to,amount} = currency;

if(from && to && amount){
    let result = convertion_currency[from][to] * amount;
    console.log(chalk.underline(`Amount Convert from ${from} to ${to} is ${result}`));
}
else{
    console.log(chalk.bgRedBright("Invalid Amount In"))
}