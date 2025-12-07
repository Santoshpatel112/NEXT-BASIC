const Docs = async ({ params }) => {
  const { id } = await params;
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Documentation
        </h1>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Path: <span className="font-mono text-blue-600 dark:text-blue-400">{id.join('/')}</span>
          </p>
          <div className="space-y-2">
            {id.map((segment, index) => (
              <div key={index} className="text-gray-600 dark:text-gray-400">
                Segment {index + 1}: <span className="font-semibold">{segment}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;