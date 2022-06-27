"use strict";
let baasLevens = 80
let jouLevens = 100
let baasKracht = 5
let jouKracht = 4


document.getElementById("slag").addEventListener("click", attack)
document.getElementById("schild").addEventListener("click", defend)
try{
if (baasLevens < 60) {
    jouKracht = jouKracht + 60
}
 } 
 catch {
console.log("code is kapot!")
 }
    function attack(){
        let attack=Math.floor(Math.random()*20 + jouKracht);
        let bossAttack=Math.floor(Math.random()*20 + baasKracht);
        baasLevens = baasLevens - attack;
        jouLevens = jouLevens - bossAttack;

        let hours = (new Date()).getHours();
        let minutes = (new Date()).getMinutes();
        let seconds = (new Date()).getSeconds();

        console.log(" ")
        console.log('last action at time: ' + hours + ":" + minutes + ":" + seconds)
        console.log("---------------------------")
        console.log('%c!!! -->your turn<-- !!!', "color:violet")
        console.warn('je hebt ' + attack + ' damage gedaan');
        console.log('%cde eindbaas heeft nog ' + baasLevens + " levens over", "color:red");
        console.log('')
        console.log('%c!!! -->Boss turn<-- !!!', "color:yellow")
        console.warn('je hebt ' + bossAttack + ' damage ontvagen');
        console.log('%cjij hebt nog ' + jouLevens + " levens over", "color:green");
        console.log("---------------------------")
        console.log(" ")

        if (Number(jouLevens) < Number(0)) {
            window.alert("ohnee... je bent tenonder gegaan. Ik breng je weer terug tot leven!")
            baasLevens = 80
            jouLevens = 100
            baasKracht = 5
            jouKracht = 4
            console.log("%c---------------------------", "color:violet")
            console.log('%cGameRestart: ' + hours + ":" + minutes + ":" + seconds, "color:violet")
            console.log("%c---------------------------", "color:violet")
        }
        if (Number(baasLevens) < Number(0)) {
            window.alert("Goed gedaan! Je hebt de eindbaas verslagen!!")
            baasLevens = 80
            jouLevens = 100
            baasKracht = 5
            jouKracht = 4
            console.log("%c---------------------------", "color:violet")
            console.log('%cGameRestart: ' + hours + ":" + minutes + ":" + seconds, "color:violet")
            console.log("%c---------------------------", "color:violet")
        }
        }

       function defend(){
        let hours = (new Date()).getHours();
        let minutes = (new Date()).getMinutes();
        let seconds = (new Date()).getSeconds();

     

        
            let bossAttack=Math.floor(Math.random()*20); // als getal 20 insta kill eindbaas, als getal 1tot5 damage krijgen anders beschermt.
            if (bossAttack == 20) {
                console.log("Je blokkeert de aanval van de eindbaas... in dit process struikeld de eindbaas en word hij gespiest door zijn eigen wapen.")
                baasLevens = 0
                console.log(bossAttack)
            }  
            else if (bossAttack < 5) {
                console.log("DIE KLAP WAS HARD! Je voelt de aanval nog een beetje door je schild dreunen.")
                jouLevens = jouLevens - bossAttack;
                console.log(bossAttack)
            }
            else {
                console.log("Pfew, je hebt de aanval opgevangen met je schild!")
                console.log(bossAttack)
            }

            console.log(" ")

          

            }
            

            
            if (Number(jouLevens) < Number(0)) {
                window.alert("ohnee... je bent tenonder gegaan. Ik breng je weer terug tot leven!")
                baasLevens = 80
                jouLevens = 100
                baasKracht = 5
                jouKracht = 4
                console.log("%c---------------------------", "color:violet")
                console.log('%cGameRestart: ' + hours + ":" + minutes + ":" + seconds, "color:violet")
                console.log("%c---------------------------", "color:violet")
                console.log(" ")
            }
            if (Number(baasLevens) < Number(0)) {
                window.alert("Goed gedaan! Je hebt de eindbaas verslagen!!")
                baasLevens = 80
                jouLevens = 100
                baasKracht = 5
                jouKracht = 4
                console.log("%c---------------------------", "color:violet")
                console.log('%cGameRestart: ' + hours + ":" + minutes + ":" + seconds, "color:violet")
                console.log("%c---------------------------", "color:violet")
                console.log(" ")
            }

