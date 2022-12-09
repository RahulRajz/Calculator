let buttons = document.querySelectorAll('.button');
let input= document.querySelector('input');
let string = "";
Array.from(buttons).forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML == 'C'){
            string = ""
            input.value = string;
        }else if(e.target.innerHTML =='Back'){
            string=string.slice(0,-1);
            input.value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            input.value=string;
        }
    })
})
