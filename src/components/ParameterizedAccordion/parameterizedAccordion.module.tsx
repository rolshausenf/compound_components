import React, {useState} from "react";
import {AccordionItem} from "../../utils/Items";
import styles from './parameterizedAccordion.module.css'

interface ParameterizedAccordionProps {
    items: AccordionItem[]
}

const ParameterizedAccordion: React.FC<ParameterizedAccordionProps> = ({items}: ParameterizedAccordionProps) => {
    const [openIndexes, setOpenIndexes] = useState([] as number[])

    function toggleIndex(index: number): void {
        openIndexes.includes(index) ? setOpenIndexes(openIndexes.filter((i) => i !== index)) : setOpenIndexes([...openIndexes, index])
    }

    return (<div>
        {items.map((item, index) => (
            <div className={`${!openIndexes.includes(index) ? styles.HiddenItem: ''}`} key={item.title}>
                <button className={styles.AccordionButton} onClick={() => toggleIndex(index)}>{item.title}</button>
                <span className={`${styles.AccordionContent} ${!openIndexes.includes(index) ? styles.HiddenContent: ''}`}>{item.content}</span>
            </div>
        ))}
    </div>)
}

export default ParameterizedAccordion