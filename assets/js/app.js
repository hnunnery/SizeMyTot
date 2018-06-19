// creating variables for each brand's size output
let converse;
let crocs;
let freshlyPickedSoftSoles;
let freshlyPickedSandals;
let miniMelissa;
let native;
let newBalance;
let nike;
let payless;
let pediped;
let plae;
let seeKaiRun;
// let sperry;
let strideRite;
let vans;
// variable to save user input from form
let footLength;
// setting up the calculate button event listener
let button = document.querySelector("#calculateBtn");
button.addEventListener("click", calculateSizes);

// makes the calculator work when user hits the "enter" key
document.getElementById("formInput").onkeydown = () => {
    if (event.keyCode === 13) {
        calculateSizes();
    }
};

// main function engaging functions to calculate each brand's size
function calculateSizes() {
    footLength = document.getElementById("formInput").value;
    converseCalculator();
    crocsCalculator();
    freshlyPickedSoftSolesCalculator();
    freshlyPickedSandalsCalculator();
    miniMelissaCalculator();
    nativeCalculator();
    newBalanceCalculator();
    nikeCalculator();
    paylessCalculator();
    pedipedCalculator();
    plaeCalculator();
    seeKaiRunCalculator();
    // sperryCalculator();
    strideRiteCalculator();
    vansCalculator();
    outputSizes();
}

// Finding CONVERSE Shoe Size
function converseCalculator() {

    if (footLength >= 3.25 && footLength <= 6.667) {

        if (footLength <= 3.667) {
            converse = "Size 1";
        } else if (footLength <= 4) {
            converse = "Size 2";
        } else if (footLength <= 4.143) {
            converse = "Size 2.5";
        } else if (footLength <= 4.333) {
            converse = "Size 3";
        } else if (footLength <= 4.5) {
            converse = "Size 3.5";
        } else if (footLength <= 4.667) {
            converse = "Size 4";
        } else if (footLength <= 4.8) {
            converse = "Size 4.5";
        } else if (footLength <= 5) {
            converse = "Size 5";
        } else if (footLength <= 5.167) {
            converse = "Size 5.5";
        } else if (footLength <= 5.333) {
            converse = "Size 6";
        } else if (footLength <= 5.5) {
            converse = "Size 6.5";
        } else if (footLength <= 5.667) {
            converse = "Size 7";
        } else if (footLength <= 5.833) {
            converse = "Size 7.5";
        } else if (footLength <= 6) {
            converse = "Size 8";
        } else if (footLength <= 6.143) {
            converse = "Size 8.5";
        } else if (footLength <= 6.286) {
            converse = "Size 9";
        } else if (footLength <= 6.5) {
            converse = "Size 9.5";
        } else if (footLength <= 6.667) {
            converse = "Size 10";
        }
    } else {
        converse = "no results";
    }
}

// Finding CROCS Shoe Size
function crocsCalculator() {

    if (footLength >= 3.4 && footLength <= 9.125) {

        if (footLength <= 3.875) {
            crocs = "Size 2";
        } else if (footLength <= 4.125) {
            crocs = "Size 3";
        } else if (footLength <= 4.5) {
            crocs = "Size 4";
        } else if (footLength <= 4.875) {
            crocs = "Size 5";
        } else if (footLength <= 5.125) {
            crocs = "Size 6";
        } else if (footLength <= 5.5) {
            crocs = "Size 7";
        } else if (footLength <= 5.875) {
            crocs = "Size 8";
        } else if (footLength <= 6.125) {
            crocs = "Size 9";
        } else if (footLength <= 6.5) {
            crocs = "Size 10";
        } else if (footLength <= 6.875) {
            crocs = "Size 11";
        } else if (footLength <= 7.125) {
            crocs = "Size 12";
        } else if (footLength <= 7.5) {
            crocs = "Size 13";
        } else if (footLength <= 7.875) {
            crocs = "Size 1";
        } else if (footLength <= 8.125) {
            crocs = "Size 2";
        } else if (footLength <= 8.5) {
            crocs = "Size 3";
        } else if (footLength <= 8.875) {
            crocs = "Size 4";
        } else if (footLength <= 9.125) {
            crocs = "Size 5";
        } 
    } else {
        crocs = "no results";
    }
}

