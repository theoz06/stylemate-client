import { default as serviceAPI } from "@/libs/dal/serviceAPI"

const loginService = async (username, password) => {
    try {
        const response = await serviceAPI.post("/auth/login", {
            username,
            password
        })
        return response.data;
    }catch (error) {
        throw error;
    }
}

const registerService = async (data) => {
    try {
        const response = await serviceAPI.post("/auth/register", data)
        return response.data;
    }catch (error) {
        throw error;
    }
}

const logOutService = async () => {
    try {
        const response = await serviceAPI.post("/auth/logout");
        return response.data;
    } catch (error) {
        throw error;
    }
}

const authServices = {
    loginService,
    registerService,
    logOutService
};

export default authServices;