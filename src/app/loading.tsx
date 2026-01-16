
export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black/90 transition-colors duration-300 pt-32 pb-10">
            <div className="container mx-auto px-6 animate-pulse">
                {/* Hero / Main Content Skeleton */}
                <div className="w-full h-[60vh] rounded bg-gray-200 dark:bg-gray-800/60 mb-8 shadow-sm"></div>

                {/* Secondary Content Lines */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    <div className="h-6 bg-gray-200 dark:bg-gray-800/60 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-800/60 rounded w-1/2"></div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-800/60 rounded w-5/6"></div>
                </div>
            </div>
        </div>
    );
}
