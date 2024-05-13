import { useParams } from "react-router-dom"
import { NovelDetail } from "../components/novelDetail"
import { signal, useSignal } from "@preact/signals-react"
import { useEffect, useState } from "react"
import { callApiFEGet } from "../apis/service"
import { GetStoryDetail } from "../apis/apis"

export const Detail = () => {
    const [novelDetail, setDetail] = useState({})
    const params = useParams()
    const id = params.id
    useEffect(() => {
        callApiFEGet(GetStoryDetail, id).then((response) => setDetail(response))
    },[])

    return <>
    <NovelDetail novel={novelDetail}/>
    </>
}