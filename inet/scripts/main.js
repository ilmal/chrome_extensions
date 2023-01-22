const main = ()=>{
    const divs = document.getElementsByClassName("s1crniwd")

    //console.log(divs)

    for (const e in divs){

        prices = divs[e].innerText

        console.log(prices)
        
        price1 = parseInt(prices.split("\n")[0].replace(/\D/g,''))
        price2 = parseInt(prices.split("\n")[1].replace(/\D/g,''))

        //console.log(price1, price2)

        const percent = (((1 - (price2 / price1)) * 100).toFixed(2)).toString() + "%"

        //console.log(percent)

        const tag = document.createElement("span")
        const text = document.createTextNode(percent)

        tag.setAttribute("style", "color:green; font-size:2em; margin-right: 1rem;")

        tag.appendChild(text)

        //console.log(typeof divs[e])

        divs[e].parentNode.insertBefore(tag, divs[e])

    }
}

const init = async ()=> {

    const sleep = (ms)=>{
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    while (true){
        main()
        await sleep(10000)
    }
}

init()
