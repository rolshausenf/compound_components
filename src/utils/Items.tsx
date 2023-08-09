import React, {ReactElement} from "react";

interface AccordionItem {
    title: string,
    content: ReactElement,
}


const items: AccordionItem[] = [
    {
        title: '🐴',
        content: <>Horses can sleep both lying down and standing up. Domestic horses have a lifespan of around 25 years. A 19th century horse named "Old Billy" is said to have lived 62 years</>
    },
    {
        title: '🦏',
        content: <>Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much – when the mud dries it acts as protection from the sunburns and insects.</>

    },
    {
        title: '🦄',
        content: <>If you’re looking to hunt a unicorn, but don’t know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since1971, the university has issued permits to unicorn questers.</>

    },
]

export {items}
export type { AccordionItem }
