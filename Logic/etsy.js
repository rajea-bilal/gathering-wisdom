


const getEtsyInfo = async () => {

    const keyString = "308mqj6yr1u06mxov6f5lkdh"
    const url = `https://www.etsy.com/oauth/connect?
    response_type=code
    &redirect_uri=https://rajea-bilal.netlify.app
    &scope=transactions_r%20transactions_w
    &client_id=${keyString}&state=superstate
    &code_challenge=DSWlW2Abh-cf8CeLL8-g3hQ2WQyYdKyiu83u_s7nRhI
    &code_challenge_method=S256`
    const response = await fetch(url)
    const json = response.json()
    console.log(json)
}

console.log(getEtsyInfo())
