import { useUserContext } from "@/contexts/userContext";
import { default as authServices } from "@/services/main/authService";
import Cookies from "js-cookie";
import { useState } from "react";

const useLoginService = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);   
    const {updateUser} = useUserContext();

    const login = async (username, password) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        
        try {
            const response = await authServices.login(username, password);
            if (response.status === 200) {
                const {token, user} = response.data;

                Cookies.set("token,", token, {
                    expires: 1,
                    secure: process.env.NODE_ENV === "production",
                    httpOnly: true
                });

                updateUser(user);
                setSuccess(true);
                return success;
            } else {
                setError("Login failed. Please try again.");
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "Unknown Error!";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return {
        login,
        loading,
        error,
        success
    };
}

export default useLoginService;
