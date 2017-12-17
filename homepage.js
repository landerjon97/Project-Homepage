/*
Project: Home Page
Author: Jonathan Lander
Other: Create web page for launching websites
 */

//array is used throughout
var circles= [];
//canvas is used through out
var c;
//context is used throughout
var ctx;
/*************************************************************************************************************/
//MAIN
/*************************************************************************************************************/
window.onload = function(){
    //random quote generator
    var pick = Math.floor(Math.random()* 19);

    //get canvas to c
    c = document.getElementById("can");
    //get and place random quote
    quote(pick);
    //get drawing
    ctx = c.getContext("2d");
    //able to be resized
    window.addEventListener('resize',resizeCanvas, false);
    //call it just in case
    resizeCanvas();
    //refresh set to 30 (probably a better way to do this
    setInterval(draw,30);

}
/*************************************************************************************************************/
//resizing
/*************************************************************************************************************/
function resizeCanvas(){
    c.width = window.innerWidth;
    c.height = window.innerHeight;

}
/*************************************************************************************************************/
//drawing
/*************************************************************************************************************/
function draw()
{
    //clears the circles
    ctx.clearRect(0,0,c.width, c.height);
    //save ctx so drawing is cleaner
    ctx.save();
    //randomly make one based on a random value
    var makeOne = Math.floor(Math.random() * 30);
    //if random value is 1 make a circle
    //regulates the number of circles. more the power consumption
    if(makeOne== 1 && circles.length<= 150){
        //pushing a new circle to the circles array
        circles.push(new DrawCircles());
    }
    //DRAWING THIS MAKES IT SLOW AND USES A LOT OF POWER
    for(var i = 0; i < circles.length; i++){
        //go through circles if it above the visible screen remove it off of the array
         if(circles[i].start >= c.height + circles[i].radius*2){
             circles.splice(i,1,new DrawCircles());
         }
         //draw new one
         else{
             circles[i].drawIt();
         }
     }
    //restore back to drawing because arcs can have weird side effects
    ctx.restore();
}
/*************************************************************************************************************/
//random quotes I added 40 quotes that can be randomly selected and placed at top figured that enough
/*************************************************************************************************************/

