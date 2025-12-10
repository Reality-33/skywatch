
const nav = document.querySelector(".header-links");
const menuBtn = document.querySelector("#menu-toggle");
menuBtn.addEventListener('click',()=>{
    nav.classList.toggle('show-links');
});

let userPassword= document.querySelector(".userpassword");
let userName = document.querySelector(".username");
const submit = document.querySelector(".submit");

submit.addEventListener(`click`,function(){
   userPassword.value;
    userName.value;
    if (userPassword.value="") {
       console.log("wrong") 
    }
})

document.getElementById("eventForm").addEventListener("submit", async e => {
  e.preventDefault();

  const token = localStorage.getItem("token"); // set on login

  const data = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    date: document.getElementById("date").value,
    location: document.getElementById("location").value,
    category: document.getElementById("category").value
  };

  const res = await fetch("http://localhost:5000/events/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});
