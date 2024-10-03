import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import FetchCats from "../components/cats/FetchCats";
import ListView from "../components/common/ListView";

const CatGallery = () => {
    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(25);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCatData = async () => {
            setLoading(true);
            const data = await FetchCats(page, limit);
            setCats(data);
            console.log(data);
            setLoading(false);
        }

        getCatData();
    }, [page, limit]);

    return (
        <>
            <h1>Display Cats</h1>
            {loading &&
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress color='secondary' />
                </Box>}

            <ListView items={cats} />
        </>
    )
}

export default CatGallery;