// Finding FRESHLY PICKED SOFT SOLES Shoe Size
function freshlyPickedSoftSolesCalculator() {

    if (footLength >= 4 && footLength <= 6.95) {

        if (footLength <= 3.5) {
            freshlyPickedSoftSoles = "Size 0";
        } else if (footLength <= 3.6) {
            freshlyPickedSoftSoles = "Size 1";
        } else if (footLength <= 4.45) {
            freshlyPickedSoftSoles = "Size 2";
        } else if (footLength <= 4.85) {
            freshlyPickedSoftSoles = "Size 3";
        } else if (footLength <= 5.3) {
            freshlyPickedSoftSoles = "Size 4";
        } else if (footLength <= 5.7) {
            freshlyPickedSoftSoles = "Size 5";
        } else if (footLength <= 5.97) {
            freshlyPickedSoftSoles = "Size 6";
        } else if (footLength <= 6.35) {
            freshlyPickedSoftSoles = "Size 7";
        } else if (footLength <= 6.6) {
            freshlyPickedSoftSoles = "Size 8";
        } else if (footLength <= 6.95) {
            freshlyPickedSoftSoles = "Size 9";
        }
    } else {
        freshlyPickedSoftSoles = "no results";
    }
}

// Finding FRESHLY PICKED SANDALS Shoe Size
function freshlyPickedSandalsCalculator() {

    if (footLength >= 4 && footLength <= 8) {

        if (footLength <= 4.5) {
            freshlyPickedSandals = "Size 3";
        } else if (footLength <= 5) {
            freshlyPickedSandals = "Size 4";
        } else if (footLength <= 5.5) {
            freshlyPickedSandals = "Size 5";
        } else if (footLength <= 5.75) {
            freshlyPickedSandals = "Size 6";
        } else if (footLength <= 6) {
            freshlyPickedSandals = "Size 7";
        } else if (footLength <= 6.25) {
            freshlyPickedSandals = "Size 8";
        } else if (footLength <= 6.5) {
            freshlyPickedSandals = "Size 9";
        } else if (footLength <= 7) {
            freshlyPickedSandals = "Size 10";
        } else if (footLength <= 7.25) {
            freshlyPickedSandals = "Size 11";
        } else if (footLength <= 7.5) {
            freshlyPickedSandals = "Size 12";
        } else if (footLength <= 8) {
            freshlyPickedSandals = "Size 13";
        }
    } else {
        freshlyPickedSandals = "no results";
    }
}

// Finding MINI MELISSA Shoe Size
function miniMelissaCalculator() {

    if (footLength >= 4 && footLength <= 6.5) {

        if (footLength <= 4.53) {
            miniMelissa = "Size 5";
        } else if (footLength <= 4.92) {
            miniMelissa = "Size 6";
        } else if (footLength <= 5.31) {
            miniMelissa = "Size 7";
        } else if (footLength <= 5.71) {
            miniMelissa = "Size 8";
        } else if (footLength <= 6.1) {
            miniMelissa = "Size 9";
        } else if (footLength <= 6.5) {
            miniMelissa = "Size 10";
        }
    } else {
        miniMelissa = "no results";
    }
}

