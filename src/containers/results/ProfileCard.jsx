// ProfileCard.js
import React from 'react';
import { Card, Carousel, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { BsInfoCircle, BsInfoCircleFill } from 'react-icons/bs';

const ProfileCard = ({ carouselData, infoHoverProfile, setInfoHoverProfile, renderTooltipProfile }) => (
  <Card className='h-100 shadow-sm'>
    <Card.Header className='d-flex justify-content-between align-items-center mb-3 profile-header'>
      Profile
      <OverlayTrigger placement="top" overlay={renderTooltipProfile}>
        <div onMouseEnter={() => setInfoHoverProfile(true)} onMouseLeave={() => setInfoHoverProfile(false)}>
          {infoHoverProfile ? <BsInfoCircleFill /> : <BsInfoCircle />}
        </div>
      </OverlayTrigger>
    </Card.Header>
    <Carousel className='h-100 pb-4' controls={false} indicators={true}>
      {carouselData.map(item => (
        <Carousel.Item key={item.id} className='px-2'>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={item.imageUrl} alt="Profile" style={{ width: '100px' }} />
          </div>
          <Card.Body className='pt-0 mt-0'>
            <h5 className=' pb-1'>{item.title}</h5>
            <Card.Text className='pt-0 mt-0'>{item.text}</Card.Text>
            <Button className='mt-0' type='submit'>Learn more</Button>
          </Card.Body>
        </Carousel.Item>
      ))}
    </Carousel>
  </Card>
);

export default ProfileCard;