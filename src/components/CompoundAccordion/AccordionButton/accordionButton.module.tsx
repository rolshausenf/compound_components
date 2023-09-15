import React from "react";
import styles from './accordionButton.module.css'
import {useAccordionContext} from "../Accordion/accordion.module";

type AccordionButtonProps = {
    index: number
    children?: React.ReactNode
}

const AccordionButton: React.FC<AccordionButtonProps> = ({index, children}) => {
    const {toggleOpenIndex} = useAccordionContext()

    return <button className={styles.AccordionButton} onClick={() => toggleOpenIndex(index)}>
        {children}
    </button>
}

export default AccordionButton