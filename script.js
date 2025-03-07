function loadData(){
    let db=localStorage.getItem('password-manager')
    let table = document.getElementById("passwordList");
    if(db!=null){
        db=JSON.parse(db)
        db.forEach((item,index)=>{
            let row = table.insertRow();
            row.innerHTML = `
                <td>${item.site}</td>
                <td>${item.username}</td>
                <td>${item.password}</td>
                <td class="actions">
                    <button onclick="deleteRow(${index})">❌</button>
                </td>
            `;
        })
    }
}
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let site = document.getElementById("site").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    const db=localStorage.getItem('password-manager')
    if(db===null){
        localStorage.setItem('password-manager',JSON.stringify([{
            site,username,password
        }]))
    }
    else{
        let data=JSON.parse(db)
        data.push({site,username,password})
        localStorage.setItem('password-manager',JSON.stringify(data))
    }
    loadData()
    document.getElementById("passwordForm").reset();
});

function deleteRow(currIndex) {
    let db=localStorage.getItem('password-manager')
    if(db!=null){
        db=JSON.parse(db)
        db=db.filter((item,index)=>(index!=currIndex))
    }
    loadData()
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generatePassword(){
    const length = getRandomInteger(8,100);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]|/.,<>';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters[getRandomInteger(0,characters.length-1)];
    }
    return password
}

document.querySelector('.generatepassword-button').onclick=function(){
    document.getElementById("password").value=""
    document.getElementById("password").value=generatePassword();
}

loadData();