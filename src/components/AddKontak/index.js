import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addKontak, getListKontak, updateKontak } from "../../actions/kontakAction";

const AddKontak = () => {
    const [nama, setNama] = useState("")
    const [nohp, setNohp] = useState("")
    const [id, setId] = useState("")

    const dispatch = useDispatch()

    const { addKontakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.contactReducer)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            dispatch(updateKontak({id: id, nama: nama, noHp : nohp}))
            return
        }
        
        dispatch(addKontak({
            nama: nama,
            noHp: nohp
        }))
    }

    useEffect(() => {
        if (addKontakResult) {
            dispatch(getListKontak())
        }
        setNama("")
        setNohp("")
    },[dispatch, addKontakResult])

    useEffect(() => {
        if (updateKontakResult) {
            dispatch(getListKontak())
        }
        setNama("")
        setNohp("")
        setId("")
    },[dispatch, updateKontakResult])

    useEffect(() => {
        if (detailKontakResult) {
            setNama(detailKontakResult.nama)
            setNohp(detailKontakResult.noHp)
            setId(detailKontakResult.id)
        }
    },[dispatch, detailKontakResult])

    return (
        <div>
            <h4>{id ? "Update Kontak" : "Add Kontak"}</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama ...."/>
                <input type="text" name="nohp" value={nohp} onChange={(e) => setNohp(e.target.value)} placeholder="No Hp ...."/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddKontak;