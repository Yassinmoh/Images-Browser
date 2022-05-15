import axios from 'axios'
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2bTjY1uNIdWXVX3xzeXEg_bRRJT71CC6qgwzjcE6k0E'
    }
})