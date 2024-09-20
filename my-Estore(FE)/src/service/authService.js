import axios from "axios";

const API_URL = "http://localhost:5017/api/LoginAccount";

export const authenticateUser = async (loginRequest) => {
  try {
    const response = await axios.post(
      `${API_URL}/authenticate`,
      JSON.stringify(loginRequest),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Đã có lỗi xảy ra: ",
      error.response || error.message
    );
    throw error;
  }
};

export const uppdateProfile = async (userName, uppdateRequest) => {
  try {
    const response = await axios.put(
      `${API_URL}/UppdateAccount/${userName}`,
      uppdateRequest,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error during authentication:",
      error.response || error.message
    );
  }
};

export const getAccount = async () =>{
  try{
    const response = await axios.get(API_URL)
    return response.data;
  }
  catch(err){
    console.error(
      "Error during authentication:",
      err.response || err.message
    );
  }
}

export const removeAccount = async (userName) =>{
  try{
    const response = await axios.delete(`${API_URL}/removeAcc/${userName}`);
    return response.data;
  }
  catch(err){
    console.error(
      "Error during authentication:",
      err.response || err.message
    );
  }
}
