// Import Swiper React components
import './search-specialist.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ava from '../pics/man.jpg';

import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';

function Searchspecialist() {

    const [datetime,setDatetime] = useState("2017-08-06T02:32")

    return (
        <>

            <div style={{ marginTop: '100px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h3 style={{ marginTop: 0, fontSize: '35px', marginBottom: '60px' }}>Наши специалисты</h3>

                <div style={{ display: 'flex', gap: '15px' }}>
                    <div className="find-doc">
                        <h3>Find the Perfect Doctor</h3>
                        <form >
                            <div className="form-doc">
                                <label style={{ marginBottom: '5px' }}>Doctor Name<span>*</span></label>
                                <select className="select-doc" name="doctor">
                                    <option value="">Search by Name</option><option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                                </select>
                            </div>
                            <div className="form-doc">
                                <label style={{ marginBottom: '5px' }}>Search by Specialization<span>*</span></label>
                                <select className="select-doc" name="taskoption">
                                    <option value="">Search by Specialization</option><option value="dentist">Dentist</option>
                                </select>
                            </div>
                            <div className="form-doc">
                                <input type="submit" value="Continue" name="btnsubmit" className="find-doc-button" />
                            </div>
                        </form>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="item2">
                            <img src={ava} style={{ height: '100%' }} alt="pic"></img>
                            <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                                <h4 className="item2-head">Dental Implants</h4>
                                <p className="item2-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                <h6 className="item2-bottom">Посмотреть расписание</h6>
                            </div>
                        </div>
                        <div className="item2">
                            <img src={ava} style={{ height: '100%' }} alt="pic"></img>
                            <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                                <h4 className="item2-head">Dental Implants</h4>
                                <p className="item2-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                <h6 className="item2-bottom">Посмотреть расписание</h6>
                            </div>
                        </div><div className="item2">
                            <img src={ava} style={{ height: '100%' }} alt="pic"></img>
                            <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                                <h4 className="item2-head">Dental Implants</h4>
                                <p className="item2-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                <h6 className="item2-bottom">Посмотреть расписание</h6>
                            </div>
                        </div><div className="item2">
                            <img src={ava} style={{ height: '100%' }} alt="pic"></img>
                            <div style={{ marginTop: '15px', marginBottom: '10px' }}>
                                <h4 className="item2-head">Dental Implants</h4>
                                <p className="item2-text">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
                                <h6 className="item2-bottom">Посмотреть расписание</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'center', gap: '40px', marginTop: '100px' }}>

                <div className="login-shadow" style={{ width: '500px', marginTop: '0px' }}>
                    <div class="wpb_wrapper"><h3 className="headtitle" >Записаться на прем</h3>  <div class="radiant-contact-form rt858775334dd8375 element-one button-letter-space vc_custom_1533789034190">
                        <div role="form" class="wpcf7" id="wpcf7-f8030-p8016-o1" lang="en-US" dir="ltr">
                            <div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                            <form class="wpcf7-form init" novalidate="novalidate" data-status="init">

                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-doc">
                                            <select className="select-doc" name="doctor">
                                                <option value="">Выберите доктора</option><option value="Dr. Sarah Johnson">Dr. Sarah Johnson</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-doc">
                                            <input className='select-doc'style={{padding:'0'}} type="datetime-local" value={datetime} onChange={(e)=> setDatetime(e.target.value)}></input>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-row">
                                            <span class="wpcf7-form-control-wrap Doctor"></span>
                                        </div>
                                    </div>

                                    <button className="otstup button">Войти</button>

                                </div>
                                <div class="wpcf7-response-output" aria-hidden="true"></div>
                            </form>
                        </div>
                        <div class="clearfix">

                        </div>
                        <div className="otstup" style={{ marginBottom: '10px' }}> Нету аккаунта?</div>

                    </div>
                    </div>
                </div>


                <MapContainer center={[51.505, -0.09]} zoom={20} scrollWheelZoom={false} style={{ width: '500px', height: '500px' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </>
    )
}

export default Searchspecialist;