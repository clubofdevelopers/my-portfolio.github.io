import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

export default function ExampleCarousel({ images }) {
    return (
        <Carousel
            indicators={true}
            navButtonsAlwaysVisible={true}
            autoPlay={true}
            animation="slide"
            duration={800}
            swipe={true}
        >
            {images.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    )
}

function Item({ item }) {
    return (
        <Paper elevation={0} sx={{ textAlign: "center", p: 0, }}>
            <img
                src={item}
                alt={''}
                elevation={0}
                style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px"
                }}
            />
        </Paper>
    )
}
