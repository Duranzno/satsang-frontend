import React from 'react'

const ISSERVER = typeof window === "undefined";

export const session = !ISSERVER ? localStorage.getItem("session") : ''

export const startSession = (user) => {
    localStorage.setItem("session", user ? user.id : '') 
}

export const endSession = () => {
    localStorage.setItem("session", "")
}

