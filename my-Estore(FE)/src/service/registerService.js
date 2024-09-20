import axios from "axios";

const API_URL = "http://localhost:5017/api/RegisterAccount"


export const registerAccont = async (signUpRequest) =>{
    try {
        const response = await axios.post(
          `${API_URL}/registerAccount`,
          JSON.stringify(signUpRequest),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error('Error during authentication:', error.response || error.message);
      }
}