import * as React from "react";

interface EmailTemplateProps {
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    email,
    message
}) => (
    <div className="text-2xl">
        <p className="text-2xl"><strong>E-posta:</strong> {email}</p>
        <p className="text-2xl"><strong>Mesaj:</strong> {message}</p>
    </div>
);

export default EmailTemplate;