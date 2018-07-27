function makePhrases() {
    var words1 = ["Добрый день,", "Здравствуйте,", "Привет,", "Приветствую,", "Приветик,"];
     var words2 = ["сегодня", "завтра", "послезавтра", "вчера", "позавчера"];
    var words3 = ["понедельник", "вторник", "среда", "четверг", "пятница"];
    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);
    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3]; 
document.write("<h3>"+phrase+"</h3>");
}
makePhrases();

function statistik() {
    var kisl = [60,60,30,0,60];
    var coffee = ["efiopia", "ruanda", "peru", "черная карта", "brazilia"];

    function coffees(kisl,coffee) {

    var coffeekisl;
    var highKisl = 0;

    for (var i = 0, b=i+1; i < kisl.length; i++, b++) {
        coffeekisl ="<p>"+ "<br>" +'<span class="what">' +"<br>"+ " Номер сорта " +"</span>"+ "№" + b + '<span class="what">'+ "<br>" +"Название сорта: "+ "</span>" + coffee[i] + '<span class="what">'+ "<br>"+" Кислотность: "+"</span>" + kisl[i]+"<br></p>";
        document.write(coffeekisl);
            };
           
    for (var c=0; c < kisl.length; c++){
                if (kisl[c]>highKisl){
                    highKisl=kisl[c]
                };
            }
            return highKisl;
            
            
        };
       
        function countBestCoffee(kisl, highKisl){
            var bestCoffee = [];

            for (var i = 0; i < kisl.length; i++) {
                if (kisl[i] == highKisl) {
                    bestCoffee.push(i);
                }
            }
            return bestCoffee;
        };
        var highKisl = coffees(kisl, coffee);
        document.write("<br>"+"Наивысшая кислотность равна: "+ highKisl);
        var bestCoffee = countBestCoffee(kisl, highKisl);
        document.write("<br>"+"Сорта с наивысшей кислотностью: " + bestCoffee + " шт");
    
}
statistik();
