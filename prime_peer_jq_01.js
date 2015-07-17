//Utility function
//A simple random number generator
var rPerson = [];
var femaleNames = ["Adi", "Beru", "Asajj", "Droopy", "Evie", "Aurra", "Greeta", "Padme", "Izzy", "Mara", "Satele", "Leia", "Zam", "Lumiya", "Jaina", "Ismar", "Tyrekka", "Anni", "Vyn", "Ara", "Leanna", "Caranna", "Ylanda"];
var maleNames = ["Ackbar", "Bib", "Count", "Dengar", "Eeth", "Lando", "Lobot", "Han", "IG-88", "Jabba", "Thrawn", "Anakin", "Kyp", "Kit", "Chewy", "Talon", "Obi-Wan", "Plo", "Zayne", "Mace", "Joruus", "Victor", "Ki-Adi", "Jacen", "Jango"];
var lastNames = ["Skywalker", "Bane", "Calrissian", "Jade", "Darklighter", "Durron", "Organa", "Fett", "Gallia", "the Hutt", "Iglu", "Windu", "Dalaa", "Wessel", "Koth", "Lars", "McCool", "Nass", "Sing", "Koon", "Karrde", "Palpatine", "Quadinaros", "Ryan", "Solo", "Tarkin", "Dooku", "Ventress", "Bane", "Rendar", "Antilles", "Fisto"];

$(document).ready(function(){
	$("#randomize").on('click', function(event){
		var randomNameL = lastNames[Math.floor(Math.random()*lastNames.length)];//randomizes a new last name 1st
		rPerson[3] = gender(randomNumber(1, 2));//randomizes the gender next, BEFORE the gender-sensitive first name
		rPerson[0] = nameGender() + " " + randomNameL;//randomizes and stores the first nameGender
		rPerson[1] = randomNumber(1, 100); //randomizes the age
		rPerson[2] = randomNumber(1, 300); // randomizes the weight
		$("#outputPeople").children().remove(); $("#outputPeople1").children().remove(); $("#outputPeople2").children().remove(); $("#outputPeople3").children().remove();
		$("#outputPeople").prepend('<p>Name: ' + rPerson[0] +'</p>'); $("#outputPeople1").prepend('<p>Age: ' + rPerson[1] +'</p>'); $("#outputPeople2").prepend('<p>Weight: ' + rPerson[2] +' pounds</p>'); $("#outputPeople3").prepend('<p>Gender: ' + rPerson[3] +'</p>');
	}); // ends randomize
}); // end document ready

function gender(x){	
	if (x === 2) {
		return "Male";								
	} else {
		return "Female";				
	}
}

function nameGender(x){	//the conditional function that returns a male female first-name using random gender as an argument
	var randomNameF = femaleNames[Math.floor(Math.random()*femaleNames.length)];
	var randomNameM = maleNames[Math.floor(Math.random()*maleNames.length)];
	if(rPerson[3] === "Male"){
		rPerson[0] = randomNameM;
		return rPerson[0];
	}else {
		rPerson[0] = randomNameF;
		return rPerson[0];
	}
}
		
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
} // basic random number function


