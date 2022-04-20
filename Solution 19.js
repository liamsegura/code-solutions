//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'. All numbers should be represented as a string with 2 decimal places.
function usdcny(usd) {
    let conversion = usd * 6.75
    return `${conversion.toFixed(2)} Chinese Yuan`
    }