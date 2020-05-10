        // Question #1
        function loadProgram() {
            var userInput = document.getElementById("user_input").value
            document.getElementById("user_notes").innerHTML = userInput
        }


        // Question #2
        function sumItUp() {
            var numberInput = parseInt(document.getElementById('user_input2').value);

            if (isNaN(numberInput)) {
                window.alert("Invalid number. Please try again.");
            }

            var sum = 0;

            for (var start = 1; start <= numberInput; start++) {
                sum += start;
            }

            document.getElementById("output2").innerHTML = "The sum of all numbers up to and including " + numberInput + " is " + sum + "."

        }


        // Question #3

        function addItUp(numberInput1, numberInput2) {
            var numberInput1 = parseInt(document.getElementById('number1').value);
            var numberInput2 = parseInt(document.getElementById('number2').value);
            var add = numberInput1 + numberInput2;
            document.getElementById("output3").innerHTML = add
        }

        //Stretch problem 1
        const subtract = function subtract() {
            let numberInput3 = parseInt(document.getElementById('number3').value);
            let numberInput4 = parseInt(document.getElementById('number4').value);
            let answer = numberInput3 - numberInput4;
            document.getElementById("output4").innerHTML = answer;
        }

        //Stretch problem 2
        const multiply = () => {
            let numberInput5 = parseInt(document.getElementById('number5').value);
            let numberInput6 = parseInt(document.getElementById('number6').value);
            let answer2 = numberInput5 * numberInput6;
            document.getElementById("output5").innerHTML = answer2;
        }

