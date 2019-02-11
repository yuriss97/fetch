const Fetching = fetch('https://swapi.co/api/people/')
.then(res => res.json())
.then(data => console.log(data))

export default Fetching