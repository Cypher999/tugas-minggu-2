document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let site = document.getElementById("site").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let table = document.getElementById("passwordList");
    let row = table.insertRow();
    row.innerHTML = `
        <td>${site}</td>
        <td>${username}</td>
        <td><input type="password" value="${password}" readonly></td>
        <td class="actions">
            <button onclick="deleteRow(this)">❌</button>
        </td>
    `;

    document.getElementById("passwordForm").reset();
});

function deleteRow(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generatePassword(){
    const length = getRandomInteger(8,100);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]|/.,<>';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters[getRandomInteger(0,characters.length)];
    }
    return password
}

document.querySelector('.generatepassword-button').onclick=function(){
    document.getElementById("password").value=""
    document.getElementById("password").value=generatePassword();
}