function calcGPA(){
	
	var classes = 0;
	var total = 0;
	var onlvlClasses = 0;
	var currentGPA;
	if (p1.value > 0 && !isNaN(p1.value)) {
		classes += 1;
		total += parseFloat(6 - (100 - p1.value)/10);
	}
	if (p2.value > 0 && !isNaN(p2.value)) {
		classes += 1;
		total += parseFloat(6 - (100 - p2.value)/10);
	}
	if (p3.value > 0 && !isNaN(p3.value)) {
		classes += 1;
		total += parseFloat(6 - (100 - p3.value)/10);
	}
	if (p4.value > 0 && !isNaN(p4.value)) {
		classes += 1;
		total += parseFloat(6 - (100 - p4.value)/10);
	}
	if (p5.value > 0 && !isNaN(p5.value)) {
		classes += 1;
		total += parseFloat(6 - (100 - p5.value)/10);
	}
	if (p6.value > 0 && !isNaN(p6.value)) {
		classes += 1;
		total += parseFloat(6 - (100 - p6.value)/10)
	}
	if (p7.value > 0 && !isNaN(p7.value)) {
		classes += 1;
		total += parseFloat(6 - (100 - p7.value)/10);
	}
	if (p8.value > 0 && !isNaN(p8.value)) {
		classes += 1;
		total += parseFloat(6 - (100 - p8.value)/10);
	}
	if (onlvlnum.value > 0 && !isNaN(onlvlnum.value)) {
		onlvlClasses = parseInt(onlvlnum.value);
	}
	if (currGPA.value > 0 && !isNaN(currGPA.value)) {
		currentGPA = parseFloat(currGPA.value);
	}
	var weightedGPA = (total - onlvlClasses)/classes;
	var finalwGPA;
	if (isNaN(currentGPA)){
		finalwGPA = (weightedGPA).toFixed(4);
	}else{
		finalwGPA = ((weightedGPA+currentGPA)/2).toFixed(3);
	}

	if(isNaN(finalwGPA) == true){
		finalwGPA = "";
		var errorCSS = {
        	'border': '3px solid red',
        	'border-radius': '8px'
        }
		var adjustCSS = {
		'top' : '10px'
		}
		$("#redline").css(errorCSS);
		$("#l1").css(adjustCSS);
		$("#1").show();
	}else{
		var errorCSS = {
        	'border': 'none',
        }
		var adjustCSS = {
		'top' : '-40px'
		}
		$("#redline").css(errorCSS);
		$("#l1").css(adjustCSS);
		$("#1").hide();
		if (finalwGPA < 0){
			finalwGPA = 0.000;
		}
	}
	var pos = (l1.offsetTop + 200).toString() + "px";
	var posCSS = {
		'top' : 'pos'
	}
	$("#div3").css(posCSS);
	$('#a1').html(String(finalwGPA));
}

function resultAvg() {
		
	var weights = [];
	var avgs = [];
	
	if ($("#w1").val() > 0 && !isNaN($("#w1").val()) && $("#g1").val() > 0 && !isNaN($("#g1").val())){
		weights.push($("#w1").val());
		avgs.push($("#g1").val());
	}	
	if ($("#w2").val() > 0 && !isNaN($("#w2").val()) && $("#g2").val() > 0 && !isNaN($("#g2").val())) {
		weights.push($("#w2").val());
		avgs.push($("#g2").val());
	}
	if ($("#w3").val() > 0 && !isNaN($("#w3").val()) && $("#g3").val() > 0 && !isNaN($("#g3").val())) {
		weights.push($("#w3").val());
		avgs.push($("#g3").val());
	}
	if ($("#w4").val() > 0 && !isNaN($("#w4").val()) && $("#g4").val() > 0 && !isNaN($("#g4").val())) {
		weights.push($("#w4").val());
		avgs.push($("#g4").val());
	}
	
	if ($("#w5").val() > 0 && !isNaN($("#w5").val()) && $("#g5").val() > 0 && !isNaN($("#g5").val())) {
		weights.push($("#w5").val());
		avgs.push($("#g5").val());
	}
	var singleGrade = parseFloat($("#wantGrade").val());
	var specweight = parseInt($("#wantCat").val());
	var specnum = parseInt($("#wantNum").val());
	var catAvgs = [];
	var average = 0;
	var count = 0;
	var classFinal = 0;
	for (i = 0; i < weights.length; i++) {
		if (weights[i] == specweight && count == 0) {
			average = (weights[i]/100)*(avgs[i]*specnum + singleGrade)/(specnum + 1);
			count = 1;
		}else {
			average = (weights[i]/100) * avgs[i];
		}
		catAvgs.push(average);
	}
	
	var problem = false;
	
	if(isNaN(specweight) || (specweight < 0)){
		var errorCSS = {
        	'border': '5px solid red'
        }
		$("#wantCat").css(errorCSS);
		problem = true;
	}else{
		var errorCSS = {
        	'border': 'none'
        }
		$("#wantCat").css(errorCSS);
		problem = false;
	}
	if(isNaN(specnum) || (specnum < 0)){
		var errorCSS = {
        	'border': '5px solid red'
        }
		$("#wantNum").css(errorCSS);
		problem = true;
	}else{
		var errorCSS = {
        	'border': 'none'
        }
		$("#wantNum").css(errorCSS);
		problem = false;
	}
	if(isNaN(singleGrade) || (singleGrade < 0)){
		var errorCSS = {
        	'border': '5px solid red'
        }
		$("#wantGrade").css(errorCSS);
		problem = true;
	}else{
		var errorCSS = {
        	'border': 'none'
        }
		$("#wantGrade").css(errorCSS);
		problem = false;
	}
	var wsum = 0;
	for(i = 0; i < weights.length; i++){
		wsum += parseInt(weights[i]);
	}
	if(wsum != 100){
		var errorCSS = {
        	'border': '5px solid red',
			'border-radius':'10px'
        }
		$("#t1").css(errorCSS);
		$("#a2").hide();
		$("#2").show();
		problem = true;
	}else{
		var errorCSS = {
        	'border': 'none'
        }
		$("#t1").css(errorCSS);
		$("#a2").show();
		$("#2").hide();
		problem = false;
	}
	classFinal = Math.round(catAvgs.reduce(function(acc, val) { return acc + val; }));
	$('#a2').html(String(classFinal));
	if(!problem){
		x.scrollIntoView();
	}
}

