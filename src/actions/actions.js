
export const GET_FLIGHT_SCHEDULES = 'flight_schedules';

export const GET_CITIES = 'get_cities';

export const getSchedules = payload => ({
    type: GET_FLIGHT_SCHEDULES,
    payload,
});


export const getCities = () => ({
    type: GET_CITIES
});