// Finding NATIVE Shoe Size
function nativeCalculator() {

    if (footLength >= 4.45 && footLength <= 9.6) {

        if (footLength <= 4.75) {
            native = "Size C4";
        } else if (footLength <= 4.9) {
            native = "Size C5";
        } else if (footLength <= 5) {
            native = "Size C5.5";
        } else if (footLength <= 5.3) {
            native = "Size C6";
        } else if (footLength <= 5.4) {
            native = "Size C6.5";
        } else if (footLength <= 5.5) {
            native = "Size C7";
        } else if (footLength <= 5.7) {
            native = "Size C7.5";
        } else if (footLength <= 5.9) {
            native = "Size C8";
        } else if (footLength <= 6) {
            native = "Size C8.5";
        } else if (footLength <= 6.3) {
            native = "Size C9";
        } else if (footLength <= 6.5) {
            native = "Size C9.5";
        } else if (footLength <= 6.7) {
            native = "Size C10";
        } else if (footLength <= 6.8) {
            native = "Size C10.5";
        } else if (footLength <= 6.9) {
            native = "Size C11";
        } else if (footLength <= 7) {
            native = "Size C11.5";
        } else if (footLength <= 7.2) {
            native = "Size C12";
        } else if (footLength <= 7.5) {
            native = "Size C12.5";
        } else if (footLength <= 7.7) {
            native = "Size C13";
        } else if (footLength <= 7.9) {
            native = "Size C13.5";
        } else if (footLength <= 7.9) {
            native = "Size J1";
        } else if (footLength <= 8) {
            native = "Size J1.5";
        } else if (footLength <= 8.2) {
            native = "Size J2";
        } else if (footLength <= 8.45) {
            native = "Size J2.5";
        } else if (footLength <= 8.6) {
            native = "Size J3";
        } else if (footLength <= 8.85) {
            native = "Size J3.5";
        } else if (footLength <= 9) {
            native = "Size J4";
        } else if (footLength <= 9.15) {
            native = "Size J4.5";
        } else if (footLength <= 9.25) {
            native = "Size J5";
        } else if (footLength <= 9.45) {
            native = "Size J5.5";
        } else if (footLength <= 9.6) {
            native = "Size J6";
        }
    } else {
        native = "no results";
    }
}

// Finding NEW BALANCE Shoe Size
function newBalanceCalculator() {

    if (footLength >= 3.2 && footLength <= 9.75) {

        if (footLength <= 3.5) {
          newBalance = "Size 1";
        } else if (footLength <= 3.75) {
          newBalance = "Size 2";
        } else if (footLength <= 4.125) {
          newBalance = "Size 3";
        } else if (footLength <= 4.5) {
          newBalance = "Size 4";
        } else if (footLength <= 4.75) {
          newBalance = "Size 5";
        } else if (footLength <= 5) {
          newBalance = "Size 5.5";
        } else if (footLength <= 5.125) {
          newBalance = "Size 6";
        } else if (footLength <= 5.25) {
          newBalance = "Size 6.5";
        } else if (footLength <= 5.5) {
          newBalance = "Size 7";
        } else if (footLength <= 5.625) {
          newBalance = "Size 7.5";
        } else if (footLength <= 5.75) {
          newBalance = "Size 8";
        } else if (footLength <= 6) {
          newBalance = "Size 8.5";
        } else if (footLength <= 6.125) {
          newBalance = "Size 9";
        } else if (footLength <= 6.25) {
          newBalance = "Size 9.5";
        } else if (footLength <= 6.5) {
          newBalance = "Size 10";
        } else if (footLength <= 6.625) {
          newBalance = "Size 10.5";
        } else if (footLength <= 6.75) {
          newBalance = "Size 11";
        } else if (footLength <= 7) {
          newBalance = "Size 11.5";
        } else if (footLength <= 7.125) {
          newBalance = "Size 12";
        } else if (footLength <= 7.25) {
          newBalance = "Size 12.5";
        } else if (footLength <= 7.5) {
          newBalance = "Size 13";
        } else if (footLength <= 7.625) {
          newBalance = "Size 13.5";
        } else if (footLength <= 7.75) {
          newBalance = "Size 1";
        } else if (footLength <= 8) {
          newBalance = "Size 1.5";
        } else if (footLength <= 8.125) {
          newBalance = "Size 2";
        } else if (footLength <= 8.25) {
          newBalance = "Size 2.5";
        } else if (footLength <= 8.5) {
          newBalance = "Size 3";
        } else if (footLength <= 8.625) {
          newBalance = "Size 3.5";
        } else if (footLength <= 8.75) {
          newBalance = "Size 4";
        } else if (footLength <= 9) {
          newBalance = "Size 4.5";
        } else if (footLength <= 9.125) {
          newBalance = "Size 5";
        } else if (footLength <= 9.25) {
          newBalance = "Size 5.5";
        } else if (footLength <= 9.5) {
          newBalance = "Size 6";
        } else if (footLength <= 9.625) {
          newBalance = "Size 6.5";
        } else if (footLength <= 9.75) {
          newBalance = "Size 7";
        }
    } else {
        newBalance = "no results";
    }
}

