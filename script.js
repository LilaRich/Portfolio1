var pDaily  = document.getElementById('dailyAdvice');

function fetchAdvice()
{
    $.ajax({
        url: "https://api.adviceslip.com/advice",
        type: "get",
        dataType: "json",
        
            success: function (adv) {
            console.log(adv);

            pDaily.innerHTML='"' + adv.slip.advice + '"' ;
            }
        }
        )
}
fetchAdvice();
