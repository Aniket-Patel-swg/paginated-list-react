import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './css/ListView.css';

const ListView = ({ items }: { items: unknown }) => {

    const uniuqueBreeds: unknown[] = []
    console.log('uniqueBreeds: ', uniuqueBreeds)
    return (
        <>
            <div className="list-wrapper">
                {Array.isArray(items) && items.map((animal: any) => {

                    if (!uniuqueBreeds.includes(animal.breeds[0].name)) {
                        uniuqueBreeds.push(animal.breeds[0].name)
                    }
                    return (
                        <>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={animal.url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {animal.breeds[0].name || "No name"}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {animal.breeds[0].description || "No description"}
                                    </Typography>

                                </CardContent>
                                <Typography>alternate name: {animal.breeds[0].alt_names || "No alternate name"}</Typography>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ListView;