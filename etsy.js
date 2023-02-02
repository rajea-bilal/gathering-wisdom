import fetch from 'node-fetch'


const getEtsyInfo = async () => {

    const keyString = "epxb5zz6yfximirdkvs8uyhd"
    const secret = "29j6gbzq5u"
    const url = `https://openapi.etsy.com/v2/users/testusername?api_key=${keyString}`
    const response = await fetch(url)
    const json = response.json()
    console.log(json)
}

console.log(getEtsyInfo())
