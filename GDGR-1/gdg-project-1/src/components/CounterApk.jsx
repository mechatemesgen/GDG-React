import { useState } from 'react';

function CounterApk() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex p-4 bg-gray-500">
            <div className="max-w-2xl mx-auto bg-white p-10 pt-2 rounded-xl shadow-2xl text-center">
            <h1 className='text-center mb-5 font-bold'>Counter App</h1>
                <h1 className="text-6xl font-extrabold text-blue-600 mb-8">
                    {count}
                </h1>
                <div className="flex justify-between gap-2">
                    <button
                        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition transform "
                        onClick={() => setCount(count + 1)}
                    >
                        Increment
                    </button>
                    <button
                        className={`px-6 py-3 rounded-lg transition transform ${
                            count === 0
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-yellow-500 hover:bg-yellow-600'
                        }`}
                        onClick={() => count > 0 && setCount(count - 1)}
                        disabled={count === 0}
                    >
                        Decrement
                    </button>
                    <button
                        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition transform"
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CounterApk;