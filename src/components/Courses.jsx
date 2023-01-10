import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useState } from 'react';
import courses from '../data/courses';

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setsortedCourses] = useState();
  return (
    <>
      <h1>Courses</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
