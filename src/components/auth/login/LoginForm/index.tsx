'use client';

import React, { useState } from 'react';
import Button from '../../../common/Button';
import Input from '../../../common/Input';
import Card from '../../../common/Card';
import Link from 'next/link';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // API integration will be added here later
        console.log('Login attempt', { email, password });
    };

    return (
        <Card className="w-full max-w-[480px] px-8 py-10 md:px-12 md:py-12 mx-auto">
            <div className="mb-8">
                <h2 className="font-inter text-4xl font-bold text-dark mb-3">Login</h2>
                <p className="text-text-muted text-lg">
                    Enter your email below to login to your account
                </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
                <Input
                    label="Email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Button
                    type="submit"
                    variant="secondary"
                    className="w-full text-base flex justify-center bg-black text-white hover:bg-black/90"
                >
                    Login
                </Button>

                <div className="space-y-4 pt-2">
                    <div className="text-left">
                        <Link
                            href="/forgot-password"
                            className="text-text-muted hover:text-dark underline decoration-1 underline-offset-4 text-base"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <div className="text-left">
                        <span className="text-text-muted text-base">Don't have an account? </span>
                        <Link
                            href="/signup"
                            className="text-dark font-medium hover:underline decoration-1 underline-offset-4 text-base"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </form>
        </Card>
    );
};

export default LoginForm;
