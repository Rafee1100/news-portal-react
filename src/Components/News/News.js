import React from 'react';
import {Button,Card} from 'react-bootstrap';
import './News.css'

const News = (props) => {
    // console.log(props)
    const {title,description,urlToImage} = props.article;
    return (
             <Card style={{ width: '40rem' }} className='card'>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {description}</Card.Text>
                    <Button variant="primary">More..</Button>
                </Card.Body>
            </Card>
    );
};

export default News;