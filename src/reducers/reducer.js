
import * as actions from "../actions/actions";
import * as schedules from '../data/schedules.json';
import * as cities from '../data/cities.json';


export const flightSchedules = (state = [], action) => {
    switch (action.type) {
        case actions.GET_FLIGHT_SCHEDULES:
            return filterSchedules(schedules.values, action.payload);
        default:
            return state;
    }
}

export const citites = (state= [], action) => {
    switch (action.type) {
        case actions.GET_CITIES:            
            return cities.values;    
        default:
            return state;
    }
}

const filterSchedules = (schedules, payload) => {
    return schedules.filter(i =>
        (i.Src === payload.source && i.Dest === payload.destination));
}
