const bodyMI = document.getElementById("btn")

bodyMI.addEventListener ('click', () => {
    let weight = document.getElementById ("weight").value;
    let height = document.getElementById ("height").value;
    let BMIvalue = (weight/(Math.pow(height,2)))
    BMIvalue = Math.floor (BMIvalue);


    let fResult = document.getElementById ("result");
    // result.value = BMIvalue;

        
            

    if (BMIvalue < 18.5) {
        result.value = ("Your BMI is" +" "+ BMIvalue + " " + ", so you are underweight") 
    }

    if (BMIvalue >= 18.5 && BMIvalue <= 24.9) {
        result.value = ("Your BMI is" +" "+ BMIvalue + ", so you are normal") 
    }

    if (BMIvalue >= 25 && BMIvalue <= 29.9) {
        result.value = ("Your BMI is" +" "+ BMIvalue + ", so you are overweight") 
    }

    if (BMIvalue >= 30 && BMIvalue <= 34.9) {
        result.value = ("Your BMI is" +" "+ BMIvalue + ", so you are obese") 
    }

    else if (BMIvalue > 35) {
        result.value = ("Your BMI is" +" "+ BMIvalue + ", so you are extremely obese") 
    }

});