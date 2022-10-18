# Major-Project
Website Practice Coding
## Giới thiệu đồ án
Đây là đồ án chuyên ngành được thực hiện theo nhóm bao gồm ba thành viên. Trong đồ án này thực hiện xây dựng trang web Practice Coding giúp cho người dùng có thể luyện tập code theo các bài tập đã được đăng tải bởi các tác giả. Trang web này sẽ phân người dùng ra thành học viên hay là tác giả, nếu người dùng là học viên thì có thể truy cập vào trang web để thực hiện các bài luyện tập code đã được đăng tải bởi các tác giả và xem lại lịch sử các bài đã làm. Còn đối với người dùng là tác giả thì họ có thể truy cập vào trang web để thực hiện việc đăng bài, thực hiện các bài luyện tập code đã được đăng tải bởi các tác giả và xem lại lịch sử các bài đã làm. Để thực hiện việc phân vai trò cho người dùng thì khi đăng ký tài khoản sẽ cho người dùng chọn vai trò là tác giả hay là học viên và khi đăng nhập vào hệ thống thì ứng với mỗi vai trò sẽ có quyền thực hiện các chức năng như mô tả ở trên. Khi thực hiện luyện tập hệ thống sẽ cho phép người dùng lựa chọn ngôn ngữ lập trình mà hệ thống hỗ trợ, trong phần luyện tập sẽ có hai loại test case bao gồm: loại thứ nhất là một loạt các test case sẽ hiển thị cho người dùng xem và cho phép họ sử dụng nó để chạy thử chương trình của họ viết và loại thứ hai là một loạt các test case sẽ được giấu đi và người dùng không thể xem được và loại test case này sẽ được sử dụng kết hợp với test case ở loại thứ nhất khi người dùng bấm nút nộp bài. Sau khi nộp bài hệ thống sẽ hiển thị kết quả chương trình có họ pass bao nhiêu test case trên tổng số hai loại test case trên và hỏi họ là có muốn lưu lại lịch sử làm bài hay không. Trong phần tính năng đăng bài thì chỉ xuất hiện với người dùng với vai trò là tác giả, hệ thống sẽ hiển thị một biểu mẫu cho họ nhập bài luyện tập của họ và ấn nút để đăng bài.
## Công nghệ sử dụng
- Front-end: ReactJS, TailwindCSS.
- Back-end: NodeJS (Express)
- Database: MySQL
- VPS, Docker, Jobe In A Box [(RESTful API hỗ trợ thực thi code)](https://github.com/trampgeek/jobe).
## Vai trò trong đồ án
- Xây dựng một web API có kết nối với cơ sở dữ liệu và tương tác với dữ liệu được ghi lại trong các bảng.
- Xây dựng các giao thức cho web API để nhận các yêu cầu và phản hồi dữ liệu theo các yêu cầu request gửi đến.
- Deploy Web API lên VPS sử dụng Docker.
- Xây dựng các hàm xử lý nghiệp vụ cho tính năng đăng nhập, đăng ký, đăng tải bài luyện tập mới.
