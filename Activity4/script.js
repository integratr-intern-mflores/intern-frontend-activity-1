function addTextbox() {
    const inputContainer = document.getElementById('input-container');
    const newTextBox = document.createElement('input');

    newTextBox.type = 'text';
    newTextBox.name = 'input2';
    newTextBox.id = 'input2';
    newTextBox.placeholder = 'Type Something Here';

    inputContainer.appendChild(newTextBox);
}