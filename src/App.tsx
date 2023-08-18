import React from 'react';
import './App.css'
import {items} from "./utils/Items";
import ParameterizedAccordion from "./components/ParameterizedAccordion/parameterizedAccordion.module";
import AccordionButton from "./components/CompoundAccordion/AccordionButton/accordionButton.module";
import AccordionContent from "./components/CompoundAccordion/AccordionContent/accordionContent.module";
import {
    Accordion,
    AccordionAction,
    AccordionActionType,
    AccordionState
} from "./components/CompoundAccordion/Accordion/accordion.module";
import AccordionItem from "./components/CompoundAccordion/AccordionItem/accordionItem.module";


function onlyOneItemOpenAtATimeReducer(state: AccordionState, action: AccordionAction) {
    switch (action.type) {
        case AccordionActionType.TOGGLE_INDEX:
            return {openIndexes: [action.payload]}
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
                    <h2>Parameterized Accordion</h2>
                    <ParameterizedAccordion items={items}/>
                </div>
                <div>
                    <h2>Compound Accordion</h2>
                    <Accordion reducer={onlyOneItemOpenAtATimeReducer}>
                        <AccordionItem>
                            <AccordionButton title={'🐴'}/>
                            <AccordionContent>
                                Horses can sleep both lying down and standing up.
                                Domestic horses have a lifespan of around 25 years. A 19th
                                century horse named "Old Billy" is said to have lived 62 years
                            </AccordionContent>
                            <AccordionButton title={'🐴'}/>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton title={'🦏'}/>
                            <AccordionContent>
                                Rhino skin maybe thick but it can be quite sensitive to sunburns
                                and insect bites which is why they like wallow so much – when the mud
                                dries it acts as protection from the sunburns and insects.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton title={'🦄'}/>
                            <AccordionContent>
                                If you’re looking to hunt a unicorn, but don’t know where
                                to begin, try Lake Superior State University in Sault Ste. Marie, Michigan.
                                Since1971, the university has issued permits to unicorn questers.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default App;
