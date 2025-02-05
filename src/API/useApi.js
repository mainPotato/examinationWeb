import axios from "axios"
import { useState} from "react"

const useApi = (type="get") => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [response, setResponse] = useState(null)
    const [progress, setProgress] = useState(0)

    const apiData = async (url, data=null) => {
        setError(null);
        console.log(url);
        console.log(data);
        setIsLoading(true)
        setProgress(60)

        try {
            let res = null;
            switch (type) {
                case 'post':
                    res = (await axios.post(url, data, { withCredentials: true })).data
                    break;
                case 'get':
                    res = (await axios.get(url, { withCredentials: true })).data
                    break;
                case 'patch':
                    res = (await axios.patch(url, data, {withCredentials: true})).data
                    break;
                default:
                    break;
            }
            setResponse(res)
        } catch (error) {
            if (error.response.status === 500) {
                setError("Some internal server error occurred !")
            } else {
                setError(error.response.data.message)
            }
        } finally {
            setIsLoading(false)
            setProgress(100)
        }
    }

    return { apiData, response, isLoading, progress, error }
}

export default useApi