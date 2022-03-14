import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removetour = (id) => {
    const newtour = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newtour);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setLoading(false);
      setTours(data);
      console.log(data);
      //console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <>
        <main>
          <Loading />
        </main>
      </>
    );
  }

  if (tours.length === 0) {
    return (
      <>
        <main>
          <div className="title">
            <h2>No Tours</h2>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <main>
        <Tours tours={tours} removetour={removetour} />
      </main>
    </>
  );
}

export default App;
