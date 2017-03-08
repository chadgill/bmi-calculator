
function BMIcalc() {
    var height = document.bmiForm.height.value
    var weight = document.bmiForm.weight.value
    if (weight > 0 && height > 0) {
        var bmiScore = (weight/(height*height))*10000
        var bmiFix = bmiScore.toFixed(2);
        document.bmiForm.BMI.value = bmiFix

        if(bmiScore < 18.5) {
            document.bmiForm.bmiDescription.value = "You are underweight."
        }
        if (bmiScore >= 18.5 && bmiScore < 25) {
            document.bmiForm.bmiDescription.value = "You are normal weight."
        }
        if (bmiScore >=25 && bmiScore < 30) {
            document.bmiForm.bmiDescription.value = "You are overweight."
        }
        if (bmiScore > 30) {
            document.bmiForm.bmiDescription.value = "You are obese."
        }
    } else {
            Alert.alert("Wrong Value",
                        "Please make sure you have entered a correct value",
                        [
                            {text: "retry", onPress: () => console.log("retry pressed")},
                        ]
                         );
            } 
    var BMIcolour = function () {
        if (bmiScore < 18.5) {
            document.bmiForm.BMI.value = "yellow"
        } 
        if (bmiScore >= 18.5 && bmiScore < 25) {
            document.bmiForm.BMI.value = "green"
        }
        if (bmiScore >=25 && bmiScore < 30) {
            document.bmiForm.BMI.value = "yellow"
        }
        if (bmiScore > 30) {
            document.bmiForm.BMI.value = "red"
        }
    }
    }  


