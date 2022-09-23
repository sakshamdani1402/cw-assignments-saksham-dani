import { fetchItems, fetchItemsSuccess, fetchItemsFail, setLoading} from "./actions";


export const fetchData = (page=1) =>{
    console.log("in fetch" + page);
    return dispatch => {
        dispatch(fetchItems());
        
        fetch(`https://reqres.in/api/users?page=${page}`)
        .then(response => response.json())
        .then(data => dispatch(fetchItemsSuccess(data)))
        .catch(err => dispatch(fetchItemsFail(err)));

        dispatch(setLoading(false));
    };
 }
// export const fetchData =  createAsyncThunk((page=1) =>{
//     console.log("in fetch" + page);
//     return dispatch => {
//         dispatch(fetchItems());
        
//         fetch(`https://reqres.in/api/users?page=${page}`)
//         .then(response => response.json())
//         .then(data => dispatch(fetchItemsSuccess(data)))
//         .catch(err => dispatch(fetchItemsFail(err)));

//         dispatch(setLoading(false));
//     };
//  })

//  export function fetchMoreData(){

//     return dispatch => { 
//         fetch(`https://reqres.in/api/users?page=2`)
//         .then(response => response.json())
//         .then(data => dispatch(fetchMoreItems(data)))
//         .catch(err => dispatch(fetchItemsFail(err)));
//     };
//  }