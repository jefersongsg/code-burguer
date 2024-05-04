
const list = document.querySelector("ul")
const buttonshow = document.querySelector(".show-one")
const buttondesc = document.querySelector(".two-title")
const buttsome = document.querySelector(".tree-title")
const buttfilt = document.querySelector(".for-title")

function formatcurrency(value) {
    const newVal =value.toLocaleString('pt-br',
    {style:'currency',
    currency:'BRL',
})
return newVal
}


//mostrar podrutos somente quando apertar botão
function showall(showprod){
    let myLi= ''

    showprod.forEach( (product) => { 
        myLi +=
        `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="price"> ${formatcurrency(product.price)}</p>
        </li>
        `
        
        
        } )
        list.innerHTML = myLi
}


buttonshow.addEventListener('click',() => showall(menuOptions))
//agora usaremos o MAP para dar 10% de desconto


function showdesc (){ 
    
const descont = menuOptions.map((burguer) => ({
   ...burguer,// Spread Operator
    price: burguer.price * 0.9,//dar 10% de desconto

    
})) 
showall(descont)

}

buttondesc.addEventListener('click', showdesc)




//agora usaremos REDUCE para somar os valores 
function showresult(){

const result = menuOptions.reduce((acc, current) => acc + current.price, 0)

list.innerHTML=
`
<li>
<br>
    <p> O Valor total dos itens é de:<br> <br>${formatcurrency(result)}</p>
<br>    
</li>
`      
}

buttsome.addEventListener('click', showresult)



//usando FILTER
function prodvegan(){

const hvegan = menuOptions.filter(burg => burg.vegan)



showall(hvegan)


}

buttfilt.addEventListener('click',prodvegan)