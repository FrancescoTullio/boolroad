import trips from "../data/data";
import TripCard from "./components/TripCard";

function App() {

  return (
    <>
      <header>
        <div className="container">
          <h1>boolroad!</h1>
        </div>
      </header>
      <main className="mt-5">
        <div className="container">
          <h2 className="my-5">Viaggi in corso in questo momento: </h2>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 gy-4">
            {trips.map((curTrip) =>{
              return (
                <div className='col' key={curTrip.id}>
                <TripCard
                trip = {curTrip}
                />
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
