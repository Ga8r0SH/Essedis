const SET_PHOTO = 'SET_PHOTO';
const SET_ITEM_NAME = 'SET_ITEM_NAME';
const SET_ITEMS = 'SET_ITEMS';
const SET_ITEMS_IMAGES = 'SET_ITEMS_IMAGES';
const SET_GALLERY_ITEM_ID = 'SET_GALLERY_ITEM_ID';
const SET_ITEMS_QUANTITY = 'SET_ITEMS_QUANTITY';
const SET_FORM_SUBMITTED = 'SET_FORM_SUBMITTED';


let initialState = {
    galleryData: [
        // {
        //     id: 1,
        //     quantity: 12,
        //     name: 'Конкурс школьных рисунков "С чего начинается Родина"',
        //     image: image
        // }
    ],

    galleryItemData: [],
    galleryItemID: 0,

    itemsQuantity: 0,

    itemName:'',
    formSubmitted: false
}

const galleryPageReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_PHOTO:
            return { ...state };

        case SET_ITEM_NAME: 
            return {
                ...state,
                itemName: action.name
            }

        case SET_FORM_SUBMITTED:
            return {
                ...state,
                formSubmitted: action.value
            }
        
        case SET_ITEMS:
            return {
                ...state,
                galleryData: action.data
            }

        case SET_ITEMS_QUANTITY:
            return {
                ...state,
                galleryData: {
                    ...state.galleryData,
                    itemsQuantity: action.number
                }
            }

        case SET_ITEMS_IMAGES:
            return {
                ...state,
                galleryItemData: action.data
            }

        case SET_GALLERY_ITEM_ID:
            return {
                ...state,
                galleryItemID: action.id
            }
            
        default:
            return state;
    }
}

export const setGalleryAC = (image) =>({type:SET_PHOTO , image});
export const setItemsAC = data => ({type: SET_ITEMS, data});
export const setItemsQuantityAC = number => ({type: SET_ITEMS_QUANTITY, number});
export const setItemsDataAC = data => ({type: SET_ITEMS_IMAGES, data});
export const setGalleryItemIdAC = id => ({type: SET_GALLERY_ITEM_ID, id});

export const setItemNameAC = name => ({type: SET_ITEM_NAME, name});
export const setFormSubmittedAC = value => ({type: SET_FORM_SUBMITTED, value});

export default galleryPageReducer;