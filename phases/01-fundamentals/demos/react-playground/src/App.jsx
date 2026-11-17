import CourseCard from "./CourseCard";

import "./App.css";

function App() {
  return (
    <>
      <h1>My Learning Courses</h1>

      <CourseCard
        title="React for Beginners"
        topic="Introduction to React"
        lessonCount={5}
      />

      <CourseCard
        title="Introduction to props"
        topic="Argument"
        lessonCount={10}
      />

      <CourseCard
        title="Css for Beginners"
        topic="Styling and Layout"
        lessonCount={15}
      />
    </>
  );
}

export default App;
