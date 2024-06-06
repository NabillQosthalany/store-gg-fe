import axios from "axios"

const ROOT_API = process.env.NEXT_PUBLIC_API


export async function getFeaturedGame() {
    const URL = 'players/landingpage'

    const response = await axios.get(`${ROOT_API}/${URL}`)
    const axiosResponse = response.data

    return axiosResponse.data
}

export async function getDetailVoucher(id) {
    const URL = `players/${id}/detail`

    const response = await axios.get(`${ROOT_API}/${URL}`)
    const axiosResponse = response.data

    return axiosResponse.data
}
