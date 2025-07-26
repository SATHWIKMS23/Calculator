function calculator(userInput) {
        if (userInput === 'clear') {
            resetDisplay();
        } else if (userInput === 'backSpace') {
            backSpaceDisplay();
        } else if (userInput === '=') {
            calculate();
        } else {
            showDisplay(userInput);
        }
    }
    function resetDisplay() {
        const clear = document.querySelector('#display');
        clear.innerText = '';
    }

    function backSpaceDisplay() {
        const display = document.querySelector('#display');
        display.innerText = display.innerText.slice(0, -1);
    }

    function showDisplay(userInput) {
        const display = document.querySelector('#display');
        display.innerText += userInput;
    }

    function calculate() {
        const display = document.querySelector('#display');
        let expression = display.innerText;

        expression = expression.replace(/X/g, '*');

        try {
            const result = eval(expression); 
            display.innerText = result;
        } catch (error) {
            display.innerText = 'Error';
        }
    }