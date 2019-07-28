import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  state = {
    course: { title: "" }
  };

  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) actions.loadCourses();

    if (Object.entries(authors).length === 0) actions.loadAuthors();
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    courses: Object.entries(state.authors).length
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

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadCourses: bindActionCreators(loadCourses, dispatch),
      loadAuthors: bindActionCreators(loadAuthors, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
