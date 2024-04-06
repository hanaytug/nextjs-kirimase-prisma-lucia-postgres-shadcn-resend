import * as React from 'react';

interface VerificationEmailProps {
  firstName: string;
  lastName: string;
  verificationCode: string;
}

export const EmailTemplate: React.FC<Readonly<VerificationEmailProps>> = ({
  firstName,
  lastName,
  verificationCode,
}) => (
  <div>
    <h1>
      Welcome, {firstName}, {lastName}!
    </h1>
    <p>Here is your verification code : {verificationCode}</p>
    <hr />
    <p>Footer</p>
  </div>
);
