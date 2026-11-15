function App() {
  const studentName = "Kunle";
  const courseNAME = "React lessons";
  const lessonNumber = 8;

  return (
    <>
      <h1 className="Student name">Hello, {studentName}</h1>
      <h3>Today is lesson {courseNAME}</h3>
      <h4>Eleven minus 8 is {8 - 3}.</h4>
    </>
  );
}

export default App;