// Finding NIKE Shoe Size
function nikeCalculator() {

    if (footLength >= 3.3 && footLength <= 9.625) {

        if (footLength <= 3.625) {
            nike = "Size 2C";
        } else if (footLength <= 3.875) {
            nike = "Size 2.5C";
        } else if (footLength <= 4) {
            nike = "Size 3C";
        } else if (footLength <= 4.125) {
            nike = "Size 3.5C";
        } else if (footLength <= 4.375) {
            nike = "Size 4C";
        } else if (footLength <= 4.5) {
            nike = "Size 4.5C";
        } else if (footLength <= 4.625) {
            nike = "Size 5C";
        } else if (footLength <= 4.875) {
            nike = "Size 5.5C";
        } else if (footLength <= 5) {
            nike = "Size 6C";
        } else if (footLength <= 5.125) {
            nike = "Size 6.5C";
        } else if (footLength <= 5.375) {
            nike = "Size 7C";
        } else if (footLength <= 5.5) {
            nike = "Size 7.5C";
        } else if (footLength <= 5.625) {
            nike = "Size 8C";
        } else if (footLength <= 5.875) {
            nike = "Size 8.5C";
        } else if (footLength <= 6) {
            nike = "Size 9C";
        } else if (footLength <= 6.125) {
            nike = "Size 9.5C";
        } else if (footLength <= 6.375) {
            nike = "Size 10C";
        } else if (footLength <= 6.5) {
            nike = "Size 10.5C";
        } else if (footLength <= 6.625) {
            nike = "Size 11C";
        } else if (footLength <= 6.875) {
            nike = "Size 11.5C";
        } else if (footLength <= 7) {
            nike = "Size 12C";
        } else if (footLength <= 7.125) {
            nike = "Size 12.5C";
        } else if (footLength <= 7.375) {
            nike = "Size 13C";
        } else if (footLength <= 7.5) {
            nike = "Size 13.5C";
        } else if (footLength <= 7.625) {
            nike = "Size 1Y";
        } else if (footLength <= 7.875) {
            nike = "Size 1.5Y";
        } else if (footLength <= 8) {
            nike = "Size 2Y";
        } else if (footLength <= 8.125) {
            nike = "Size 2.5Y";
        } else if (footLength <= 8.375) {
            nike = "Size 3Y";
        } else if (footLength <= 8.5) {
            nike = "Size 3.5Y";
        } else if (footLength <= 8.625) {
            nike = "Size 4Y";
        } else if (footLength <= 8.875) {
            nike = "Size 4.5Y";
        } else if (footLength <= 9) {
            nike = "Size 5Y";
        } else if (footLength <= 9.125) {
            nike = "Size 5.5Y";
        } else if (footLength <= 9.375) {
            nike = "Size 6Y";
        } else if (footLength <= 9.5) {
            nike = "Size 6.5Y";
        } else if (footLength <= 9.625) {
            nike = "Size 7Y";
        }
    } else {
        nike = "no results";
    }
}

