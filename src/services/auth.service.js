import axios from "axios";
import { ReaderBaseURL } from "../configs/app.config";

const API_URL = ReaderBaseURL + "/reader/";

const register = (formValue) => {
    return axios.post(API_URL + "createReader", formValue);
};

const login = (formValue) => {
    return axios
        .post(API_URL + "loginReader", 
            formValue
        )
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data.reader));
            }
            return response.data;
        });
};


const verifyotp = (formValue) => {
    return axios
        .post(API_URL + "verifyOtp", 
            formValue
        )
        .then((response) => {
            return response.data;
        });
};


const logout = () => {
    localStorage.removeItem("user");
    return true;
};

const authService = {
    register,
    login,
    logout,
    verifyotp
};

export default authService;