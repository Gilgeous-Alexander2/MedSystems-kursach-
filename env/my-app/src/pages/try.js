// import b1 from "../pics/background-1.jpg"
// import './login.css'
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from "react";



// const client = axios.create({
//     withCredentials: true,
//     baseURL: "http://212.60.5.204:8000/"
// }); 

const axios = require('axios');

const response =  axios.get('http://212.60.5.204:8000/timetables/all', {
    withCredentials: true,
  headers: {
    
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Cookie': 'session=eyJ0b2tlbiI6ICJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUl4TkNJc0ltbGtJam94TkN3aWNtOXNaU0k2TVN3aVpYaHdJam94TnpJM05qQTFOVFU1ZlEuai1aQWJ1VkJiMEw3QnpRMmRlTFZMQkNpQ2Zac2FFQk1LUmJ6YUVFQjRUdyJ9.ZvfaQQ.I5HwXU078qc705YeNI7B0BuZavk; user_access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNCIsImlkIjoxNCwicm9sZSI6MSwiZXhwIjoxNzI3NjA1NzgyfQ.r6UQsGTn5pe9U0fhdaZezIEIdTstIWNxzqhYvbFLDVg',
    'Pragma': 'no-cache',
    'Referer': 'http://localhost:3000',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 OPR/113.0.0.0 (Edition Yx 05)',
    'accept': 'application/json'
  }
});

// , {
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:3000',
//         'Access-Control-Allow-Credentials': 'true'
//     },
//     data:{}
// }


// headers: {
//     'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
//     'Connection': 'keep-alive',
//     'Cookie': 'session=eyJ0b2tlbiI6ICJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUl4TkNJc0ltbGtJam94TkN3aWNtOXNaU0k2TVN3aVpYaHdJam94TnpJM05URXpPVE00ZlEuU3lfMzJBeExONm5mM2FxN3JKVnBvVFlVRF8xeGFhNS1kLTJVYTFTa3FTWSJ9.ZvfDMw.BmIWKL1KzdeRTP22mBO288ceGGw; user_access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNCIsImlkIjoxNCwicm9sZSI6MSwiZXhwIjoxNzI3NTE3MTM0fQ.DDeJCce671LkaB8MTjYfl9_xmmtfBk0sldSSx2oGjT0',
//     'Referer': 'http://212.60.5.204:8000/docs',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 OPR/113.0.0.0',
//     'accept': 'application/json'
//   }



// function Login() {
//     const headers = {
//         'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
//         'Connection': 'keep-alive',
//         'Cookie': 'session=eyJ0b2tlbiI6ICJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUl4TkNJc0ltbGtJam94TkN3aWNtOXNaU0k2TVN3aVpYaHdJam94TnpJM05URXpPVE00ZlEuU3lfMzJBeExONm5mM2FxN3JKVnBvVFlVRF8xeGFhNS1kLTJVYTFTa3FTWSJ9.ZvfDMw.BmIWKL1KzdeRTP22mBO288ceGGw; user_access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNCIsImlkIjoxNCwicm9sZSI6MSwiZXhwIjoxNzI3NTE3MTM0fQ.DDeJCce671LkaB8MTjYfl9_xmmtfBk0sldSSx2oGjT0',
//         'Referer': 'http://212.60.5.204:8000/docs',
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 OPR/113.0.0.0',
//         'accept': 'application/json'
//       }
//     const [currentUser, setCurrentUser] = useState();
//     useEffect(() => {
//         client.get("/doctors/all", {
//             headers: headers,
//             data:{}
//         })
//         .then(function(res) {
//             console.log(res)
//           setCurrentUser(true);
//         })
//         .catch(function(error) {
//           setCurrentUser(false);
//         });
//       }, []);




//     return (
//         <>
//             <div className="b1">
//                 <div style={{ width: '500px', margin: 'auto' }}>
//                     <div className="login-shadow">
//                         <div class="wpb_wrapper"><h3 class="vc_custom_heading font-weight-bold vc_custom_1531808370243" style={{ marginTop: 0 }}>Вход</h3>  <div class="radiant-contact-form rt858775334dd8375 element-one button-letter-space vc_custom_1533789034190">
//                             <div role="form" class="wpcf7" id="wpcf7-f8030-p8016-o1" lang="en-US" dir="ltr">
//                                 <div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
//                                 <form class="wpcf7-form init" novalidate="novalidate" data-status="init">

//                                     <div class="row">
//                                         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//                                             <div class="form-row">
//                                                 <span class="wpcf7-form-control-wrap YourEmail"><input type="email" name="YourEmail" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email" /></span>
//                                             </div>
//                                         </div>
//                                         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//                                             <div class="form-row">
//                                                 <span class="wpcf7-form-control-wrap YourName"><input type="text" name="YourName" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Пароль" /></span>
//                                             </div>
//                                         </div>
//                                         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
//                                             <div class="form-row">
//                                                 <span class="wpcf7-form-control-wrap Doctor"></span>
//                                             </div>
//                                         </div>

//                                         <button>Войти</button>

//                                     </div>
//                                     <div class="wpcf7-response-output" aria-hidden="true"></div>
//                                 </form>
//                             </div>
//                             <div class="clearfix">

//                             </div>
//                             <div>Нету аккаунта?</div>
//                             <Link to={'/register'}>Зарегистрироваться</Link>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }
// // action="/dentist/cosmetic-dentistry-2/#wpcf7-f8030-p8016-o1" method="post"
// export default Login;



