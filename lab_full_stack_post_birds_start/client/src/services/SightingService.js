const baseURL = 'http://localhost:3000/api/sightings/'

export default {
  getSightings(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postSighting(data) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(output => output.json())
  },
  deleteSighting(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
    .then(output => output.json())
  }
}