// Finding PAYLESS Shoe Size
function paylessCalculator() {

    if (footLength >= 3.15 && footLength <= 6.5625) {

        if (footLength <= 3.5625) {
            payless = "Size 1";
        } else if (footLength <= 3.875) {
            payless = "Size 2";
        } else if (footLength <= 4.25) {
            payless = "Size 3";
        } else if (footLength <= 4.5625) {
            payless = "Size 4";
        } else if (footLength <= 4.875) {
            payless = "Size 5";
        } else if (footLength <= 5.0625) {
            payless = "Size 5.5";
        } else if (footLength <= 5.25) {
            payless = "Size 6";
        } else if (footLength <= 5.375) {
            payless = "Size 6.5";
        } else if (footLength <= 5.625) {
            payless = "Size 7";
        } else if (footLength <= 5.75) {
            payless = "Size 7.5";
        } else if (footLength <= 5.875) {
            payless = "Size 8";
        } else if (footLength <= 6.0625) {
            payless = "Size 8.5";
        } else if (footLength <= 6.25) {
            payless = "Size 9";
        } else if (footLength <= 6.375) {
            payless = "Size 9.5";
        } else if (footLength <= 6.5625) {
            payless = "Size 10";
        }
    } else {
        payless = "no results";
    }
}

// Finding PEDIPED Shoe Size
function pedipedCalculator() {

    if(footLength >= 3 && footLength <= 7.5){

        if(footLength <= 3.8) {
            pediped = "Size 2.5";
        } else if(footLength <= 4) {
            pediped = "Size 3";
        } else if(footLength <= 4.15) {
            pediped = "Size 3.5";
        } else if(footLength <= 4.3) {
            pediped = "Size 4";
        } else if(footLength <= 4.5) {
            pediped = "Size 4.5";
        } else if(footLength <= 4.65) {
            pediped = "Size 5";
        } else if(footLength <= 4.8) {
            pediped = "Size 5.5";
        } else if(footLength <= 5) {
            pediped = "Size 6";
        } else if(footLength <= 5.15) {
            pediped = "Size 6.5";
        } else if(footLength <= 5.3) {
            pediped = "Size 7";
        } else if(footLength <= 5.5) {
            pediped = "Size 7.5";
        } else if(footLength <= 5.65) {
            pediped = "Size 8";
        } else if(footLength <= 5.8) {
            pediped = "Size 8.5";
        } else if(footLength <= 6) {
            pediped = "Size 9";
        } else if(footLength <= 6.15) {
            pediped = "Size 9.5";
        } else if(footLength <= 6.3) {
            pediped = "Size 10";
        } else if(footLength <= 6.5) {
            pediped = "Size 10.5";
        } else if(footLength <= 6.65) {
            pediped = "Size 11";
        } else if(footLength <= 6.8) {
            pediped = "Size 11.5";
        } else if(footLength <= 7) {
            pediped = "Size 12";
        } else if(footLength <= 7.15) {
            pediped = "Size 12.5";
        } else if(footLength <= 7.3) {
            pediped = "Size 13";
        } else if(footLength <= 7.5) {
            pediped = "Size 13.5";
        }
    } else {
        pediped = "no results";
    }  
}

