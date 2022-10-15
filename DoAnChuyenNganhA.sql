CREATE DATABASE Do_An_Chuyen_Nganh_A;
USE Do_An_Chuyen_Nganh_A;

CREATE TABLE Questions(
	Question_id int NOT NULL,
    Title text(65534) NOT NULL,
    Description text(65534) NOT NULL,
    CreateDate datetime NOT NULL,
    Topic varchar(255) NOT NULL,
    Level varchar(255) NOT NULL,
    Author_id int NOT NULL,
    PRIMARY KEY(Question_id));

CREATE TABLE SampleTestcases(
	ID int NOT NULL AUTO_INCREMENT,
    Question_id int NOT NULL,
    Input text(65534) NOT NULL,
    Output text(65534) NOT NULL,
    PRIMARY KEY(ID));

CREATE TABLE Testcases(
	ID int NOT NULL AUTO_INCREMENT,
    Question_id int NOT NULL,
    Input text(65534) NOT NULL,
    Output text(65534) NOT NULL,
    PRIMARY KEY(ID));

CREATE TABLE Authors(
	Author_id int NOT NULL AUTO_INCREMENT,
	FullName varchar(255) NOT NULL,
	Email varchar(255)NOT NULL,
	PhoneNumber int,
	Password varchar(255) NOT NULL,
	PRIMARY KEY (Author_id));

CREATE TABLE Students(
	Student_id int NOT NULL AUTO_INCREMENT,
	FullName varchar(255) NOT NULL,
	Email varchar(255) NOT NULL,
	PhoneNumber int,
	Password varchar(255) NOT NULL,
	PRIMARY KEY (Student_id));

CREATE TABLE HistoryPractices(
	ID int NOT NULL AUTO_INCREMENT,
	Question_id int NOT NULL,
	Question_description text(65534) NOT NULL,
	Student_id int NOT NULL,
	Pass varchar(100) NOT NULL,
	Testcase_fail text(65534),
	Source_code text(65534) NOT NULL,
	Languages varchar(255) NOT NULL,
	Submit_date datetime NOT NULL,
	PRIMARY KEY (ID));
	
CREATE TABLE AuthorHistoryPractices(
	ID int NOT NULL AUTO_INCREMENT,
	Question_id int NOT NULL,
	Question_description text(65534) NOT NULL,
	Author_id int NOT NULL,
	Pass varchar(100) NOT NULL,
	Testcase_fail text(65534),
	Source_code text(65534) NOT NULL,
	Languages varchar(255) NOT NULL,
	Submit_date datetime NOT NULL,
	PRIMARY KEY (ID));

ALTER TABLE SampleTestcases ADD CONSTRAINT fk_SampleTestCase_Question FOREIGN KEY (Question_id) REFERENCES Questions(Question_id);

ALTER TABLE Testcases ADD CONSTRAINT fk_TestCase_Question FOREIGN KEY (Question_id) REFERENCES Questions(Question_id);

ALTER TABLE Questions ADD CONSTRAINT fk_Question_Author FOREIGN KEY (Author_id) REFERENCES Authors(Author_id);

ALTER TABLE HistoryPractices ADD CONSTRAINT fk_HistoryPractice_Question FOREIGN KEY (Question_id) REFERENCES Questions(Question_id);
ALTER TABLE HistoryPractices ADD CONSTRAINT fk_HistoryPractice_Student FOREIGN KEY (Student_id) REFERENCES Students(Student_id);

ALTER TABLE AuthorHistoryPractices ADD CONSTRAINT fk_AuthorHistoryPractice_Question FOREIGN KEY (Question_id) REFERENCES Questions(Question_id);
ALTER TABLE AuthorHistoryPractices ADD CONSTRAINT fk_AuthorHistoryPractice_Author FOREIGN KEY (Author_id) REFERENCES Authors(Author_id);


INSERT INTO `Students` (`FullName`,`Email`,`PhoneNumber`,`Password`) VALUES ('Student', 'student@gmail.com', '1234567890', '123456');

INSERT INTO `Authors` (`FullName`,`Email`,`PhoneNumber`,`Password`) VALUES ('Author', 'author@gmail.com', '1234567890', '123456');

INSERT INTO `Questions` (`Question_id`, `Title`, `Description`, `CreateDate`, `Topic`, `Level`, `Author_id`) VALUES ('1', 'Tính tổng của hai số nguyên', 'Tính tổng của hai số nguyên a và b được cho trước.', '2022-04-29 10:29:35', 'Cơ bản', 'Dễ', '1');

INSERT INTO `SampleTestcases` (`Question_id`, `Input`, `Output`) VALUES ('1', '1 2', '3');
INSERT INTO `SampleTestcases` (`Question_id`, `Input`, `Output`) VALUES ('1', '25 55', '80');
INSERT INTO `SampleTestcases` (`Question_id`, `Input`, `Output`) VALUES ('1', '-1 -2', '-3');


INSERT INTO `Testcases` (`Question_id`, `Input`, `Output`) VALUES ('1', '1000 2500', '3500');
INSERT INTO `Testcases` (`Question_id`, `Input`, `Output`) VALUES ('1', '200 350', '550');
INSERT INTO `Testcases` (`Question_id`, `Input`, `Output`) VALUES ('1', '0 0', '0');
INSERT INTO `Testcases` (`Question_id`, `Input`, `Output`) VALUES ('1', '1 0', '1');
INSERT INTO `Testcases` (`Question_id`, `Input`, `Output`) VALUES ('1', '-1 3', '2');
