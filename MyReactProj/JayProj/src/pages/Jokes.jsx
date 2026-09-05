import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Jokes = () => {

    const [Jokes, setJokes] = useState('List of Jokes')
    const [setup, setSetup] = useState('List of Jokes')

    useEffect(() => {
        getJokes()
    }, [])

    const getJokes = async () => {
        await axios.get('https://official-joke-api.appspot.com/random_joke').then(res => {
            const randomPunch = res.data.punchline
            const randomSetup = res.data.setup

            setJokes(randomPunch)
            setSetup(randomSetup)
        }).catch(err => {
            console.log(err)
        })
    }

    return (

        <div>
            <h1>Setup: {setup}</h1>
            <p>PunchLine: {Jokes}</p>
        </div>

    )
}

export default Jokes