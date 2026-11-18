import LessonBadge from "./LessonBadge";

function Panel({ children }) {
  return <main className="panel">{children}</main>;
}

function App() {
  return (
    <Panel>
      <h1>Welcome to the course</h1>

      <LessonBadge title="JSX" lessonNumber={3} />
      <LessonBadge title="Components" lessonNumber={4} />
    </Panel>
  );
}

export default App;
