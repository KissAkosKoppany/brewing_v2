import { soundEffects } from "../SoundEffects/soundEffects"

const API_URL = 'http://localhost:8000'

export async function httpGetAllBeers() {
    try {
        const response = await fetch(`${API_URL}/beers`)
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
    try {
        const response = await fetch(`${API_URL}/brewings`)
        const brewings = await response.json()
        return await brewings
    } catch(err) {
        console.log("error getting the brewings list", err)
    }
}

export async function httpAddBrewing(newBrewing) {
    try {
        await fetch(`${API_URL}/brewings/add-brewing`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newBrewing)
        })
        soundEffects.success.play()
    } catch(err) {
        // soundEffects.fail.play()
        console.log("Error adding brewing", err)
    }
}

export async function httpUpdateBrewing() {
    //after api is implemented
}

//user related stuff at the end