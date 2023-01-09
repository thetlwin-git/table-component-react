import {
    API_SUCCESS,
    API_FAIL,
    GET_DATA
} from "./actionTypes";

const INIT_STATE = {
    data: []
};

const Dashboard = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_SUCCESS:
            switch (action.payload.actionType) {
                case GET_DATA:
                    return {
                        ...state,
                        data: action.payload.data
                    };
                default:
                    return state;
            }
        case API_FAIL:
            switch (action.payload.actionType) {
                case GET_DATA:
                    return {
                        ...state,
                        dataError: action.payload.error
                    };


                default:
                    return state;
            }
        default:
            return state;
    }
}


export default Dashboard;