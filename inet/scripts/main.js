const main = (msg) => {
    const divs = document.getElementsByClassName("s1crniwd")

    const check_filter = (element, percent) => {
        if (msg && percent <= parseInt(msg)) {
            element.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode)
            return true
        }
        return false
    }

    for (const e in divs) {
        try {
            prices = divs[e].innerText

            if (prices == undefined) continue

            if (divs[e].previousSibling != null) continue

            price1 = parseInt(prices.split("\n")[0].replace(/\D/g, ''))
            price2 = parseInt(prices.split("\n")[1].replace(/\D/g, ''))

            const percent = parseFloat(((1 - (price2 / price1)) * 100).toFixed(2))
            const percent_string = percent.toString() + "%"

            const tag = document.createElement("span")
            const text = document.createTextNode(percent_string)

            if (check_filter(divs[e], percent)) {
                continue
            }

            if (percent < 5) tag.setAttribute("style", "color:green; font-size:2em; margin-right: 1rem;");

            if (percent > 5 && percent < 10) tag.setAttribute("style", "color:fuchsia; font-size:2em; margin-right: 1rem;");

            if (percent > 10 && percent < 25) tag.setAttribute("style", "color:red; font-size:2em; margin-right: 1rem;");

            if (percent > 25) tag.setAttribute("style", "color:darkgoldenrod; font-size:2em; margin-right: 1rem;");

            tag.appendChild(text)

            divs[e].parentNode.insertBefore(tag, divs[e])

        } catch (error) {
            console.log(error)
            continue
        }
    }
}

const init = async (msg) => {

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    while (true) {
        main(msg)
        await sleep(100)
    }
}

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    init(msg)
})