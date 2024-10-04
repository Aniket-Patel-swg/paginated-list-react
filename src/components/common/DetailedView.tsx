import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";
import './css/DetailedView.css';

interface SpecificDetailsTypes {
    id: string;
    url: string;
    breeds: Breed[];
    width: number;
    height: number;
}

interface Breed {
    weight: Weight;
    id: string;
    name: string;
    cfa_url?: string;
    vetstreet_url?: string;
    vcahospitals_url?: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    description: string;
    life_span: string;
    indoor: number;
    lap: number;
    alt_names?: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    dog_friendly: number;
    energy_level: number;
    grooming: number;
    health_issues: number;
    intelligence: number;
    shedding_level: number;
    social_needs: number;
    stranger_friendly: number;
    vocalisation: number;
    experimental: number;
    hairless: number;
    natural: number;
    rare: number;
    rex: number;
    suppressed_tail: number;
    short_legs: number;
    wikipedia_url?: string;
    hypoallergenic: number;
    reference_image_id?: string;
}

interface Weight {
    imperial: string;
    metric: string;
}

const DetailedView = () => {

    const [catDetails, setCatDetails] = useState<SpecificDetailsTypes | null>(null);
    const { id } = useParams();

    const location = useLocation();

    console.log('id', id)
    console.log('location', location)

    useEffect(() => {
        const getSpecificDetails = async () => {
            const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
            const data = await response.json();
            console.log('data', data)
            setCatDetails(data);
        }
        getSpecificDetails();
    }, [])


    const data = [
        { trait: "Adaptability", value: catDetails?.breeds[0].adaptability || 0 },
        { trait: "Affection", value: catDetails?.breeds[0].affection_level || 0 },
        { trait: "Child Friendly", value: catDetails?.breeds[0].child_friendly || 0 },
        { trait: "Dog Friendly", value: catDetails?.breeds[0].dog_friendly || 0 },
        { trait: "Energy Level", value: catDetails?.breeds[0].energy_level || 0 },
        { trait: "Grooming", value: catDetails?.breeds[0].grooming || 0 },
        { trait: "Health Issues", value: catDetails?.breeds[0].health_issues || 0 },
        { trait: "Intelligence", value: catDetails?.breeds[0].intelligence || 0 },
        { trait: "Shedding Level", value: catDetails?.breeds[0].shedding_level || 0 },
        { trait: "Social Needs", value: catDetails?.breeds[0].social_needs || 0 },
        { trait: "Stranger Friendly", value: catDetails?.breeds[0].stranger_friendly || 0 },
        { trait: "Vocalisation", value: catDetails?.breeds[0].vocalisation || 0 },
    ];

    if (!catDetails) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={catDetails!.url ? catDetails!.url : "https://dummyimage.com/720x600"} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{catDetails.breeds[0]?.name || "No breed name"}

                        </h1>
                        <p className="mb-8 leading-relaxed text-sm" id="breed-temperament">
                            Temperament: {catDetails?.breeds[0]?.temperament || "No breed info"}
                        </p>
                        <p className="mb-8 leading-relaxed">  {catDetails.breeds[0]?.description || "No description available"}</p>
                        <div className="flex justify-center">
                            <div className="text-sm text-gray-700 bg-gray-100 py-2 px-6 rounded">
                                <p><strong>Weight:</strong></p>
                                <p>Imperial: {catDetails?.breeds[0]?.weight.imperial || "N/A"} lbs</p>
                                <p>Metric: {catDetails?.breeds[0]?.weight.metric || "N/A"} kg</p>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={400}>
                            <RadarChart outerRadius={150} data={data}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="trait" />
                                <PolarRadiusAxis angle={30} domain={[0, 5]} />
                                <Radar name="Cat Breed Traits" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                <Tooltip />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        </>
    )

}

export default DetailedView;