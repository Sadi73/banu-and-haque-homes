import React from 'react';
import { MdError } from "react-icons/md";

const ErrorTooltip = ({ content }) => {
    return (
        <div className="tooltip custom-error" data-tip={content}>
           <MdError />
        </div>
    );
};

export default ErrorTooltip;