import React from 'react';
import './App.css'
import {Accordion} from "./components/CompoundAccordion/Accordion/accordion.module";
import AccordionButton from "./components/CompoundAccordion/AccordionButton/accordionButton.module";
import AccordionContent from "./components/CompoundAccordion/AccordionContent/accordionContent.module";

function onlyOneIndexOpenAtATimeReducer(state: number[], action: { type: string, payload: number }): number[] {
    switch (action.type) {
        case 'TOGGLE_INDEX':
            return [action.payload]
        default:
            return state
    }
}

const App: React.FC = () => {
    return (
        <div className='app'>
            <div className='headline'>
                <h1>Compound Component Tutorial</h1>
            </div>
            <div className='container'>
                <div>
                    <h2>Compound Accordion</h2>
                    <Accordion reducer={onlyOneIndexOpenAtATimeReducer}>
                        <AccordionButton index={0}>
                            Button 1
                        </AccordionButton>
                        <AccordionContent index={0}>
                            Content 1
                        </AccordionContent>
                        <AccordionButton index={1}>
                            Button 2
                        </AccordionButton>
                        <AccordionContent index={1}>
                            Content 2
                        </AccordionContent>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default App;
