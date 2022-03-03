import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteKontak, detailKontak, getListKontak } from "../../actions/kontakAction";
import { useSelector } from "react-redux";

const ListKontak = () => {
    // * kita perlu dispatch untuk menghubungkan komponen ke action
    const {
        getListKontakResult,
        getListKontakLoading,
        getListKontakError,
        deleteKontakResult,
    } = useSelector((state) => state.contactReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        // * Memanggil action dari list kontak dan dimasukkan ke dalam dispatch
        dispatch(getListKontak());
    }, [dispatch]);

    useEffect(() => {
        // * memanggil getListKontak ketika deleteKontakResult tidak false
        if (deleteKontakResult) {
            dispatch(getListKontak());
        }
    }, [deleteKontakResult, dispatch]);

    const deleteHandler = (id, e) => {
        e.preventDefault();
        dispatch(deleteKontak(id));
    };

    return (
        <div>
            <h4>List Kontak</h4>
            {getListKontakLoading && <p>Loading ...</p>}
            {getListKontakError && <p>{getListKontakError}</p>}
            {getListKontakResult &&
                getListKontakResult.map((kontak) => {
                    return (
                        <p key={kontak.id}>
                            {kontak.nama} - {kontak.noHp}{" "}
                            <button
                                onClick={deleteHandler.bind(this, kontak.id)}
                            >
                                Hapus
                            </button>{" "}
                            <button onClick={() => dispatch(detailKontak(kontak))}>Edit</button>
                        </p>
                    );
                })}
        </div>
    );
};

export default ListKontak;
