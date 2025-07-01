import { useState } from 'react';
import "../pages/profile.css";
import ava from '../pics/avatar.webp';


function Profile() {


    const [state, setState] = useState(false);
    const [changes, setChanges] = useState(false)

    return (
        <div style={{ display: 'flex', position: 'relative', width: '100%', justifyContent: 'center' }}>
            <div className="login-shadow" style={{ height: "1000px", width: "80%", padding: '40px 80px' }}>

                <div style={{ display: 'flex', width: '100%', position: 'relative', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
                        <div style={{ width: '40%' }}>
                            <img src={ava} style={{ width: '40%' }} alt="pic"></img>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
                            <div style={{ display: 'flex', width: '100%', padding: '20px 50px', justifyContent: 'center' }}>
                                Имя
                            </div>
                            <div style={{ display: 'flex', width: '100%', padding: '20px 50px', justifyContent: 'center' }}>
                                Фамилия
                            </div>
                            <div style={{ display: 'flex', width: '100%', padding: '20px 50px', justifyContent: 'center' }}>
                                Телефон
                            </div>
                            <div style={{ display: 'flex', width: '100%', padding: '20px 50px', justifyContent: 'center' }}>
                                E-mail
                            </div>
                            <div style={{ display: 'flex', width: '100%', padding: '20px 50px', justifyContent: 'center' }}>
                                Пароль
                            </div>

                        </div>

                    </div>
                    <div className="profile-bottom">
                        <div className="profile-bottom-buttons">
                            <button onClick={() => setState(false)} className="button">Документы</button>
                            <button onClick={() => setState(true)} className="button">История записей</button>
                        </div>
                        <div className="profile-bottom-container">

                            {
                                !state ? <div style={{ width: '500px', margin: 'auto' }}>
                                    <div className="login-shadow" >
                                        
                                        <div class="wpb_wrapper">
                                            { changes ? <>
                                            <h3 class="vc_custom_heading font-weight-bold vc_custom_1531808370243" style={{ marginTop: 0 }}>Изменить документы</h3>
                                            <div class="radiant-contact-form rt858775334dd8375 element-one button-letter-space vc_custom_1533789034190"><div role="form" class="wpcf7" id="wpcf7-f8030-p8016-o1" lang="en-US" dir="ltr">
                                                <div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                                                <form class="wpcf7-form init" >

                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div class="form-row">
                                                                <span class="wpcf7-form-control-wrap YourName"><input type="text" name="YourName" value="" size="40" className=" inputclass" aria-required="true" aria-invalid="false" placeholder="Паспорт" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div class="form-row">
                                                                <span class="wpcf7-form-control-wrap YourName"><input type="text" name="YourName" value="" size="40" className=" inputclass" aria-required="true" aria-invalid="false" placeholder="Снилс" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div class="form-row">
                                                                <span class="wpcf7-form-control-wrap YourName"><input type="text" name="YourName" value="" size="40" className=" inputclass" aria-required="true" aria-invalid="false" placeholder="Полис" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <button type="button" className="button" onClick={() => setChanges(false)}>Сохранить изменения</button>

                                                    </div>
                                                    <div class="wpcf7-response-output" aria-hidden="true"></div></form></div><div class="clearfix"></div>
                                            </div>
                                            </>
                                            : <><h3 class="vc_custom_heading font-weight-bold vc_custom_1531808370243" style={{ marginTop: 0 }}>Документы</h3>
                                            <div class="radiant-contact-form rt858775334dd8375 element-one button-letter-space vc_custom_1533789034190"><div role="form" class="wpcf7" id="wpcf7-f8030-p8016-o1" lang="en-US" dir="ltr">
                                                <div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                                                <form >

                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div class="form-row">
                                                                <span class="wpcf7-form-control-wrap YourName"><input type="text" name="YourName" value="" size="40" className=" inputclass" aria-required="true" aria-invalid="false" placeholder="Паспорт" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div class="form-row">
                                                                <span class="wpcf7-form-control-wrap YourName"><input type="text" name="YourName" value="" size="40" className=" inputclass" aria-required="true" aria-invalid="false" placeholder="Снилс" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div class="form-row">
                                                                <span class="wpcf7-form-control-wrap YourName"><input type="text" name="YourName" value="" size="40" className=" inputclass" aria-required="true" aria-invalid="false" placeholder="Полис" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <button type="button" className="button" onClick={() => setChanges(true)}>Изменить документы</button>
                                                    </div>
                                                    <div class="wpcf7-response-output" aria-hidden="true"></div></form></div><div class="clearfix"></div>
                                            </div></>
                                            }
                                        </div>

                                    </div>
                                </div>
                                    :
                                    <>asjudjudijisdaijsdijdijsaidjsaijdasasdjikijkdsa</>
                            }

                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Profile;