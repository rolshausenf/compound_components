import React from "react";

const AccordionContext: React.Context<AccordionContextType> =
    React.createContext<AccordionContextType>({openIndexes: [], toggleOpenIndex: () => {}})

export type AccordionContextType = {
    openIndexes: number[],
    toggleOpenIndex: (index: number) => void,
}

type AccordionProps = {
    children: React.ReactNode[]
    reducer?: React.Reducer<number[], AccordionAction>
}

type AccordionActionType = 'TOGGLE_INDEX'
type AccordionAction = {
    type: AccordionActionType
    payload: number
}

function accordionReducer(state: number[], action: AccordionAction): number[]{
    switch (action.type) {
        case 'TOGGLE_INDEX':
            return state.includes(action.payload) ? state.filter(i => i !== action.payload) : [...state, action.payload]
    }
}

const useAccordion = (reducer: React.Reducer<number[], AccordionAction> = accordionReducer) => {
    const [openIndexes, dispatch] = React.useReducer<React.Reducer<number[], AccordionAction>>(reducer, [])

    function toggleOpenIndex(index: number): void {
        dispatch({type: 'TOGGLE_INDEX', payload: index})
    }

    return {openIndexes, toggleOpenIndex}
}

export const useAccordionContext = () => {
    const context = React.useContext<AccordionContextType>(AccordionContext)
    if (context === undefined) {
        throw new Error('useAccordionContext must be used within an AccordionContextProvider')
    }
    return context
}

const Accordion: React.FC<AccordionProps> = ({children, reducer}) => {

    const {openIndexes, toggleOpenIndex} = useAccordion(reducer)
    const contextValue: AccordionContextType = {openIndexes, toggleOpenIndex}

    return <AccordionContext.Provider value={contextValue}>
        {children}
    </AccordionContext.Provider>
}

export {Accordion};
