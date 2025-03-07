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