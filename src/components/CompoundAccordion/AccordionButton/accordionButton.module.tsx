import {useAccordionContext} from "../Accordion/accordion.module";
import React from "react";
import styles from './accordionButton.module.css'

interface AccordionButtonProps {
    index?: number,
    title: string,
}

const AccordionButton: React.FC<AccordionButtonProps> = ({index, title}: AccordionButtonProps) => {
    const {toggleIndex} = useAccordionContext()
    return <button className={styles.AccordionButton} onClick={() => toggleIndex(index)}>{title}</button>
}

export default AccordionButton