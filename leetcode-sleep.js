
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

async function sleep(millis) {
    
    const timeOut = () => {
        return new Promise(resolve => setTimeout(resolve, millis))
    }

    return await timeOut(millis)
}
