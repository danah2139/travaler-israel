const { default: axios } = require('axios');

export default axios.create({
	baseURL:
		'https://data.gov.il/api/3/action/datastore_search?resource_id=8fb94fe2-a87c-46b6-9c0b-c2abe4fbf06f',
});
