import { humeur } from './humeur'

export const logic = ($message) => {
    const result = humeur[getRandomInt(0, humeur.length)]
    const newMessage = Object.assign($message.message, { content: result })
    return Object.assign($message, { message: newMessage })
}

export const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}