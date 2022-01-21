import people from "./src/peopleArray.json";
import FindNarcissusFrom from "./src/js/narcissus";
import { refs } from "./src/js/refs";
import "./src/sass/main.scss";

refs.scanBtn.addEventListener('click', onScan)

function onScan(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'BUTTON') {
        return
    } if (event.target.nodeName === 'BUTTON') {
        FindNarcissusFrom(people);
    }
};