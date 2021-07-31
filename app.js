const add = document.querySelector("#add")
const button = document.querySelector("button")
const search = document.querySelector("#search")
const ul = document.querySelector("ul")

search.addEventListener('keyup',filt)
button.addEventListener('click',show)

ul.addEventListener('click',drip)
    function drip(e){
        console.log(e)
    }

function show(e){
    var li = document.createElement('li')
    li.innerText = add.value
    
    ul.appendChild(li)
    add.value = ' '

    
}

function filt(){
    let lis = ul.querySelectorAll('li') 
    for(let i = 0;i < lis.length;i++){
        let each = lis[i].textContent
        if(each.indexOf(search.value) > -1){
            lis[i].style.cssText = 'display: ;'
        }else{
            lis[i].style.cssText = 'display:none'
        }

    }
}

