// put stuff here
let getDogs = ()=>{
    store.dispatch({
        type: "DOG_SEARCH_INITIATED"
    })
    $.ajax({
        method: "GET",
        url: "https://dog.ceo/api/breeds/image/random"
    }).then((dogData)=> {
        store.dispatch({
            type: "DOG_FOUND",
            dog: dogData.message
        })
    })
}