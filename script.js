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
            <button onclick="togglePassword(this)">👁</button> 
            <button onclick="deleteRow(this)">❌</button>
        </td>
    `;

    document.getElementById("passwordForm").reset();
});

function togglePassword(button) {
    let input = button.parentElement.parentElement.cells[2].querySelector("input");
    input.type = input.type === "password" ? "text" : "password";
}

function deleteRow(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}