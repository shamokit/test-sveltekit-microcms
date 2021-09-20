import axios from 'axios'
const ENV =
    import.meta.env
const API_KEY = ENV.VITE_API_KEY
const API_ENDPOINT = ENV.VITE_API_ENDPOINT
export const get = async({ params }) => {
    const { slug } = params;
    let URL = `https://${API_ENDPOINT}.microcms.io/api/v1/blog/`
    URL += slug
    const res = await axios
        .get(URL, {
            headers: {
                "X-API-KEY": API_KEY
            }
        })
    const post = await res.data
    if (res.status === 404) {
        return { body: [] }
    }
    const ret = {
        status: 200,
        body: post,
    }
    return ret
}