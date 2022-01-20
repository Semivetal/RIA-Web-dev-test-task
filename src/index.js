import people from "./peopleArray.json";
import FindNarcissusFrom from "./js/narcissus";
import { refs } from "./js/refs";
import "./sass/main.scss";

refs.scanBtn.addEventListener('click', onScan)

function onScan(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'BUTTON') {
        return
    } if (event.target.nodeName === 'BUTTON') {
        FindNarcissusFrom(people);
    }
};