import Cookies from 'js-cookie';

// import axios from "axios";


// let isTokenValid = false;

// const checktoken = (token) => {
//     axios.get("http://127.0.0.1:8000/api/checktoken",{
//         headers: {
//             'Authorization': 'Bearer ' + token
//           } 
//       })
//           .then(function (response) {
//             console.log(response.data);
//             isTokenValid = true;
//           })
//           .catch(function (errors) {
//             console.log(errors);
//           });
// };

const routerGuard = (to, from, next) => {
  const token = Cookies.get('token');
  //  checktoken(token);
  // console.log(isTokenValid);
  
  if (!token && to.name !== 'auth-login' && to.name !== 'auth-register') {
    console.log('Token không tồn tại');
    next({ name: 'auth-login' });
  } else {
    console.log('Token tồn tại:', token);
    next();
  }
};



export default routerGuard;