import { useRouter } from 'next/router'
import Footer from '../../components/organisms/Footer'
import TopUpForm from '../../components/organisms/TopUpForm'
import TopUpItem from "../../components/organisms/TopUpItem"
import Navbar from '../../components/organisms/navbar'
import { useCallback, useEffect, useState } from 'react'
import { getDetailVoucher } from '../../services/players'

export default function index() {
  const { query, isReady } = useRouter()
  const [dataItem, setDataItem] = useState({
    name: '',
    thumbnail: '',
    category: {
      name: ''
    }
  })

    const getVoucherDetailApi = useCallback(async (id) => {
        const data = await getDetailVoucher(id)
        setDataItem(data)
        console.log(data)
    }, [])

    useEffect(() => {
        if (isReady) {
            getVoucherDetailApi(query.id)
        }
    }, [isReady])
   
    return (
        <>
            <Navbar />
            <section className="detail pt-lg-60 pb-50">
                <div className="container-xxl container-fluid">
                    <div className="detail-header pb-50">
                        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
                        <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                            <TopUpItem data={dataItem} type="mobile" />
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                            <TopUpItem data={dataItem} type="desktop" />

                            <hr />
                            <TopUpForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
