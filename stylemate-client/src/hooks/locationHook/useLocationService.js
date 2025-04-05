import getLocation from "@/services/location/getLocation";
import { useCallback, useEffect, useState } from "react";

const useGetLocation = () => {
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);

    const getLocationData = useCallback(async () => {
        setLoading(true);
        
        try {
            const res = await getLocation();
            setLocation(res);
        } catch (err) {
            const errMessage = err?.response?.data?.message || err?.response?.error || "Failed to fetch location data!";
            setError(errMessage);
        } finally {
            setLoading(false);
        }

    },[]);

    useEffect(()=> {
        getLocationData();
    },[]);

    return {
        location,
        error,
        loading,
    }
}

export default useGetLocation;