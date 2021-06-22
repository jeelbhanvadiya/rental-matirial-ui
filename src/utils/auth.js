import axios from "axios";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
const { REACT_APP_NAME, REACT_APP_BACKEND_API_O2, REACT_APP_BACKEND_API_O1 } = process.env;

let serverURL = "";

if (process.env.NODE_ENV === "production") {
  serverURL = REACT_APP_BACKEND_API_O1
} else {
  serverURL = 'http://localhost:3000'
}

axios.defaults.baseURL = serverURL;

const setAuthHeaders = () => {
  const token = Cookies.get(`${REACT_APP_NAME}-auth-token`);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return true;
  } else {
    return false;
  }
};

const displayDate =(date) =>{
  const mydate = new Date(date);
    var month = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
  return mydate.getDate() + ' '  + month + ' ' + mydate.getFullYear();
}

const diaplayIcon = (name, fontSize = "1.2rem", color= '#112d4e')=>{
  return (
    <span style={{fontSize, color}}>
      <i className={name} />
    </span>
  )
}




const editPassword = async () => {
  try{
    const data = await axios.post("/auth/password/edit");
    return data;
  }
  catch(e){
    return null;
  }
}



// const onLogin = async (credentials) => {
//   try {
//     const data = await client.post("/auth/login", {
//       ...credentials,
//     });
//     const token = data.headers["x-authorization-token"];
//     if (token) {
//       Cookies.set(`${REACT_APP_NAME}-auth-token`, token);
//       return true;
//     } else {
//       throw new Error(`Login failed`);
//     }
//   } catch (e) {
//     e.response
//       ? setError(e.response.data.message)
//       : setError({ network: e.message });
//     return false;
//   }
// };

//check JSON web token
const decodeToken = () => {
  const token = Cookies.get(`${REACT_APP_NAME}-auth-token`);
  let decodedToken;
  try {
    if (token) {
      decodedToken = jwt.decode(token);
    }
  } catch (error) {
  }
  return decodedToken;
};

// const logout = () => {
//   Cookies.remove(`${REACT_APP_NAME}-auth-token`);
// };

export { axios as client,Cookies,  setAuthHeaders, decodeToken, editPassword, serverURL, displayDate, diaplayIcon};
