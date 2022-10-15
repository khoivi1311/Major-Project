import { Component } from "react";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";
// import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      currentItems: null,
      pageCount: 0,
      itemOffset: 0,
      data_student: [],
      data_author: [],
    };
  }
  componentDidMount() {
    this.getHistory();
  }
  async getHistory() {
    this.setState({ content: [] });
    await axios
      .get(baseUrl + "historypractices/gethistorypracticebyinformation")
      .then((response) => {
        let data_student = response.data;
        this.setState({ data_student });
      });
    await axios
      .get(baseUrl + "authorhistorypractices/gethistorypracticebyinformation")
      .then((response) => {
        let data_author = response.data;
        this.setState({ data_author });
      });
    let data_student = this.state.data_student;
    let data_author = this.state.data_author;
    let data = data_student.concat(data_author);
    this.renderHistory(data);
  }
  renderHistory(data) {
    console.log("data", data);
    var content = [];
    for (let i = 0; i < data.length; i++) {
      content.push(
        <tr
          key={i}
          className="text-md border-b transition duration-300 ease-in-out hover:bg-gray-200"
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {i + 1}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {data[i].Question_description}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {data[i].Email}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {data[i].Languages}
          </td>
          <td className="text-sm text-[#5089eb] font-light px-6 py-4 whitespace-nowrap">
            {data[i].Pass}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {this.renderCreateDate(data[i].Submit_date)}
          </td>
        </tr>
      );
    }
    this.setState({ content: content });
  }
  renderCreateDate(createDate) {
    return String(
      createDate.slice(8, 10) +
        "-" +
        createDate.slice(5, 7) +
        "-" +
        createDate.slice(0, 4) +
        " " +
        createDate.slice(11, 19)
    );
  }
  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-3xl font-bold mb-6 pb-4 text-center">
          Bảng chấm code
        </h2>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-gray-300 border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        STT
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Tên bài
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Tài khoản
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Ngôn ngữ
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Kết quả
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Thời gian nộp
                      </th>
                    </tr>
                  </thead>
                  <tbody className="" id="table">
                    {this.state.content}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ScoreBoard;
