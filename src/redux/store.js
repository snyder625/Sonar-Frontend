import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import { userReducer } from "./reducers/userReducer"
import { barbersReducer, newBarberReducer ,barberRatingsReducer} from './reducers/barberReducer'
import { newSalonReducer, salonReducer } from './reducers/salonReducer'
import { salonDetailsReducer, salonCoordinatesReducer , salonUrlReducer } from './reducers/salonDetailsReducer'
import { barbersDetailsReducer , barbersUrlReducer } from './reducers/barberDetailsReducer'
import { appointmentReducer, newAppointmentReducer } from './reducers/appointmentsReducer'
import { reviewsReducer, ReviewCreateReducer, reviewsAverageReducer } from './reducers/reviewReducer'
const reducer = combineReducers({
    user: userReducer,
    salons: salonReducer,
    newSalon: newSalonReducer,
    barbers: barbersReducer,
    newBarber: newBarberReducer,
    salon: salonDetailsReducer,
    newReview: ReviewCreateReducer,
    barber: barbersDetailsReducer,
    appointments: appointmentReducer,
    newAppointment: newAppointmentReducer,
    reviews: reviewsReducer,
    average: reviewsAverageReducer,
    coordinates: salonCoordinatesReducer,
    barberRating:  barberRatingsReducer,
    url : salonUrlReducer,
    burl :barbersUrlReducer
})


const middleware = [thunk]

const store = createStore(
    reducer, {},
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store