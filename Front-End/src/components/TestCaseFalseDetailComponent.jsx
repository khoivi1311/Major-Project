/* eslint-disable eqeqeq */
import { Component } from "react";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";
import { Navigate } from "react-router-dom";

class TestCaseFail extends Component {
  constructor(props) {
    super(props);
    this.state = { content: [], navigate: false, href: "#" };
  }
  componentDidMount() {
    this.getHistory();
  }
  handleButton_Back() {
    let href = "/history";
    this.setState({ navigate: true, href: href });
  }
  getHistory() {
    this.setState({ content: [] });
    let id = "";
    let URL = "";
    if (sessionStorage.getItem("Role") === "Student") {
      id = sessionStorage.getItem("Student_Id");
      URL = "historypractices/gethistorypractice/";
    } else {
      id = sessionStorage.getItem("Author_Id");
      URL = "authorhistorypractices/gethistorypractice/";
    }
    axios.get(baseUrl + URL + id).then((response) => {
      var data = response.data;
      this.renderHistory(data);
    });
  }
  renderHistory(data) {
    var content = [];
    let id = sessionStorage.getItem("ID");
    for (let i = 0; i < data.length; i++) {
      if (data[i].ID == id) {
        if (data[i].Testcase_fail !== "") {
          let temp = data[i].Testcase_fail.split("\n");
          for (let i = 0; i < temp.length-1; i++) {
          content.push(
            <div>
              <h2>
                Testcase false
                {i + 1}
              </h2>
              <p>{temp[i]}</p>
              <br />
            </div>
          );
        }
        }
      }
    }
    this.setState({ content: content });
  }
  render() {
    return (
      <div class="container mt-5 mb-5">
        {this.state.navigate ? (
          <Navigate to={this.state.href} replace={true} />
        ) : null}
        <div className="row justify-content-around">
          <div className="col-8 bg-red-100 p-5 border border-danger rounded">
            <h1 className="text-3xl font-bold  pb-4 text-center text-red-500">
              Test case lỗi
            </h1>
            <div>{this.state.content}</div>
            <div className="text-center">
              <button
                className="btn btn-primary btn-lg rounded-3xl mx-3 mt-5"
                onClick={() => this.handleButton_Back()}
              >
                Quay lại lịch sử
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TestCaseFail;
