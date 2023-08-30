import React from "react";

const ParameterizedAccordion: React.FC = () => {
    // Hier sollte die parametrisierte component implementiert werden.
    // Ein Segment des Accordions besteht aus einem button und dem Inhalt. Der Inhalt wird entweder gezeigt oder versteckt
    // abhängig vom Zustand der component. In unserem Fall ändert sich der Zustand, sobald man auf den button eines Segments klickt.
    // Der erste Entwurf der component soll zulassen, dass mehrere Segmente des Accordions gleichzeitig geöffnet werden können.
    // Bei Klick auf den zugehörigen button soll ein Segment getoggelt werden (auf/Inhalt wird gezeigt, zu/Inhalt wird versteckt)
    // Wir müssen den Zustand der component speichern (Welche Segmente des Accordions sind offen?)

    // Es existieren schon css styles in der css Datei in diesem Ordner. Sie können verwendet werden um das Segment, die buttons und den Inhalt
    // (hidden, visible) zu stylen.
    // HiddenItem sollte auf Segment Ebene gesetzt werden
    // AccordionButton sollte auf dem button des Segments gesetzt werden
    // Accordion Content sollte auf dem Inhalt des Segments gesetzt werden. Außerdem sollte die HiddenContent Klasse auf dem Inhalt
    // gesetzt werden wenn man den Inhalt verstecken möchte.
    return<></>
}

export default ParameterizedAccordion