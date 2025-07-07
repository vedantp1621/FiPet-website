import React from 'react';

const MobileFooter = () => {
    return (
        <footer className="bg-background px-6 py-8">

            <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 leading-tight mb-1">
                    We&apos;re changing the way
                </h2>
                <h2 className="text-3xl font-bold text-gray-800 leading-tight mb-2">
                    teens learn finance.
                </h2>
                <div className="text-3xl font-bold text-orange-500 mb-1">
                    Forever.
                </div>
                <div className="text-3xl font-bold gradient-text">
                    One quest at a time.
                </div>
            </div>


            <div className="grid grid-cols-3 gap-6 mb-12">

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
                    <div className="space-y-4">
                        <a
                            href="#"
                            className="block text-gray-600 text-base"
                        >
                            About Us
                        </a>
                        <a
                            href="#"
                            className="block text-gray-600 text-base"
                        >
                            Team
                        </a>
                    </div>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
                    <div className="space-y-4">
                        <a
                            href="#"
                            className="block text-gray-600 text-base"
                        >
                            Explore
                        </a>
                        <a
                            href="#"
                            className="block text-gray-600 text-base"
                        >
                            Waitlist
                        </a>
                    </div>
                </div>


                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
                    <div className="space-y-4">
                        <a
                            href="#"
                            className="block text-gray-600 text-base"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="#"
                            className="block text-gray-600 text-base"
                        >
                            Instagram
                        </a>
                        <a
                            href="#"
                            className="block text-gray-600 text-base"
                        >
                            TikTok
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>©2025 FiPet</span>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-500">Privacy Policy</a>
                    <a href="#" className="text-gray-500">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default MobileFooter;