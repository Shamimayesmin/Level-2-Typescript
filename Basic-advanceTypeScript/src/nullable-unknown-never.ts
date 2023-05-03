const searchName = (value: string | null)=>{
    if(value === null){
        console.log('There is nothing to search');
    }else{
        console.log("Searching");
    }
}

searchName(null)

// kmh^-1 --- ms^-1

const getMyCarSpeed = (speed : unknown)=>{
    if(typeof speed === "number"){
        const convertedSpeed = (speed * 1000)/3600
        console.log(`my speed is ${convertedSpeed}`);
    }
    if(typeof speed === 'string'){
        const [value, unit] = speed.split("")
        const convertedSpeed = (parseFloat (value) * 1000)/3600
        console.log(`my speed is ${convertedSpeed}`);
    }else{
        console.log('There is worng typing');
    }
}

getMyCarSpeed(10)
getMyCarSpeed('10 kmh^-1') // 10 kmh-1


function throwError(message : string): never{
    throw new Error(message)
}

throwError("There is an error found out so I will cry now")