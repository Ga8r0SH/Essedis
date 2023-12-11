const SET_PEOPLE = 'SET_PEOPLE';
const UPDATE_PERSON_NAME = 'UPDATE_PERSON_NAME';
const UPDATE_POSITION = 'UPDATE_POSITION';

let intialState = {
    aboutUsData: [  ],
    personName:'',
    personPosition:''  
}

const aboutUsPageReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return { 
                ...state ,
                aboutUsData: action.data,
            };

        case UPDATE_PERSON_NAME:
            return {
                ...state,
                personName: action.text
            }

        case UPDATE_POSITION:
            return {
                ...state,
                personPosition: action.text
            }

        default:
            return state;
    }
}

export const setPeopleAC = data => ({type:SET_PEOPLE, data});
export const updatePersonNameAC = (text) => ({type: UPDATE_PERSON_NAME, text: text});
export const updatePositionAC = (text) => ({type: UPDATE_POSITION, text: text});

export default aboutUsPageReducer;
