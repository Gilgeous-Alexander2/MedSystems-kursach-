// Import Swiper React components
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ava1 from '../pics/man.jpg';


function Specialists() {
    return (
        <>

            <div style={{ marginTop: '100px' }}>
            <h3 class="vc_custom_heading font-weight-bold vc_custom_1531808370243" style={{ marginTop: 0 ,fontSize:'35px',marginBottom: '60px'}}>Наши специалисты</h3>
                {/* <Swiper className='speci-swiper'
                    loop={true}
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={50}
                    slidesPerView={5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        Урология
                    </SwiperSlide>
                    <SwiperSlide>
                        Гинекология
                    </SwiperSlide>
                    <SwiperSlide>
                        Пластическая хирургия
                    </SwiperSlide>
                    <SwiperSlide>
                        Кардиология
                    </SwiperSlide>
                    <SwiperSlide>
                        Травматология
                    </SwiperSlide>
                    <SwiperSlide>
                        Урология
                    </SwiperSlide>
                    <SwiperSlide>
                        Гинекология
                    </SwiperSlide>
                    <SwiperSlide>
                        Пластическая хирургия
                    </SwiperSlide>
                    <SwiperSlide>
                        Кардиология
                    </SwiperSlide>
                    <SwiperSlide>
                        Травматология
                    </SwiperSlide>
                </Swiper> */}



                <Swiper className='speci-swiper'
                    loop={true}
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="item">
                            <img src={ava1} style={{ width: '50%',borderRadius:'45px' }} alt="pic"></img>
                            <h3 style={{ fontSize: '20px', color: '#202c45', lineHeight: '24px', textAlign: 'center' }} className="item-head">Dental Implants</h3>
                            <p style={{ fontSize: '15px', color: '#434343', lineHeight: '26px', textAlign: 'center' }} className="item-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                            <p style={{ fontSize: '15px', color: '#434343', lineHeight: '26px', textAlign: 'center', fontWeight: '700' }} >Посмотреть расписание</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src={ava1} style={{ width: '50%',borderRadius:'45px' }} alt="pic"></img>
                            <h3 style={{ fontSize: '20px', color: '#202c45', lineHeight: '24px', textAlign: 'center' }} className="item-head">Dental Implants</h3>
                            <p style={{ fontSize: '15px', color: '#434343', lineHeight: '26px', textAlign: 'center' }} className="item-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                            <p style={{ fontSize: '15px', color: '#434343', lineHeight: '26px', textAlign: 'center', fontWeight: '700' }} >Посмотреть расписание</p>
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className="item">
                            <img src={ava1} style={{ width: '50%',borderRadius:'45px' }} alt="pic"></img>
                            <h3 style={{ fontSize: '20px', color: '#202c45', lineHeight: '24px', textAlign: 'center' }} className="item-head">Dental Implants</h3>
                            <p style={{ fontSize: '15px', color: '#434343', lineHeight: '26px', textAlign: 'center' }} className="item-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                            <p style={{ fontSize: '15px', color: '#434343', lineHeight: '26px', textAlign: 'center', fontWeight: '700' }} >Посмотреть расписание</p>
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className="item">
                            <img src={ava1} style={{ width: '50%',borderRadius:'45px' }} alt="pic"></img>
                            <h3 style={{ fontSize: '20px', color: '#202c45', lineHeight: '24px', textAlign: 'center' }} className="item-head">Dental Implants</h3>
                            <p style={{ fontSize: '15px', color: '#434343', lineHeight: '26px', textAlign: 'center' }} className="item-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                            <p style={{ fontSize: '15px', color: '#434343', lineHeight: '26px', textAlign: 'center', fontWeight: '700' }} >Посмотреть расписание</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}

export default Specialists;