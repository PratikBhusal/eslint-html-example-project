function App() {
  return (
    <>
      <p className="text-green bg-black bg-red-400">Hello World from App.tsx</p>
      <p text="green" bg="black red-400">Hello World from App.tsx (attributify)</p>
      <p bg="black red-400" text="green">Hello World from App.tsx (attributify)</p>
      <p text="green" bg="red-400 black">Hello World from App.tsx (attributify)</p>
      <p bg="red-400 black" text="green">Hello World from App.tsx (attributify)</p>
      <div className="mx1 m1 mr-1">Testing</div>
      <button className="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600">
        Button
      </button>

      <button
        un-text="sm white"
        un-p="y-2 x-4"
        un-font="mono light"
        un-border="2 rounded blue-200"
        un-bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
      >
        Button
      </button>
    </>
  );
}

export default App;
