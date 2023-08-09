import React, {ReactElement} from "react";

interface AccordionItemProps {
    index?: number,
    children: ReactElement[]
}

const AccordionItem: React.FC<AccordionItemProps> = ({index, children}: AccordionItemProps) => {
    const indexedItems: React.ReactElement[] = React.Children.map(children, child => {
        return React.cloneElement(child, {index: index})
    },);

    return <>{indexedItems}</>
}

export default AccordionItem