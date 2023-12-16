import axios from "axios";

import {
    ALL_BARBER_REQUEST,
    ALL_BARBER_SUCCESS,
    ALL_BARBER_FAIL,
    CLEAR_ERRORS,
    NEW_BARBER_REQUEST,
    NEW_BARBER_SUCCESS,
    NEW_BARBER_FAIL,
    ADMIN_BARBER_REQUEST,
    ADMIN_BARBER_SUCCESS,
    ADMIN_BARBER_FAIL,
    UPDATE_BARBER_REQUEST,
    UPDATE_BARBER_SUCCESS,
    UPDATE_BARBER_FAIL,
} from "../constants/barberConstant";


export const getAllBarberss = (name) => async(dispatch) => {
    try {
        dispatch({ type: ALL_BARBER_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/barbers/${name}`);


        dispatch({
            type: ALL_BARBER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_BARBER_FAIL,
            payload: error.response.data.message,
        })
    }
}



// Create Barber (Admin)
export const createBarber = (barberData) => async(dispatch) => {
    try {
        dispatch({ type: NEW_BARBER_REQUEST })

        const config = {
            headers: { 'Content-Type': 'application/json' },
        }

        const { data } = await axios.post(
            'http://localhost:5000/api/barbers/salonowner/barber/new',
            barberData,
            config,
        )

        dispatch({
            type: NEW_BARBER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: NEW_BARBER_FAIL,
            payload: error.response.data.message,
        })
    }
}


// Get All Products For Admin
export const getSalonOwnerBarbers = () => async(dispatch) => {
    try {
        dispatch({ type: ADMIN_BARBER_REQUEST })

        const { data } = await axios.get('http://localhost:5000/api/barbers/salonowner/barbers')

        dispatch({
            type: ADMIN_BARBER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ADMIN_BARBER_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const getBarbersAverage = (id , ratings) => async(dispatch) => {
    try {
        dispatch({ type: UPDATE_BARBER_REQUEST })
        const {data}= axios.put(`http://localhost:5000/api/barbers/ratings/${id}`,ratings)
    
        dispatch({
            type: UPDATE_BARBER_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: UPDATE_BARBER_FAIL,
            payload: error.response.data.message,
        })
    }
}

// Clearing Errors
export const clearErrors = () => async(dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}