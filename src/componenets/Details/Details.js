import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Details = ({ item }) => {
    const { strMealThumb, strMeal, strInstructions, strCategory, strArea } = item
    return (
        <div>
            <Card className='mt-4'>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                    {strInstructions.slice(0,103)}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;