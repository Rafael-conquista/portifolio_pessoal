import { useEffect, useState } from "react";

export function EscritaAutomatica(props) {
    const [text, setText] = useState("");
    const tempo = props.props.tempo;

    const Escrever = (text, i = 0) => {
        if (i < text.length) {
            setText(text.slice(0, i + 1) + "|");
            setTimeout(() => Escrever(text, i + 1), tempo);
        } else {
            setText(text.slice(0, i + 1));
            setTimeout(() => Escrever(text, i + 1), tempo);
        }
    };

    useEffect(() => {
        const delay = props.props.delay || 0; // Tempo de atraso antes de começar a escrever, padrão é 0

        setTimeout(() => {
            setTimeout(() => Escrever(props.props.text), delay);
        }, delay);
    }, []);

    return <>{text}</>;
}
