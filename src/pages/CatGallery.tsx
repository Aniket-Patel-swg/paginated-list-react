import { useEffect, useState } from "react";
import FetchCats
import ListView from "../components/common/ListView";

const CatGallery = () => {
    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(25);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        const data = FetchCats(page, limit);
    }, [])

    return(
        <>
            <h1>Display Cats</h1>
        </>
    )
}

export default CatGallery;