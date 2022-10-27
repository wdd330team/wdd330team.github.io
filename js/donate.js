import DataSource from "./data-source.js";

let age = document.getElementById("age")
let gender = document.getElementById("gender")
let breed = document.getElementById("breed")
let size = document.getElementById("size")
let imageUrl = document.getElementById("ImageUrl")
let personality = document.getElementById("personality")
let specialgift = document.getElementById("specialgift")
const submitHandler = async(e) => {
    e.preventDefault()
    let dataSource = new DataSource();
    let data = await dataSource.init();
    let dog = {}
    dog.age = age.value 
    dog.size = size.value
    dog.gender = gender.value
    dog.breed = breed.value
    dog.imageUrl = imageUrl.value
    dog.personality = personality.value
    dog.specialgift = specialgift.value
    dog.isAdopted = "false"
    let _id = 1 + data.dogs[ data.dogs.length - 1].id
    dog.id = _id
    data.dogs[data.dogs.length] = dog;
    console.log(data.dogs)
    localStorage.setItem("data",JSON.stringify(data))
    console.log(localStorage.getItem("data"))
    window.location.replace("/pages/order-confirm.html")
}
let submitBtn = document.querySelector("#button")
submitBtn.addEventListener("click", submitHandler)