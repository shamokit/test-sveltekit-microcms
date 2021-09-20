import axios from 'axios'
const ENV =
    import.meta.env
const API_KEY = ENV.VITE_API_KEY
const API_ENDPOINT = ENV.VITE_API_ENDPOINT
export const get = async() => {
    const URL = `https://${API_ENDPOINT}.microcms.io/api/v1/blog`
    const res = await axios
        .get(URL, {
            headers: {
                "X-API-KEY": API_KEY
            }
        })
    const posts = await res.data.contents
    if (res.status === 404) {
        return { body: [] }
    }
    const ret = {
        status: 200,
        body: posts,
    }
    return ret
}