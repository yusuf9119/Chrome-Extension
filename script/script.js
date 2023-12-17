async function fetchData(){

    const url = await fetch('https://livescore6.p.rapidapi.com/matches/list-by-league?category=soccer&league=england')
     const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eb9d613001msh2580e8cafc2f210p10e30djsnbaf8b97932a8',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const record = await url.json()
console.log('record',record)

document.getElementById('fbtable').innerHTML = record.data.map(item => <li>${item.name}</li>).join('');

}


fetchData()