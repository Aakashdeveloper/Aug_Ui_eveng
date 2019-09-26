function testcode(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('hii')
        }, 2000)
    })
}


async function test1(){
    const out = await testcode()
    console.log(out)
}

test1()