import { soundEffects } from "../SoundEffects/soundEffects"

const API_URL = 'http://localhost:8000'
// const API_URL = 'http://neko-kaiju.com/'

export async function httpGetAllBeers() {
    try {
        const response = await fetch(`${API_URL}/beers`)
        return await response.json()
    } catch(err) {
        console.log("error getting the beers", err)
    }
}

export async function httpAddBeer(newBeer) {
    try {
         await fetch(`${API_URL}/beers/add-beer`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newBeer)
            })
            soundEffects.success.play()
    } catch(err) {
        console.log("error adding beer", err)
    }
}

export async function httpModifyStock(newBeer) {
    try {
         await fetch(`${API_URL}/beers/modify-stock`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newBeer)
            })
            soundEffects.success.play()
    } catch(err) {
        console.log("error updating stock", err)
    }
}

export async function httpDeleteReview(id) {
    try {
    await fetch(`${API_URL}/reviews/delete-review`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: id})
    })
    soundEffects.success.play()
    } catch (err) {
        console.log("error deleting beer", err)
    }
}

export async function httpGetReviews() {
    try {
        const response = await fetch(`${API_URL}/reviews`)
        return await response.json()
    } catch(err) {
        console.log('error getting the reviews', err)
    }
}

export async function httpAddReview(newReview) {
    try {
        await fetch(`${API_URL}/reviews/add-review`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newReview)
            })
            soundEffects.success.play()
    } catch(err) {
        console.log("error adding review", err)
    }
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