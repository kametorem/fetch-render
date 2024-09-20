import { cardComponent } from "./cardComponents.js";

let renderArea = document.querySelector("#render-area")

let BASE_URL = "https://api.escuelajs.co/api/v1/"

const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}users/`);
        const data = await response.json();
        data.map((user) => {
            renderArea.innerHTML += cardComponent(user)
        })
    } catch (error) {
        console.log(error)
    }
}
getUsers()