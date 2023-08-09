import React, {useContext, useReducer} from "react";

enum AccordionActionType {
    TOGGLE_INDEX = 'TOGGLE_INDEX'
}

interface AccordionAction {
    type: AccordionActionType;
    payload: number;
}

interface AccordionState {
    openIndexes: number[],
}

interface AccordionProps {
    reducer?: any,
    children: React.ReactElement[],
}

function useAccordion(reducer: (state: AccordionState, action: AccordionAction) => AccordionState){
    const initialState: AccordionState = {openIndexes: []}
    const [state, dispatch] = useReducer(reducer, initialState)
    const toggleIndex = (index: number) => dispatch({type: AccordionActionType.TOGGLE_INDEX, payload: index})
    return {state, toggleIndex}
}

function useAccordionContext() {
    const context = useContext(AccordionContext)
    if(!context) {
        throw new Error('This component can only be used within an Accordion')
    }
    return context
}

function accordionReducer(state: AccordionState, action: AccordionAction): AccordionState {
    switch (action.type) {
        case AccordionActionType.TOGGLE_INDEX:
            if(state.openIndexes.includes(action.payload)){
                return {openIndexes: state.openIndexes.filter((i) => i !== action.payload)}
            }
            else {
               return {openIndexes: [...state.openIndexes, action.payload]}
            }
        default:
            throw new Error('This should never happen')
    }
}

interface AccordionContextType {
    state: AccordionState,
    toggleIndex: Function,
}

const AccordionContext = React.createContext<AccordionContextType>({state: {openIndexes: []}, toggleIndex: () => {}})

const Accordion: React.FC<AccordionProps> = ({reducer = accordionReducer, children}: AccordionProps) => {
    const {state, toggleIndex} = useAccordion(reducer)
    const accordionItemsWithIndexes: React.ReactElement[] = React.Children.map(children, (child,index) => {
        return React.cloneElement(child, {index: index})
    },);

    return <AccordionContext.Provider value={{state: state, toggleIndex: toggleIndex}}>{accordionItemsWithIndexes}</AccordionContext.Provider>
}

export {Accordion, useAccordionContext, AccordionActionType};
export type { AccordionState, AccordionAction };