// Finding PLAE Shoe Size
function plaeCalculator() {

    if (footLength >= 4.45 && footLength <= 9) {

        if (footLength <= 4.75) {
            plae = "Size 5";
        } else if (footLength <= 5) {
            plae = "Size 5.5";
        } else if (footLength <= 5.125) {
            plae = "Size 6";
        } else if (footLength <= 5.25) {
            plae = "Size 6.5";
        } else if (footLength <= 5.5) {
            plae = "Size 7";
        } else if (footLength <= 5.625) {
            plae = "Size 7.5";
        } else if (footLength <= 5.75) {
            plae = "Size 8";
        } else if (footLength <= 6) {
            plae = "Size 8.5";
        } else if (footLength <= 6.125) {
            plae = "Size 9";
        } else if (footLength <= 6.25) {
            plae = "Size 9.5";
        } else if (footLength <= 6.5) {
            plae = "Size 10";
        } else if (footLength <= 6.625) {
            plae = "Size 10.5";
        } else if (footLength <= 6.75) {
            plae = "Size 11";
        } else if (footLength <= 7) {
            plae = "Size 11.5";
        } else if (footLength <= 7.125) {
            plae = "Size 12";
        } else if (footLength <= 7.25) {
            plae = "Size 12.5";
        } else if (footLength <= 7.5) {
            plae = "Size 13";
        } else if (footLength <= 7.625) {
            plae = "Size 13.5";
        } else if (footLength <= 7.75) {
            plae = "Size 1";
        } else if (footLength <= 8) {
            plae = "Size 1.5";
        } else if (footLength <= 8.125) {
            plae = "Size 2";
        } else if (footLength <= 8.25) {
            plae = "Size 2.5";
        } else if (footLength <= 8.5) {
            plae = "Size 3";
        } else if (footLength <= 8.625) {
            plae = "Size 3.5";
        } else if (footLength <= 8.75) {
            plae = "Size 4";
        } else if (footLength <= 9) {
            plae = "Size 4.5";
        } 
    } else {
        plae = "no results";
    }
}

// Finding SEE KAI RUN Shoe Size
function seeKaiRunCalculator() {

    if (footLength >= 3.85 && footLength <= 6.375) {

        if (footLength <= 4.125) {
            seeKaiRun = "Size 3";
        } else if (footLength <= 4.375) {
            seeKaiRun = "Size 3.5";
        } else if (footLength <= 4.5) {
            seeKaiRun = "Size 4";
        } else if (footLength <= 4.625) {
            seeKaiRun = "Size 4.5";
        } else if (footLength <= 4.75) {
            seeKaiRun = "Size 5";
        } else if (footLength <= 5) {
            seeKaiRun = "Size 5.5";
        } else if (footLength <= 5.125) {
            seeKaiRun = "Size 6";
        } else if (footLength <= 5.25) {
            seeKaiRun = "Size 6.5";
        } else if (footLength <= 5.5) {
            seeKaiRun = "Size 7";
        } else if (footLength <= 5.625) {
            seeKaiRun = "Size 7.5";
        } else if (footLength <= 5.75) {
            seeKaiRun = "Size 8";
        } else if (footLength <= 6) {
            seeKaiRun = "Size 8.5";
        } else if (footLength <= 6.125) {
            seeKaiRun = "Size 9";
        } else if (footLength <= 6.25) {
            seeKaiRun = "Size 9.5";
        } else if (footLength <= 6.375) {
            seeKaiRun = "Size 10";
        }
    } else {
        seeKaiRun = "no results";
    }
}

// Finding STRIDE RITE Shoe Size
function strideRiteCalculator() {

    if (footLength >= 3.5 && footLength <= 6.625) {

        if (footLength <= 4.375) {
            strideRite = "Size 3.5";
        } else if (footLength <= 4.625) {
            strideRite = "Size 4";
        } else if (footLength <= 4.75) {
            strideRite = "Size 4.5";
        } else if (footLength <= 4.875) {
            strideRite = "Size 5";
        } else if (footLength <= 5.125) {
            strideRite = "Size 5.5";
        } else if (footLength <= 5.25) {
            strideRite = "Size 6";
        } else if (footLength <= 5.375) {
            strideRite = "Size 6.5";
        } else if (footLength <= 5.625) {
            strideRite = "Size 7";
        } else if (footLength <= 5.75) {
            strideRite = "Size 7.5";
        } else if (footLength <= 5.875) {
            strideRite = "Size 8";
        } else if (footLength <= 6.125) {
            strideRite = "Size 8.5";
        } else if (footLength <= 6.25) {
            strideRite = "Size 9";
        } else if (footLength <= 6.375) {
            strideRite = "Size 9.5";
        } else if (footLength <= 6.625) {
            strideRite = "Size 10";
        }
    } else {
        strideRite = "no results";
    }
}

