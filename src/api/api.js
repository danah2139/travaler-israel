const { default: axios } = require('axios');

export default axios.create({
	baseURL: 'https://data.gov.il/api/3/action',
});
