let input1 = document.querySelector("#inputBox1");
let input2 = document.querySelector("#inputBox2");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input1.setAttribute("style", "font-size: 25px", "margin-bottom: 10px");
            input2.setAttribute("style", "display: block");
            input2.value = `= ${string}`;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input1.value = string;
            input2.value = string;
            input1.setAttribute("style", "font-size: 40px");
            input2.setAttribute("style", "display: none");
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input1.value = string;
        }
        else {
            string += e.target.innerHTML;
            input1.value = string;
        }
    })
})