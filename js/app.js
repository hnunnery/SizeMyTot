function calculateSize() {
    let footLength = document.getElementById("formInput").value;
    let pediped = "no results";
    let strideRite = "no results";
    let miniMelissa = "no results";
    let vans = "no results";
    let freshlyPickedSoftSoles = "no results";
    let freshlyPickedSandals = "no results";
    let converse = "no results";
    let seeKaiRun = "no results";
    let payless = "no results";

    // Finding PEDIPED Shoe Size
    if(footLength >= 3){
        if(footLength <= 3.8) {
            pediped = "Size 2.5";
        }else if(footLength <= 4) {
            pediped = "Size 3";
        }else if(footLength <= 4.15) {
            pediped = "Size 3.5";
        }else if(footLength <= 4.3) {
            pediped = "Size 4";
        }else if(footLength <= 4.5) {
            pediped = "Size 4.5";
        }else if(footLength <= 4.65) {
            pediped = "Size 5";
        }else if(footLength <= 4.8) {
            pediped = "Size 5.5";
        }else if(footLength <= 5) {
            pediped = "Size 6";
        }else if(footLength <= 5.15) {
            pediped = "Size 6.5";
        }else if(footLength <= 5.3) {
            pediped = "Size 7";
        }else if(footLength <= 5.5) {
            pediped = "Size 7.5";
        }else if(footLength <= 5.65) {
            pediped = "Size 8";
        }else if(footLength <= 5.8) {
            pediped = "Size 8.5";
        }else if(footLength <= 6) {
            pediped = "Size 9";
        }else if(footLength <= 6.15) {
            pediped = "Size 9.5";
        }else if(footLength <= 6.3) {
            pediped = "Size 10";
        }else if(footLength <= 6.5) {
            pediped = "Size 10.5";
        }else if(footLength <= 6.65) {
            pediped = "Size 11";
        }else if(footLength <= 6.8) {
            pediped = "Size 11.5";
        }else if(footLength <= 7) {
            pediped = "Size 12";
        }else if(footLength <= 7.15) {
            pediped = "Size 12.5";
        }else if(footLength <= 7.3) {
            pediped = "Size 13";
        }else if(footLength <= 7.5) {
            pediped = "Size 13.5";
        }
    } 
    // Finding STRIDE RITE Shoe Size
    if(footLength >= 3.5) {
        if(footLength <= 4.375) {
            strideRite = "Size 3.5";
        }else if(footLength <= 4.625) {
            strideRite = "Size 4";
        }else if(footLength <= 4.750) {
            strideRite = "Size 4.5";
        }else if(footLength <= 4.875) {
            strideRite = "Size 5";
        }else if(footLength <= 5.125) {
            strideRite = "Size 5.5";
        }else if(footLength <= 5.25) {
            strideRite = "Size 6";
        }else if(footLength <= 5.375) {
            strideRite = "Size 6.5";
        }else if(footLength <= 5.625) {
            strideRite = "Size 7";
        }else if(footLength <= 5.75) {
            strideRite = "Size 7.5";
        }else if(footLength <= 5.875) {
            strideRite = "Size 8";
        }else if(footLength <= 6.125) {
            strideRite = "Size 8.5";
        }else if(footLength <= 6.25) {
            strideRite = "Size 9";
        }else if(footLength <= 6.375) {
            strideRite = "Size 9.5";
        }else if(footLength <= 6.625) {
            strideRite = "Size 10";
        }
    }
    // Finding MINI MELISSA Shoe Size
    if(footLength >= 4) {
        if(footLength <= 4.53) {
            miniMelissa = "Size 5";
        }else if(footLength <= 4.92) {
            miniMelissa = "Size 6";
        }else if(footLength <= 5.31) {
            miniMelissa = "Size 7";
        }else if(footLength <= 5.71) {
            miniMelissa = "Size 8";
        }else if(footLength <= 6.1) {
            miniMelissa = "Size 9";
        }else if(footLength <= 6.5) {
            miniMelissa = "Size 10";
        }
    } 

    // Finding Vans Shoe Size
    if(footLength >= 2.85) {
        if(footLength <= 3.125) {
            vans = "Size 0";
        }else if(footLength <= 3.25) {
            vans = "Size 0.5";
        }else if(footLength <= 3.5) {
            vans = "Size 1";
        }else if(footLength <= 3.625) {
            vans = "Size 1.5";
        }else if(footLength <= 3.75) {
            vans = "Size 2";
        }else if(footLength <= 4) {
            vans = "Size 2.5";
        }else if(footLength <= 4.125) {
            vans = "Size 3";
        }else if(footLength <= 4.25) {
            vans = "Size 3.5";
        }else if(footLength <= 4.5) {
            vans = "Size 4";
        }else if(footLength <= 4.625) {
            vans = "Size 4.5";
        }else if(footLength <= 4.75) {
            vans = "Size 5";
        } else if(footLength <= 5) {
            vans = "Size 5.5";
        }else if(footLength <= 5.125) {
            vans = "Size 6";
        }else if(footLength <= 5.25) {
            vans = "Size 6.5";
        }else if(footLength <= 5.5) {
            vans = "Size 7";
        }else if(footLength <= 5.625) {
            vans = "Size 7.5";
        }else if(footLength <= 5.75) {
            vans = "Size 8";
        }else if(footLength <= 6) {
            vans = "Size 8.5";
        }else if(footLength <= 6.125) {
            vans = "Size 9";
        }else if(footLength <= 6.25) {
            vans = "Size 9.5";
        }else if(footLength <= 6.5) {
            vans = "Size 10";
        }else if(footLength <= 6.625) {
            vans = "Size 10.5";
        }else if(footLength <= 6.75) {
            vans = "Size 11";
        }else if(footLength <= 7) {
            vans = "Size 11.5";
        }else if(footLength <= 7.125) {
            vans = "Size 12";
        }
    }
    // Finding FRESHLY PICKED SOFT SOLES Shoe Size
    if(footLength >= 4) {
        if(footLength <= 3.5) {
            freshlyPickedSoftSoles = "Size 0";
        }else if(footLength <= 3.6) {
            freshlyPickedSoftSoles = "Size 1";
        }else if(footLength <= 4.45) {
            freshlyPickedSoftSoles = "Size 2";
        }else if(footLength <= 4.85) {
            freshlyPickedSoftSoles = "Size 3";
        }else if(footLength <= 5.3) {
            freshlyPickedSoftSoles = "Size 4";
        }else if(footLength <= 5.7) {
            freshlyPickedSoftSoles = "Size 5";
        }else if(footLength <= 5.97) {
            freshlyPickedSoftSoles = "Size 6";
        }else if(footLength <= 6.35) {
            freshlyPickedSoftSoles = "Size 7";
        }else if(footLength <= 6.6) {
            freshlyPickedSoftSoles = "Size 8";
        }else if(footLength <= 6.95) {
            freshlyPickedSoftSoles = "Size 9";
        }  
    }
    // Finding FRESHLY PICKED SANDALS Shoe Size
    if(footLength >= 4) {
        if(footLength <= 4.5) {
            freshlyPickedSandals = "Size 3";
        }else if(footLength <= 5) {
            freshlyPickedSandals = "Size 4";
        }else if(footLength <= 5.5) {
            freshlyPickedSandals = "Size 5";
        }else if(footLength <= 5.75) {
            freshlyPickedSandals = "Size 6";
        }else if(footLength <= 6) {
            freshlyPickedSandals = "Size 7";
        }else if(footLength <= 6.25) {
            freshlyPickedSandals = "Size 8";
        }else if(footLength <= 6.5) {
            freshlyPickedSandals = "Size 9";
        }else if(footLength <= 7) {
            freshlyPickedSandals = "Size 10";
        }else if(footLength <= 7.25) {
            freshlyPickedSandals = "Size 11";
        }else if(footLength <= 7.5) {
            freshlyPickedSandals = "Size 12";
        }else if(footLength <= 8) {
            freshlyPickedSandals = "Size 13";
        } 
    }
    // Finding CONVERSE Shoe Size
    if(footLength >= 3.25) {
        if(footLength <= 3.667) {
            converse = "Size 1";
        }else if(footLength <= 4) {
            converse = "Size 2";
        }else if(footLength <= 4.143) {
            converse = "Size 2.5";
        }else if(footLength <= 4.333) {
            converse = "Size 3";
        }else if(footLength <= 4.5) {
            converse = "Size 3.5";
        }else if(footLength <= 4.667) {
            converse = "Size 4";
        }else if(footLength <= 4.8) {
            converse = "Size 4.5";
        }else if(footLength <= 5) {
            converse = "Size 5";
        } else if(footLength <= 5.167) {
            converse = "Size 5.5";
        }else if(footLength <= 5.333) {
            converse = "Size 6";
        }else if(footLength <= 5.5) {
            converse = "Size 6.5";
        }else if(footLength <= 5.667) {
            converse = "Size 7";
        }else if(footLength <= 5.833) {
            converse = "Size 7.5";
        }else if(footLength <= 6) {
            converse = "Size 8";
        }else if(footLength <= 6.143) {
            converse = "Size 8.5";
        }else if(footLength <= 6.286) {
            converse = "Size 9";
        }else if(footLength <= 6.5) {
            converse = "Size 9.5";
        }else if(footLength <= 6.667) {
            converse = "Size 10";
        }
    }
    // Finding SEE KAI RUN Shoe Size
    if(footLength >= 3.85) {
        if(footLength <= 4.125) {
            seeKaiRun = "Size 3";
        }else if(footLength <= 4.375) {
            seeKaiRun = "Size 3.5";
        }else if(footLength <= 4.5) {
            seeKaiRun = "Size 4";
        }else if(footLength <= 4.625) {
            seeKaiRun = "Size 4.5";
        }else if(footLength <= 4.75) {
            seeKaiRun = "Size 5";
        } else if(footLength <= 5) {
            seeKaiRun = "Size 5.5";
        }else if(footLength <= 5.125) {
            seeKaiRun = "Size 6";
        }else if(footLength <= 5.25) {
            seeKaiRun = "Size 6.5";
        }else if(footLength <= 5.5) {
            seeKaiRun = "Size 7";
        }else if(footLength <= 5.625) {
            seeKaiRun = "Size 7.5";
        }else if(footLength <= 5.75) {
            seeKaiRun = "Size 8";
        }else if(footLength <= 6) {
            seeKaiRun = "Size 8.5";
        }else if(footLength <= 6.125) {
            seeKaiRun = "Size 9";
        }else if(footLength <= 6.25) {
            seeKaiRun = "Size 9.5";
        }else if(footLength <= 6.375) {
            seeKaiRun = "Size 10";
        }
    }
    // Finding PAYLESS Shoe Size
    if(footLength >= 3.15) {
        if(footLength <= 3.5625) {
            payless = "Size 1";
        }else if(footLength <= 3.875) {
            payless = "Size 2";
        }else if(footLength <= 4.25) {
            payless = "Size 3";
        }else if(footLength <= 4.5625) {
            payless = "Size 4";
        }else if(footLength <= 4.875) {
            payless = "Size 5";
        } else if(footLength <= 5.0625) {
            payless = "Size 5.5";
        }else if(footLength <= 5.25) {
            payless = "Size 6";
        }else if(footLength <= 5.375) {
            payless = "Size 6.5";
        }else if(footLength <= 5.625) {
            payless = "Size 7";
        }else if(footLength <= 5.75) {
            payless = "Size 7.5";
        }else if(footLength <= 5.875) {
            payless = "Size 8";
        }else if(footLength <= 6.0625) {
            payless = "Size 8.5";
        }else if(footLength <= 6.25) {
            payless = "Size 9";
        }else if(footLength <= 6.375) {
            payless = "Size 9.5";
        }else if(footLength <= 6.5625) {
            payless = "Size 10";
        }
    }
    document.getElementById("pedipedOutput").innerHTML="pediped: " + pediped;
    document.getElementById("strideRiteOutput").innerHTML="Stride Rite: " + strideRite;
    document.getElementById("miniMelissaOutput").innerHTML="Mini Melissa: " + miniMelissa;
    document.getElementById("vansOutput").innerHTML="Vans: " + vans;
    document.getElementById("freshlyPickedSoftSolesOutput").innerHTML="Freshly Picked - Soft Soles: " + freshlyPickedSoftSoles;
    document.getElementById("freshlyPickedSandalsOutput").innerHTML="Freshly Picked - Sandals: " + freshlyPickedSandals;
    document.getElementById("converseOutput").innerHTML="Converse: " + converse;
    document.getElementById("seeKaiRunOutput").innerHTML="See Kai Run: " + seeKaiRun;
    document.getElementById("paylessOutput").innerHTML="Payless: " + payless;
} //end main

const button = document.querySelector("button");

button.addEventListener("click", calculateSize);