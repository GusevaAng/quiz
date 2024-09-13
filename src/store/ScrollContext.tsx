import React, { createContext, useState } from 'react'


interface IScrollContext {
    setQuizTopicsRef: (ref: HTMLElement | null) => void
    scrollToQuizTopics: () => void
    setFeedbackRef: (ref: HTMLElement | null) => void
    scrollToFeedback: () => void
}


export const ScrollContext = createContext<IScrollContext>({
    setQuizTopicsRef: () => {},
    scrollToQuizTopics: () => {},
    setFeedbackRef: () => {},
    scrollToFeedback: () => {},
})

interface IProps {
    children: JSX.Element
}

export const ScrollProvider = ({ children }: IProps) => {

    const [quizTopicsRef, setQuizTopicsRef] = useState<HTMLElement | null>(null)

    const scrollToQuizTopics = () => {
        if (quizTopicsRef) {
            quizTopicsRef.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const [feedbackRef, setFeedbackRef] = useState<HTMLElement | null>(null)

    const scrollToFeedback = () => {
        if (feedbackRef) {
            feedbackRef.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <ScrollContext.Provider value={{ scrollToQuizTopics, setQuizTopicsRef, scrollToFeedback, setFeedbackRef }}>
            {children}
        </ScrollContext.Provider>
    )

}

