export const TopSection = () => {
    return <>
        <div className="flex justify-between p-3 items-center">
            <div className="flex m-2">
                <div className="w-10 bg-gray-300 rounded">
                    <img src="icon.png" alt="dukaan" />
                </div>
                <div className="h-4 ml-3">
                    <p>
                        Dukaan
                    </p> 
                    <p className="underline text-gray-400 text-xs">
                        Visit store
                    </p>
                </div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </>
}