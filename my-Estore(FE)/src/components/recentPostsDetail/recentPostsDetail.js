import React from 'react';
import { Card } from 'react-bootstrap';
import "./recentPostsDetail.css"

const RecentPostsDetail = ({dataPost}) =>{
    return (
        <>
            <Card className="recentItem">
                <Card.Img className='imgCardRecent' src={dataPost.imgSrc} />
                <Card.Body>
                    <Card.Title>{dataPost.title}</Card.Title>
                    <Card.Text>{dataPost.date}</Card.Text>
                    <Card.Subtitle>{dataPost.content}</Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    )
}

export default RecentPostsDetail;