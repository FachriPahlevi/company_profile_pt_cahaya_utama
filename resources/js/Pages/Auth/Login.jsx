
// Login.jsx
import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="w-full max-w-md px-6 py-8">
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="w-24 h-24 bg-blue-50 rounded-full p-1 shadow-xl mb-6">
                        <div className="w-full h-full bg-blue-50 rounded-full flex items-center justify-center">
                            <Link href="#">
                                <img
                                    src="/img/logo/fav-icon-150x150.png"
                                    alt="Logo"
                                    className="h-16 w-16 object-contain transform hover:scale-105 transition-transform"
                                />
                            </Link>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Selamat Datang
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Silakan masuk ke akun Anda
                    </p>
                </div>

                {status && (
                    <div className="mb-6 px-4 py-3 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    <div className="space-y-2">
                        <InputLabel htmlFor="username" value="Username" className="text-gray-700" />
                        <div className="relative">
                            <TextInput
                                id="username"
                                type="text"
                                name="username"
                                value={data.username}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                autoComplete="username"
                                isFocused={true}
                                onChange={handleOnChange}
                            />
                        </div>
                        <InputError message={errors.username} className="text-sm" />
                    </div>

                    <div className="space-y-2">
                        <InputLabel htmlFor="password" value="Password" className="text-gray-700" />
                        <div className="relative">
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                autoComplete="current-password"
                                onChange={handleOnChange}
                            />
                        </div>
                        <InputError message={errors.password} className="text-sm" />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                value={data.remember}
                                onChange={handleOnChange}
                                className="text-blue-500 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                Forgot password?
                            </Link>
                        )}
                    </div>

                    <PrimaryButton
                        className="w-full py-3 bg-blue-600 flex justify-center text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-0.5 transition-all duration-200"
                        disabled={processing}
                    >
                        {processing ? 'Loading...' : 'Log in'}
                    </PrimaryButton>
                </form>
            </div>
        </GuestLayout>
    );
}