import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import '../css/home.css';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import popular from '../Redux/Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
    const data= useSelector((store) => store.popularReducer) ;

    console.log(data);
 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(popular)
    }, [])
    return (
        <div>
            {/* banner section  */}
            <section>
                <Swiper navigation={true} modules={[Navigation]} loop={true} autoplay={true} className="mySwiper">
                    <SwiperSlide>
                        <div className='home-image d-flex flex-column justify-content-center align-items-center'>
                            <h3 className='o1'>Get up to 40% off</h3>
                            <h2 className='o2'>New Arrivals</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='home-image1 d-flex flex-column justify-content-center align-items-center'>
                            <h3 className='o1'>Get up to 40% off</h3>
                            <h2 className='o2'>New Arrivals</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='home-image2 d-flex flex-column justify-content-center align-items-center'>
                            <h3 className='o1'>Get up to 40% off</h3>
                            <h2 className='o2'>New Arrivals</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* about collection */}
            <section>
                <Container>
                    <div className='py-5'>
                        <Row>
                            <Col>
                                <div className='side1 '>
                                    <h2>Women Collection</h2>
                                    <div className='s1-img'>
                                        <span>View more </span>
                                    </div>
                                    <div className='bottom'></div>
                                    <p className='s1-text'>Distribute the product with the large powder brush or the small blush <br /> brush to highlight the colour naturally on the cheeks, nose and jawline. <br /> Apply in circular motions so the bronzer blends seamlessly. <br />
                                        This velvety powder gives skin an instant boost, subtly warming up its <br /> tone while restoring vitality.Soft and delicate powder that conceals <br /> imperfections with a luminous finish.</p>
                                </div>

                            </Col>
                            <Col>
                                <div className='side2'>
                                    <p className="s2-text">
                                        Party invitations welcome sequins as well as subtlety and our collection <br /> runs the gamut between both. From ruffled, one-shoulder and puff-sleeve <br /> dresses to minimal tops, skirts and trousers, the edit caters to every <br /> occasion. Complement eveningwear with our collection of accessories <br />including clutch bags and scarves, while for daytime parties, our collection <br /> of shimmering jewellery and headwear will raise the bar. Complete your <br /> party look with a colour-pop lipstick from our beauty collection and a pair <br /> of statement flat or heeled shoes.
                                    </p>
                                    <div className='center'></div>
                                    <div className='s2-img'>
                                        <span>View more </span>
                                    </div>
                                    <h2>Beauty Collection</h2>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            {/* weekend popular */}

            <section>
                <Container>
                    <Row>
                        <Col>
                            <h2 className='text-uppercase text-center fw-bold'>this weekend Popular </h2>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                            //    data && data.popular.map((val) => {
                            //         return (
                            //             <div key={val.id}>
                            //                 <img src={val?.image} alt="" />
                            //                 <Row>
                            //                     <Col>
                            //                         <FontAwesomeIcon icon={faStar} />
                            //                         <span>{val.review}</span>
                            //                     </Col>
                            //                 </Row>
                            //                 <h4>{val.name}</h4>
                            //                 <span>{val.exprice}</span>
                            //                 <span>{val.price}</span>
                            //             </div>
                            //         )
                            //     })
                            }
                        </Col>
                    </Row>
                </Container>
                <div className='sideborder-div'><div className='side-border '></div></div>
            </section>


        </div>
    )
}

export default Home