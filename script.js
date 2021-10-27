/*
* Random Person Picker
*/

//var numbers= "123456";

function diceRoll()
    {
        var result = Math.round(Math.random() * 12);
        if(result === 0)
            {
                var result = 1;
            }
        else
            {
                return result;
            }
    }

function showDice()
    {
        document.getElementById('dice').innerHTML= '<p class="dice">' + diceRoll() + '</p>';
    }

function refresh()
    {
      document.getElementById('dice').innerHTML="";
      showDice(); 
    }

window.onload = function()
    {
        showDice();
    }