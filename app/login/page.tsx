import Image from 'next/image';
import bgAuth from '../../public/bg-auth.jpg';

const page = () => {
    return (
        <div>
            <div className="flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 relative">
                <Image src={bgAuth} alt="Background" className="w-full h-full absolute z-0 blur-xs hover:blur-none transition" />
                <div className="border rounded bg-light w-[450px] pb-10 z-10">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl/9 tracking-tight text-gray-900">
                            <span className="color-main font-bold">Sign In</span> to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" className="space-y-4">

                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-medium text-gray-900 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 btn-register"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm/6 text-gray-500">
                            Don't have an account yet?{' '}
                            <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Get Register
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
