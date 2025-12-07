const Student = async ({ params }) => {
  const { id } = await params;
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Student Profile
        </h1>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Student ID: <span className="font-semibold text-blue-600 dark:text-blue-400">{id}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;