function quote(num) {
    var q1 = "YOU CAN GET MORE WITH A KIND WORD AND A GUN THAN YOU CAN WITH A KIND WORD ALONE.<br>" +
        " AL CAPONE";
    var q2 = "I SHALL NOT WASTE MY DAYS IN TRYING TO PROLONG THEM.<br>" +
        " IAN L. FLEMING";
    var q3 = "WHENEVER YOU SEE A SUCCESSFUL PERSON YOU ONLY SEE THE PUBLIC GLORIES, NEVER THE PRIVATE SACRIFICES TO REACH THEM.<br> VAIBHAV SHAH";
    var q4 = "TAKE ALL THE RULES AWAY. HOW CAN WE LIVE IF WE DO NOT CHANGE?<br>" + " BEYONCE";
    var q5 = "EACH PROBLEM THAT I SOLVED BECAME A RULE WHICH SERVED AFTERWARDS TO SOLVE OTHER PROBLEMS. <br>RENE DESCARTES";
    var q6 = "IF OPPORTUNITY DOES NOT KNOCK, BUILD A DOOR.<br>" +
        " MILTON BERLE";
    var q7 = "WHEN YOU ENCOUNTER DIFFICULTIES AND CONTRADICTIONS, DO NOT TRY TO BREAK THEM, BUT BEND THEM WITH GENTLENESS AND TIME. <br>SAINT FRANCIS DE SALES";
    var q8 = "I FIND THAT THE HARDER I WORK, THE MORE LUCK I SEEM TO HAVE.<br>" +
        " THOMAS JEFFERSON";
    var q9 = "BUT I DO NOT VIDEOWANT COMFORT. I WANT GOD, I WANT POETRY, I WANT REAL DANGER, I WANT FREEDOM, I WANT GOODNESS. I WANT SIN.<br>" +
        " ALDOUS HUXLEY, BRAVE NEW WORLD";
    var q10 = "I FIND THAT THE HARDER I WORK, THE MORE LUCK I SEEM TO HAVE.<br>" +
        " THOMAS JEFFERSON";
    var q11 = "IT IS KIND OF FUN TO DO THE IMPOSSIBLE.<br>" +
        " WALT DISNEY";
    var q12 = "TO PLAY IT SAFE IS NOT TO PLAY.<br>" +
        " ROBERT ALTMAN";
    var q13 = "IF YOU SET YOUR GOALS RIDICULOUSLY HIGH AND IT IS A FAILURE, YOU WILL FAIL ABOVE EVERYONE ELSES SUCCESS.<br>" +
        " JAMES CAMERON";
    var q14 = "DO WHAT YOU MUST <br>" +
        "AND YOUR FRIENDS WILL ADJUST.<br>" +
        " ROBERT BRAULT";
    var q15 = "THE WHOLE PROBLEM WITH THE WORLD IS THAT FOOLS AND FANATICS ARE ALWAYS SO CERTAIN OF THEMSELVES, AND WISER PEOPLE SO FULL OF DOUBTS.<br>" +
        " BERTRAND RUSSELL";
    var q16 = "WHEN EVERYTHING SEEMS TO BE GOING AGAINST YOU, REMEMBER THAT THE AIRPLANE TAKES OFF AGAINST THE WIND, NOT WITH IT.<br>" +
        " HENRY FORD";
    var q17 = "HAPPY FAMILIES ARE ALL ALIKE; EVERY UNHAPPY FAMILY IS UNHAPPY IN ITS OWN WAY.<br>" +
        " LEO TOLSTOY, ANNA KARENINA";
    var q18= "A SUCCESSFUL MAN IS ONE WHO CAN LAY A FIRM FOUNDATION WITH THE BRICKS OTHERS HAVE THROWN AT HIM.<br>" +
        " DAVID BRINKLEY";
    var q19 = "WHATEVER THE MIND OF MAN CAN CONCEIVE AND BELIEVE, IT CAN ACHIEVE.<br>" +
        " NAPOLEON HILL";
    var q20 = "NO MATTER HOW RICH YOU BECOME, HOW FAMOUS OR POWERFUL, WHEN YOU DIE THE SIZE OF YOUR FUNERAL WILL STILL PRETTY MUCH DEPEND ON THE WEATHER.<br>" +
        " MICHAEL PRITCHARD"
    var q21 = "ALL ARE LUNATICS, BUT HE WHO CAN ANALYZE HIS DELUSION IS CALLED A PHILOSOPHER.<br>" +
        " AMBROSE BIERCE";
    var q22 = "WE BECOME WHAT WE THINK ABOUT.<br>" +
        " EARL NIGHTINGALE";
    var q23 = "WELL DONE IS BETTER THAN WELL SAID.<br>" +
        " BENJAMIN FRANKLIN";
    var q24 = "YOU CAN AVOID REALITY, BUT YOU CANNOT AVOID THE CONSEQUENCES OF AVOIDING REALITY.<br>" +
        " AYN RAND";
    var q25 = "DO ONE THING EVERY DAY THAT SCARES YOU.<br>" +
        " ELEANOR ROOSEVELT";
    var q26 = "WE LOOK UP AT THE SAME STARS, AND SEE SUCH DIFFERENT THINGS.<br>" +
        " GEORGE R.R. MARTIN, A STORM OF SWORDS";
    var q27 = "DON’T EVER TELL ANYBODY ANYTHING. IF YOU DO, YOU START MISSING EVERYBODY.<br>" +
        " J.D. SALINGER, THE CATCHER IN THE RYE";
    var q28 = "I WILL SLEEP WHEN I'M DEAD.<br>" +
        " WARREN ZEVON";
    var q29 = "ONE FINDS LIMITES BY PUSHING THEM.<br>" +
        " HERBET SIMON";
    var q30 = "SUCCESS USUALLY COMES TO THOSE WHO ARE TOO BUSY TO BE LOOKING FOR IT.<br>" +
        " HENRY DAVID THOREAU";
    var q31 = "I HAVE FOUND THAT LUCK IS QUITE PREDICTABLE. IF YOU WANT MORE LUCK, TAKE MORE CHANCES. BE MORE ACTIVE. SHOW UP MORE OFTEN.<br>" +
        " BRIAN TRACY";
    var q32 = "WHEN CHOOSING BETWEEN TWO EVILS, I ALWAYS LIKE TO TRY THE ONE I HAVE NEVER TRIED BEFORE.<br>" +
        " MAE WEST";
    var q33 = "IT IS BETTER TO BE QUOTABLE THAN TO BE HONEST.<br>" +
        " TOM STOPPARD";
    var q33 = "HIS SOUL SWOONED SLOWLY AS HE HEARD THE SNOW FALLING FAINTLY THROUGH THE UNIVERSE AND FAINTLY FALLING, LIKE THE DESCENT OF THEIR LAST END, UPON ALL THE LIVING AND THE DEAD.<br>" +
        " JAMES JOYCE, DUBLINERS, THE DEAD";
    var q34 = "I WILL SLEEP WHEN I'M DEAD.<br>" +
        " WARREN ZEVON";
    switch(num){
        case 1:
            document.getElementById("quoteText").innerHTML = q1;
            break;
        case 2:
            document.getElementById("quoteText").innerHTML = q2;
            break;
        case 3:
            document.getElementById("quoteText").innerHTML = q3;
            break;
        case 4:
            document.getElementById("quoteText").innerHTML = q4;
            break;
        case 5:
            document.getElementById("quoteText").innerHTML = q5;
            break;
        case 6:
            document.getElementById("quoteText").innerHTML = q6;
            break;
        case 7:
            document.getElementById("quoteText").innerHTML = q7;
            break;
        case 8:
            document.getElementById("quoteText").innerHTML = q8;
            break;
        case 9:
            document.getElementById("quoteText").innerHTML = q9;
            break;
        case 10:
            document.getElementById("quoteText").innerHTML = q10;
            break;
        case 11:
            document.getElementById("quoteText").innerHTML = q11;
            break;
        case 12:
            document.getElementById("quoteText").innerHTML = q12;
            break;
        case 13:
            document.getElementById("quoteText").innerHTML = q13;
            break;
        case 14:
            document.getElementById("quoteText").innerHTML = q14;
            break;
        case 15:
            document.getElementById("quoteText").innerHTML = q15;
            break;
        case 16:
            document.getElementById("quoteText").innerHTML = q16;
            break;
        case 17:
            document.getElementById("quoteText").innerHTML = q17;
            break;
        case 18:
            document.getElementById("quoteText").innerHTML = q18;
            break;
        case 19:
            document.getElementById("quoteText").innerHTML = q19;
            break;
        case 0:
            document.getElementById("quoteText").innerHTML = q20;
            break;

    }

}