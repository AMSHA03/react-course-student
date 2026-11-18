function CourseCard({ tittle, topic, lessonCount }) {
  return (
    <div className="CourseCard">
      <h2>{tittle}</h2>
      <p>{topic}</p>
      <p>{lessonCount}</p>
    </div>
  );
}

export default CourseCard;
