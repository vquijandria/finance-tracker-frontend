import React, { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar datos al servidor
        console.log({ email, password });
        // Aquí puedes reiniciar los campos del formulario después de enviar
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-md p-4 bg-white shadow-md rounded-md">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label htmlFor="email" className="text-sm font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="border border-gray-300 p-2"
                        placeholder="Enter your email"
                        required
                    />

                    <label htmlFor="password" className="text-sm font-semibold">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="border border-gray-300 p-2"
                        placeholder="Enter your password"
                        required
                    />

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
                </form>
            </div>
        </div>
    );
}
