export const BottomSection = () => {
    return <>
        <div className="flex p-4 items-center justify-center">
            <div className=" bg-gray-600 bg-opacity-30 rounded">
                <div className="flex m-3">
                    <div className=" bg-gray-700 bg-opacity-50 rounded flex items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                        </svg>
                    </div>
                    <div className="ml-2">
                        <p className="text-gray-300 text-xs">
                            Available Credits
                        </p>
                        <p className="text-gray-50">
                            224.10
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}