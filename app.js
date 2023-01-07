let displayBox = document.querySelector(".display");

        function showDisplay(x) {
            let current = displayBox.innerHTML;
			console.log(current);
            let operator = ["+","-","*","%","/","."];
            let last = current[current.length-1];

            if(displayBox.innerHTML == 0){
                return  displayBox.innerHTML = x;
            }else if(operator.includes(x)&&operator.includes(last)){
                return displayBox.innerHTML = `${current.substring(0,current.length-1)}${x}`;
            }
            return displayBox.innerHTML += x;
        }
        function calculate() {
            let current = displayBox.innerHTML;
            displayBox.innerHTML = eval(current);
        }
        function allClear() {
            displayBox.innerHTML = 0;
        }
        function clearLast() {
            let current = displayBox.innerHTML;
            if(current.length == 1){
                displayBox.innerHTML = 0;
            }else{
                displayBox.innerHTML = current.substring(0,current.length-1);
            }
            
        }