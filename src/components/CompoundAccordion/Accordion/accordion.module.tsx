import React from "react";


const Accordion: React.FC = () => {
    // Im Falle der compound component teilen wir das Accordion in seine Bestandteile auf und erstellen für jeden Teil eine eigene
    // component (Accordion/Wrapper, AccordionButton, AccordionContent, AccordionItem).
    // Wir teilen den state der von allen Teilen gebraucht wird über einen React Context. Außerdem stellen wir sicher, dass die components
    // nur in diesem React context verwendet werden indem wir eine Fehlermeldung konfigurieren, falls Teile des Accordions außerhalb des
    // Accordion Context verwendet werden.

    // Accordion ist die wrapper component die den Context erzeugt und an die Kind components weitergibt.

    // Im zweiten Schritt wollen wir das Prinzip "Inversion of control" nutzen um den Verwendern der Accordion component die Freiheit zu geben,
    // den state nach ihren Wünschen zu verändern. Dazu erzeugen wir einen default React Reducer der standardmäßig von der component verwendet wird.
    // Außerdem geben wir den Nutzern die Möglichkeit einen selbst erstellten Reducer zu verwenden, indem wir diesen über die Parameter der component
    // annehmen.

    // Außerdem wollen wir die Accordion Funktionalität wiederverwendbar machen indem wir einen custom hook erstellen.
    return <></>
}

export {Accordion};
