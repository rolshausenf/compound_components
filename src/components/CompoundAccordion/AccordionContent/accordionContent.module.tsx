import {useAccordionContext} from "../Accordion/accordion.module";
import React from "react";
import styles from './accordionContent.module.css'

interface AccordionContentProps {
    index?: number,
    children: React.ReactNode[] | React.ReactNode,
}

const AccordionContent: React.FC<AccordionContentProps> = ({index, children}: AccordionContentProps) => {
    const {state} = useAccordionContext()
    return index !== undefined ? <span className={`${styles.AccordionContent} ${!state.openIndexes.includes(index) ? styles.HiddenContent : ''}`}>{children}</span> : null
}

export default AccordionContent