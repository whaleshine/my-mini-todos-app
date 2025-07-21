const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Home</h1>
      <p className="mt-4 text-lg text-gray-600">
        Welcome to the Mini Todos App!
      </p>
      <p className="mt-2 text-sm text-gray-500">
        This is a simple application to manage your todos.
      </p>
    </div>
  );
};

export default Home;
