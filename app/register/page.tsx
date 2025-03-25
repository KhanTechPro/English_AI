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
                            <span className="color-main font-bold">Register</span>  to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" className="space-y-4">
                            <div className="flex gap-3 items-center ">
                                <label htmlFor="englishLevel" className="block text-lg font-medium text-gray-900">
                                    English level
                                </label>
                                <select id="englishLevel" defaultValue="a1" className="border rounded px-2 py-1 ">
                                    <option value="none">No Knowledge</option>
                                    <option value="basic">Basic (Amateur)</option>
                                    <option value="a1">A1 (Beginner)</option>
                                    <option value="a2">A2 (Elementary)</option>
                                    <option value="b1">B1 (Intermediate)</option>
                                    <option value="b2">B2 (Upper-Intermediate)</option>
                                    <option value="c1">C1 (Advanced)</option>
                                    <option value="c2">C2 (Proficient)</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        required
                                        autoComplete="fullname"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

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
                                    Register
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm/6 text-gray-500">
                            Already have an account?{' '}
                            <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Get Sign In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
