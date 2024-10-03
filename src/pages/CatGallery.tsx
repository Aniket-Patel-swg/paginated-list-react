import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import FetchCats from "../components/cats/FetchCats";
import ListView from "../components/common/ListView";

const CatGallery = () => {
    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState('ASC');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCatData = async () => {
            setLoading(true);
            const data = await FetchCats(page, limit, order);
            setCats(data);
            console.log(data);
            setLoading(false);
        }
        getCatData();
    }, [page, limit, order]);

    return (
        <>
            <h1>Display Cats</h1>
            {loading &&
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress color='secondary' />
                </Box>}

            <ListView items={cats} />

            <div className="filters">
                <label>Items per page: </label>
                <select value={limit} onChange={(e) => { setLimit(Number(e.target.value)) }} id="">
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>

                <label>Order by</label>
                <select value={order} onChange={(e) => { setOrder(e.target.value) }} id="">
                    <option value="ASC">Ascending</option>
                    <option value="DESC">Descending</option>
                    <option value="RAND">Random</option>
                </select>
            </div>

            <div className="pagination-controls">
                <button onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))} disabled={page === 1}>
                    Previous
                </button>
                <span>Page {page}</span>
                <button onClick={() => setPage((prevPage) => prevPage + 1)}>Next</button>
            </div>
        </>
    )
}

export default CatGallery;