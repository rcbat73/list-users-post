import React, { useEffect } from "react";
import AlertWrapper from "./AlertWrapper";

const Alert = ({ text, onAlertHandler }) => {
    useEffect(() => {
        const timerRef = setInterval(() => {
            onAlertHandler(false);
        }, 3000);

        return () => {
            clearInterval(timerRef);
        }
    }, []);

    return (
        <AlertWrapper>
            {text}
        </AlertWrapper>
    );
};

export default Alert;
