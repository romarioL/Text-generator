
 const  algorithmia = require("algorithmia");

 async function trigger() {
  const  url = {"url": "https://www.facebook.com/filipedeschamps?epa=SEARCH_BOX"}
  const apiKey = "sim7psIeBatrvpJajm3Dw3uN1hq1"


  const randomTextAuthenticate = algorithmia(apiKey)

  const randomText = randomTextAuthenticate.algo("koverholt/randomtext/0.1.0")

  const randomTextResponse =  await randomText.pipe(url)

  const randomTextResult = randomTextResponse.get()

  console.log(randomTextResult)
}

console.log(trigger())

