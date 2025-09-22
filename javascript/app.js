// document.writeln("welcome");
// console.log(10+100);
// alert("welcome");
// prompt('enter a name');
// document.getElementById("divid").innerHTML="<li>Welcome</li>";
// function printdata()
// {
// let user=document.getElementById('uname').value;
// let pass=document.getElementById('pass').value;
// alert(user+ ",your login is successful");
// document.getElementById('uname').value="";
// document.getElementById('pass').value="";
// }
// let checkuser=()=>{
//     let user=document.getElementById('uname').value;
//     let p1=document.getElementById('pid1');
//     if(user.length>6){
//         p1.innerHTML="good";
//         p1.style.color="green";
//     }
//     else
//     {
//         p1.innerHTML="user name must be 8 characters";
//         p1.style.color="red";
//     }

    

// }
// let checkpass=()=>{
//     let pass=document.getElementById('pass').value;
//     let p2=document.getElementById('pid2');
//     if(pass.length>5){
//         p2.innerHTML="strong password";
//         p2.style.color="green";
//     }
//     else
//     {
//         p2.innerHTML="password must be 8 characters";
//         p2.style.color="red";
//     }

    

// }
let todoList = () => {
    let data = document.getElementById('todo').value;
    let d1 = document.getElementById('result');
    if (data.trim() === "") {
        d1.innerHTML = "Please enter a todo item.";
        d1.style.color = "red";
        return;
    }
    // Use localStorage for persistence
    let arr = JSON.parse(localStorage.getItem('todos') || '[]');
    arr.push(data);
    localStorage.setItem('todos', JSON.stringify(arr));
    d1.innerHTML = arr.map((item, idx) => `<li>${item}</li>`).join('');
    d1.style.color = "#363D73";
    document.getElementById('todo').value = "";
}