import React, { act, useEffect, useReducer, useState } from 'react'
import { projectFirestore, timestamp } from '../firebase/config'

const initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case 'IS_PENDING':
            return {
                document: null,
                isPending: true,
                error: null,
                success: false
            }
        case 'ADDED_DOCUMENT':
            return {
                document: action.payload,
                isPending: false,
                error: null,
                success: true
            }
        case 'ERROR':
            return {
                document: null,
                isPending: false,
                error: action.payload,
                success: false
            }
        default:
            return state
    }
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    // collection ref
    const ref = projectFirestore.collection(collection)

    // dispatch if not cancelled
    const dispatchIFNotCancelled = (action) => {
        if (!isCancelled) {
          dispatch(action)  
        } 
    }

    // add a document
    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING' })
        try {
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add({ ...doc, createdAt })
            dispatchIFNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
        } catch (error) {
            dispatchIFNotCancelled({ type: 'ERROR', payload: error.message })
        }
    }

    // delete a document
    const deleteDocument = async (id) => {

    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])


    return { addDocument, deleteDocument, response }
}