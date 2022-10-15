import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../shared/baseUrl";
import congraratulation from "../assets/images/congratulation.gif";
import { Navigate } from "react-router-dom";

const Result = () => {
  const [navigate, setNavigate] = useState(false);

  const displayResult = () => {
    return (
      <>
        <h3 className="mt-3">
          Câu hỏi: {sessionStorage.getItem("Description")}
        </h3>
        <div
          className="mt-3 "
          dangerouslySetInnerHTML={displayTestCaseFail()}
        />
        <h1 className="mt-4 text-3xl font-medium text-center text-danger">
          Kết quả: {sessionStorage.getItem("Pass")}/
          {sessionStorage.getItem("Total_TestCases")} Test Cases
        </h1>
      </>
    );
  };

  const addHistoryResultProcess = () => {
    var questionId = sessionStorage.getItem("Question_id");
    var questionDescription = sessionStorage.getItem("Description");
    var pass = String(
      sessionStorage.getItem("Pass") +
        "/" +
        sessionStorage.getItem("Total_TestCases")
    );
    var testCaseFail = String(renderTestCaseFail());
    var sourceCode = sessionStorage.getItem("SourceCode");
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();
    if (sessionStorage.getItem("Role") === "Student")
    { 
      var studentId = sessionStorage.getItem("Student_Id");
      let param = {
        Question_id: questionId,
        question_description: questionDescription,
        Student_id: studentId,
        Pass: pass,
        Testcase_fail: testCaseFail,
        Languages: String(sessionStorage.getItem("Languages")),
        Source_code: sourceCode,
        Submit_date: date,
      };
      postHistoryResult(param,"historypractices/add");
    } else if (sessionStorage.getItem("Role") === "Author")
    {
      var authorId = sessionStorage.getItem("Author_Id");
      console.log("authorId", authorId);
      let param = {
        Question_id: questionId,
        Question_description: questionDescription,
        Author_id: authorId,
        Pass: pass,
        Testcase_fail: testCaseFail,
        Languages: String(sessionStorage.getItem("Languages")),
        Source_code: sourceCode,
        Submit_date: date,
      };
      postHistoryResult(param,"authorhistorypractices/add");
    }
  };

  const postHistoryResult = (param,URL) => {
    axios.post(baseUrl + URL, param).then((response) => {
      var result = response.data;
      console.log(result);
    });
    clearSessionStorage();
  };

  const renderTestCaseFail = () => {
    var tmp =
      sessionStorage.getItem("Total_TestCases") -
      sessionStorage.getItem("Pass");
    var data = "";
    if (tmp !== 0) {
      for (var i = 0; i < tmp; i++) {
        var name = String("Fail" + i);
        data += String(sessionStorage.getItem(name)) + "\n";
      }
    }
    return data;
  };

  const displayTestCaseFail = () => {
    var temp =
      sessionStorage.getItem("Total_TestCases") -
      sessionStorage.getItem("Pass");
    let content = ``;
    if (temp !== 0) {
      for (var i = 0; i < temp; i++) {
        var input = String("Fail_Input" + i);
        var output = String("Fail_Output" + i);
        var actual_Output = String("Fail_Actual_Output" + i);
        content += `<h2 className="text-red-600">Testcase false ${
          i + 1
        }</h2><p>${sessionStorage.getItem(
          input
        )}</p><p>${sessionStorage.getItem(
          output
        )}</p><p>${sessionStorage.getItem(actual_Output)}</p><br/>`;
      }
    }
    return { __html: content };
  };

  const clearSessionStorage = () => {
    var tmp =
      sessionStorage.getItem("Total_TestCases") -
      sessionStorage.getItem("Pass");
    if (tmp !== 0) {
      for (var i = 0; i < tmp; i++) {
        var name = String("Fail" + i);
        sessionStorage.removeItem(name);
      }
    }
    alert("Lưu bài thành công");
    setNavigate(true);
  };
  const handleButton_Back = () => {
    var tmp =
      sessionStorage.getItem("Total_TestCases") -
      sessionStorage.getItem("Pass");
    if (tmp !== 0) {
      for (var i = 0; i < tmp; i++) {
        var name = String("Fail" + i);
        sessionStorage.removeItem(name);
      }
    }
    setNavigate(true);
  };
  return (
    <div class="container mt-5 mb-24">
      {navigate ? <Navigate to="/practice" replace={true} /> : null}
      <img
        src={congraratulation}
        className="mx-auto my-5 rounded shadow-lg"
        alt="congratulation"
      />
      <div className="row justify-content-around">
        <form
          action=""
          className="col-8 bg-gray-100 p-5 border border-primary rounded"
        >
          <h1 className="text-center text-3xl text-blue-500  text-uppercase">
            Kết quả
          </h1>
          {displayResult()}
          <div className="text-center">
            <button
              className="btn btn-primary btn-lg rounded-3xl mx-3 mt-5"
              onClick={() => handleButton_Back()}
            >
              Quay lại luyện tập
            </button>
            
            <button
              className="btn bg-lime-600 hover:bg-lime-700 rounded-3xl text-white btn-lg mt-5"
              onClick={() => addHistoryResultProcess()}
            >
              Lưu lịch sử làm bài
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Result;
