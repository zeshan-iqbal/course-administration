import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
//import { bindActionCreators } from "redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  state = {
    redirectToAddCoursePage: false
  };
  componentDidMount() {
    const { courses, authors, loadCourses, loadAuthors } = this.props;
    if (courses.length === 0) loadCourses();

    if (Object.keys(authors).length === 0) loadAuthors();
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary btn-add"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.object.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    courses: Object.keys(state.authors).length
      ? state.courses.map(course => {
          return {
            ...course,
            authorName: state.authors[course.authorId].name
          };
        })
      : [],
    authors: state.authors
  };
};

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
