let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = ''; // Changed 'screenvalue' to 'screenValue' for consistency

for (let item of buttons) { // Added 'let' to define 'item'
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText; // Changed 'innertext' to 'innerText'
        console.log('Button is: ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue; // Corrected 'screeenvalue' to 'screenValue'
        }
        else if (buttonText == 'c') {
            screenValue = ''; // Corrected 'screenvalur' to 'screenValue'
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText; // Added this line to handle other button presses
            screen.value = screenValue;
        }
    });
}
