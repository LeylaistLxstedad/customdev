const axios = require('axios').default;

module.exports = (app) => {
	app.get('/fortnite/api/storefront/v2/catalog', (req, res) => {
		axios.get('https://fortnite-api.com/v2/shop/br/combined').then(response =>{
			res.send(response.data);
		});
	});
}
