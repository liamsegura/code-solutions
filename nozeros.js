// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

const noZeros = (n) => {

    let num = String(n)

    while(num.endsWith('0')){
        num = num.slice(0, -1)
    }
    return Number(num)

}