function findGrade(){
	var weights = [];
	var avgs = [];
	
	if ($("#c1").val() > 0 && !isNaN($("#c1").val()) && $("#s1").val() > 0 && !isNaN($("#s1").val())){
		weights.push($("#c1").val());
		avgs.push($("#s1").val());
	}	
	if ($("#c2").val() > 0 && !isNaN($("#c2").val()) && $("#s2").val() > 0 && !isNaN($("#s2").val())) {
		weights.push($("#c2").val());
		avgs.push($("#s2").val());
	}
	if ($("#c3").val() > 0 && !isNaN($("#c3").val()) && $("#s3").val() > 0 && !isNaN($("#s3").val())) {
		weights.push($("#c3").val());
		avgs.push($("#s3").val());
	}
	if ($("#c4").val() > 0 && !isNaN($("#c4").val()) && $("#s4").val() > 0 && !isNaN($("#s4").val())) {
		weights.push($("#c4").val());
		avgs.push($("#s4").val());
	}
	
	if ($("#c5").val() > 0 && !isNaN($("#c5").val()) && $("#s5").val() > 0 && !isNaN($("#s5").val())) {
		weights.push($("#c5").val());
		avgs.push($("#s5").val());
	}
	var goal = parseInt($("#goal").val());
	var specweight = parseInt($("#wantCat2").val());
	var specnum = parseInt($("#wantNum2").val());
	var catAvgs = [];
	var average = 0;
	var count = 0;
	var need = 0; 
	var rest = 0;
	var thatAvg = 0;
	for (i = 0; i < weights.length; i++) { 
		if (weights[i] != specweight) {
			average = (weights[i]/100) * avgs[i];
			catAvgs.push(average);
		}else{
			thatAvg = avgs[i];
		}		
	}
	if (catAvgs.length < 1){
		rest = 0;
	}else{
		rest = Math.round(catAvgs.reduce(function(acc, val) { return acc + val; }));	
	};
	var end = 0;
	while (end < goal){
		end = rest + ((((specnum * thatAvg)+need)/(specnum+1)) * (specweight/100));
		need++;
	}
	
	var problem = false;
	
	if(isNaN(goal) || (goal < 0)){
		var errorCSS = {
        	'border': '5px solid red'
        }
		$("#goal").css(errorCSS);
		problem = true;
	}else{
		var errorCSS = {
        	'border': 'none'
        }
		$("#goal").css(errorCSS);
		problem = false;
	}
	if(isNaN(specnum) || (specnum < 0)){
		var errorCSS = {
        	'border': '5px solid red'
        }
		$("#wantNum2").css(errorCSS);
		problem = true;
	}else{
		var errorCSS = {
        	'border': 'none'
        }
		$("#wantNum2").css(errorCSS);
		problem = false;
	}
	if(isNaN(specweight) || (specweight < 0)){
		var errorCSS = {
        	'border': '5px solid red'
        }
		$("#wantCat2").css(errorCSS);
		problem = true;
	}else{
		var errorCSS = {
        	'border': 'none'
        }
		$("#wantCat2").css(errorCSS);
		problem = false;
	}
	
	var wsum = 0;
	for(i = 0; i < weights.length; i++){
		wsum += parseInt(weights[i]);
	}
	if(wsum != 100){
		var errorCSS = {
        	'border': '5px solid red',
			'border-radius':'10px'
        }
		$("#t2").css(errorCSS);
		$("#a3").hide();
		$("#3").show();
		problem = true;
	}else{
		var errorCSS = {
        	'border': 'none'
        }
		$("#t2").css(errorCSS);
		$("#a3").show();
		$("#3").hide();
		problem = false;
	}
	if(!problem){
		wantNum2.scrollIntoView();
	}
	$('#a3').html(String(Math.round(need-1)));
}

function pgscroll(input){
	var item = input;
	if(item == "one"){
		var first = document.getElementById("firstcheck");
		first.scrollIntoView();
	}
	if(item == "two"){
		var second = document.getElementById("nextcheck");
		second.scrollIntoView();		
	};
	if(item == "three"){
		var third = document.getElementById("lastcheck");
		third.scrollIntoView();	
	}
}