// Finding Vans Shoe Size
function vansCalculator() {

    if (footLength >= 2.85 && footLength <= 7.125) {

        if (footLength <= 3.125) {
            vans = "Size 0";
        } else if (footLength <= 3.25) {
            vans = "Size 0.5";
        } else if (footLength <= 3.5) {
            vans = "Size 1";
        } else if (footLength <= 3.625) {
            vans = "Size 1.5";
        } else if (footLength <= 3.75) {
            vans = "Size 2";
        } else if (footLength <= 4) {
            vans = "Size 2.5";
        } else if (footLength <= 4.125) {
            vans = "Size 3";
        } else if (footLength <= 4.25) {
            vans = "Size 3.5";
        } else if (footLength <= 4.5) {
            vans = "Size 4";
        } else if (footLength <= 4.625) {
            vans = "Size 4.5";
        } else if (footLength <= 4.75) {
            vans = "Size 5";
        } else if (footLength <= 5) {
            vans = "Size 5.5";
        } else if (footLength <= 5.125) {
            vans = "Size 6";
        } else if (footLength <= 5.25) {
            vans = "Size 6.5";
        } else if (footLength <= 5.5) {
            vans = "Size 7";
        } else if (footLength <= 5.625) {
            vans = "Size 7.5";
        } else if (footLength <= 5.75) {
            vans = "Size 8";
        } else if (footLength <= 6) {
            vans = "Size 8.5";
        } else if (footLength <= 6.125) {
            vans = "Size 9";
        } else if (footLength <= 6.25) {
            vans = "Size 9.5";
        } else if (footLength <= 6.5) {
            vans = "Size 10";
        } else if (footLength <= 6.625) {
            vans = "Size 10.5";
        } else if (footLength <= 6.75) {
            vans = "Size 11";
        } else if (footLength <= 7) {
            vans = "Size 11.5";
        } else if (footLength <= 7.125) {
            vans = "Size 12";
        } 
    } else {
        vans = "no results";
    }  
}

// setting innerHTML to output brand specific size info
function outputSizes() {

    document.getElementById("converseOutput").innerHTML = `Converse: ${converse}`;

    document.getElementById("crocsOutput").innerHTML = `Crocs: ${crocs}`;

    document.getElementById("freshlyPickedSoftSolesOutput").innerHTML = `FP Soft Soles: ${freshlyPickedSoftSoles}`;

    document.getElementById("freshlyPickedSandalsOutput").innerHTML = `FP Sandals: ${freshlyPickedSandals}`;

    document.getElementById("miniMelissaOutput").innerHTML = `Mini Melissa: ${miniMelissa}`;

    document.getElementById("nativeOutput").innerHTML = `Native: ${native}`;

    document.getElementById("newBalanceOutput").innerHTML = `New Balance: ${newBalance}`;

    document.getElementById("nikeOutput").innerHTML = `Nike: ${nike}`;

    document.getElementById("paylessOutput").innerHTML = `Payless: ${payless}`;

    document.getElementById("pedipedOutput").innerHTML=`pediped: ${pediped}`;

    document.getElementById("plaeOutput").innerHTML = `plae: ${plae}`;

    document.getElementById("seeKaiRunOutput").innerHTML = `See Kai Run: ${seeKaiRun}`;

    // document.getElementById("sperryOutput").innerHTML = `Sperry: ${sperry}`;

    document.getElementById("strideRiteOutput").innerHTML=`Stride Rite: ${strideRite}`;
    
    document.getElementById("vansOutput").innerHTML=`Vans: ${vans}`;
}