import React from 'react'
import Carousel from 'react-bootstrap/Carousel'//imported it from react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';// used bootstrap styling in Carousels... 

const Slider = ({ start }) => {
    return (

        <Carousel fade>
            {start.map((item) => (//ye map function js ka saare item jo json file mai hai 1-1 kr ke istmaal kr lega
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={item}
                        alt="First slide"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Slider
