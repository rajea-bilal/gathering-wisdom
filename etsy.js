import fetch from 'node-fetch'


const getEtsyInfo = async () => {

 
    const url = `https://openapi.etsy.com/v2/users/testusername?api_key=${keyString}`
    const response = await fetch(url)
    const json = response.json()
    console.log(json)
}

console.log(getEtsyInfo())
