

export default function Home() {
  return (
    <div className=" h-1/2 w-1/2 m-auto my-20">
      <h1 className=" p-1 text-center font-bold text-3xl">Pomodoro Clock</h1>
      <div className=" border-2 rounded-md p-8 text-center space-y-3">
        <h2 className=" font-semibold text-2xl">Timer</h2>
        <h2 className=" font-semibold text-2xl">25:00</h2>
        <div className=" inline-block space-x-3">
          <button className=" p-3 bg-cyan-800 rounded-lg shadow-xl text-white text-lg">Reset</button>
          <button className=" p-3 bg-red-500 rounded-lg shadow-xl text-white text-lg">Start</button>
        </div>
      </div>
    </div>
  )
}
