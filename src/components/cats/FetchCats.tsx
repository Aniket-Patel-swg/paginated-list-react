import axios from "axios";

const FetchCats = async (page = 1, limit = 25, order = 'ASC') => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search',
            {
                params: {
                    page,
                    limit,
                    order
                },
                headers:{
                    'x-api-key': 'live_bGfvL4QbqhDow7qTe5p9PaoPSh8M1mvsliIQsA5T7RDAb7nnmCoYbKms1t8an6xk'
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