import axios from "axios";

const FetchCats = async (page = 1, limit = 25, order = 'RAND') => {
    try {

        const response = await axios.get('https://api.thecatapi.com/v1/images/search',
            {
                params: {
                    page,
                    limit,
                    order
                },
                headers:{
                    'x-api-key': process.env.FETCH_CATS_API_KEY
                }
            }
        );

        console.log('Cats data: ',response.data)
        return response.data

    } catch (error) {
        console.log('error fetching cats: ', error);
        return [];
    }
}

export default FetchCats;