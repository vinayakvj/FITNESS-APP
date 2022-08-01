import React, { useEffect, useState } from "react";

//components
import WorkOutDetails from "../components/WorkoutDetails";

function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/fit/workouts/getall");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((work) => {
            return (
              <WorkOutDetails
                key={work._id}
                title={work.title}
                reps={work.reps}
                load={work.load}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
