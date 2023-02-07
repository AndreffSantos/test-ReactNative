export default async function sendLocations(locations) {
  try {
    const id = Math.floor(Date.now() * Math.random()).toString()
    const response = await fetch(`http://192.168.0.35:8081/points/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(locations),
    })
    const responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    throw(error)
  }
}
