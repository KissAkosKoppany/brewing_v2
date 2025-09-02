const API_URL = 'http://localhost:8000'

export async function httpGetAllBeers() {
    try {
        const response = await fetch(`${API_URL}/beers`)
        // console.log("frontend", response)
        return await response.json()
    } catch(err) {
        console.log("error getting the beers", err)
    }
}

export async function httpAddBeer() {
    //after api is implemented
    //need to implement the fronted for it
}

export async function httpGetReviews() {
    //after api is implemented
}

export async function httpAddReview() {
    //after api is implemented
}

export async function httpGetBrewingsList() {
    //after api is implemented
}

export async function httpAddBrewing() {
    //after api is implemented
}

export async function httpUpdateBrewing() {
    //after api is implemented
}

//user related stuff at the end