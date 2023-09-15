import React from "react";
import styles from './accordionContent.module.css'
import { useAccordionContext} from "../Accordion/accordion.module";

type AccordionContentProps = {
    index: number
    children?: React.ReactNode
}

const AccordionContent: React.FC<AccordionContentProps> = ({index, children}) => {

    const {openIndexes} = useAccordionContext()

    return <div className={`${openIndexes.includes(index) ? '' : styles.HiddenContent}`}>
        <div className={styles.AccordionContent} >
            {children}
        </div>
    </div>

}

export default AccordionContent