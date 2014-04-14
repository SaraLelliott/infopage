/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calculateBmi() {
    var weight = document.bmiForm.weight.value;
    var height = document.bmiForm.height.value;
    /* bound user input for sanity */
    if (!(500 > weight > 0 && 1000 > height > 0)) {
        alert("Please Fill in everything correctly");
    }
    else {
        var finalBmi = weight / (height / 100 * height / 100);
        document.bmiForm.bmi.value = finalBmi;
        if (finalBmi < 18.5) {
            document.bmiForm.meaning.value =
                    "You are considered to be underweight.";
        }
        if (finalBmi > 18.5 && finalBmi < 25) {
            document.bmiForm.meaning.value =
                    "You are considered to be in the healthy weight range.";
        }
        if (finalBmi > 25) {
            document.bmiForm.meaning.value =
                    "You are considered to be overweight.";
        }
    }
}