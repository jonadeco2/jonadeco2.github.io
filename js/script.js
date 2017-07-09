$(function() {
    //Json inladen
   $.getJSON('https://datatank.stad.gent/4/cultuursportvrijetijd/bibliotheekreservatietijd.json', function(data) {
       //Selecteren data naar console
       console.log(data[0].ExemplaarID);
       //Data tonen op pagina
       var text = document.getElementById("test").innerHTML = data[0].ExemplaarID;
   });
});