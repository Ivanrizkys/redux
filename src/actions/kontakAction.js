import axios from "axios";

const GET_LIST_KONTAK = "GET_LIST_KONTAK";
const ADD_KONTAK = "ADD_KONTAK";
const DELETE_KONTAK = "DELETE_KONTAK";
const DETAIL_KONTAK = "DETAIL_KONTAK";
const UPDATE_KONTAK = "UPDATE_KONTAK";

const getListKontak = () => {
    return (dispatch) => {
        // * Loading
        // * Inisialisasi get api dan setting state loading di true
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // * get api
        axios({
            method: "GET",
            url: "https://befake.herokuapp.com/kontaks",
            timeout: 120000
        })
            .then((response) => {
                // * jika berhasil melakukan get api
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                // * jika gagal melakukan get api
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

const addKontak = (data) => {
    return (dispatch) => {
        // * Loading
        // * Inisialisasi get api dan setting state loading di true
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // * get api
        axios({
            method: "POST",
            url: "https://befake.herokuapp.com/kontaks",
            timeout: 120000,
            data: data
        })
            .then((response) => {
                // * jika berhasil melakukan get api
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                // * jika gagal melakukan get api
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

const deleteKontak = (id) => {
    return (dispatch) => {
        // * Loading
        // * Inisialisasi get api dan setting state loading di true
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // * get api
        axios({
            method: "DELETE",
            url: "https://befake.herokuapp.com/kontaks/"+id,
            timeout: 120000
        })
            .then((response) => {
                // * jika berhasil melakukan get api
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                // * jika gagal melakukan get api
                dispatch({
                    type: DELETE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

const detailKontak = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data
            }
        })
    }
}

const updateKontak = (data) => {
    return (dispatch) => {
        // * Loading
        // * Inisialisasi get api dan setting state loading di true
        dispatch({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // * get api
        axios({
            method: "PUT",
            url: "https://befake.herokuapp.com/kontaks/"+data.id,
            timeout: 120000,
            data: data
        })
            .then((response) => {
                // * jika berhasil melakukan get api
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((err) => {
                // * jika gagal melakukan get api
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: err.message
                    }
                })
            })
    }
}

export { GET_LIST_KONTAK, ADD_KONTAK, DELETE_KONTAK, DETAIL_KONTAK, UPDATE_KONTAK, getListKontak, addKontak, deleteKontak, detailKontak, updateKontak }