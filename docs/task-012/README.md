# 🚀 Task-012: Verify File Upload | Playwright JavaScript Automation

![Playwright](https://img.shields.io/badge/Playwright-Automation-45ba4b?style=for-the-badge&logo=playwright)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![POM](https://img.shields.io/badge/Framework-Page%20Object%20Model-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Execution-Passed-success?style=for-the-badge)
![Git](https://img.shields.io/badge/Git-Feature%20Branch-orange?style=for-the-badge&logo=git)

---

# 📖 Project Overview

This project automates the **File Upload** functionality of **The Internet Herokuapp** using **Playwright with JavaScript**.

The objective of this task is to verify that a user can successfully upload a file and that the uploaded filename is displayed correctly after upload.

This automation is developed by following **IT Industry Standards** using the **Page Object Model (POM)** design pattern.

---

# 📌 Business Requirement

The application should allow users to upload a file successfully.

After uploading, the uploaded filename should be displayed on the confirmation page.

---

# 🎯 Objective

To verify that a file can be uploaded successfully and the uploaded filename is displayed correctly.

---

# 📋 Test Case Information

| Field | Details |
|--------|---------|
| **Task ID** | TASK-012 |
| **Module** | File Upload |
| **Feature** | Upload File |
| **Scenario** | Verify File Upload |
| **Testing Type** | Functional Testing |
| **Automation** | Yes |
| **Priority** | High |
| **Severity** | Medium |
| **Framework** | Playwright |
| **Language** | JavaScript |
| **Design Pattern** | Page Object Model (POM) |
| **Execution Status** | ✅ Passed |

---

# 🌐 Application Under Test

| Property | Value |
|----------|-------|
| Application | The Internet Herokuapp |
| URL | https://the-internet.herokuapp.com/upload |
| Environment | Demo |

---

# 🛠 Technology Stack

| Technology | Details |
|------------|----------|
| Automation Tool | Playwright |
| Programming Language | JavaScript |
| Runtime | Node.js |
| IDE | Visual Studio Code |
| Version Control | Git |
| Repository | GitHub |
| Design Pattern | Page Object Model |

---

# 📁 Project Structure

```text
playwright-javascript-automation
│
├── pages
│   └── fileupload
│       └── FileUploadPage.js
│
├── tests
│   └── fileupload
│       └── FileUploadPage.spec.js
│
├── testdata
│   ├── file_upload_data.json
│   └── sample.txt
│
├── utils
│   └── constants.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 📂 Folder Description

| Folder | Purpose |
|---------|----------|
| **pages** | Contains Page Object classes |
| **tests** | Contains Playwright test scripts |
| **testdata** | Stores JSON test data and upload file |
| **utils** | Stores reusable constants |
| **README.md** | Project documentation |

---

# 📌 Preconditions

- Node.js installed
- Playwright installed
- Browser dependencies installed
- Internet connection available
- The Internet Herokuapp website accessible
- Sample file available

---

# 🧪 Test Data

| File Name |
|------------|
| sample.txt |

---

# 📝 Test Steps

| Step | Action | Expected Result |
|------|----------|----------------|
| 1 | Launch Browser | Browser launches successfully |
| 2 | Navigate to Upload Page | Upload page is displayed |
| 3 | Select File | File selected successfully |
| 4 | Click Upload Button | File uploads successfully |
| 5 | Verify Uploaded Filename | Uploaded filename is displayed |

---

# 🔄 Test Flow

```
Launch Browser
       │
       ▼
Navigate to Upload Page
       │
       ▼
Select File
       │
       ▼
Click Upload Button
       │
       ▼
Verify Uploaded Filename
       │
       ▼
Test Passed
```

---

# ✅ Expected Result

- Upload page should load successfully.
- User should be able to select a file.
- File should upload successfully.
- Uploaded filename should be displayed.

---

# 📌 Post Conditions

- File uploaded successfully.
- Uploaded filename displayed.
- Application ready for further actions.

---

# ⚙ Automation Approach

The automation is implemented using:

- Page Object Model (POM)
- External JSON Test Data
- Reusable Methods
- Playwright Assertions
- Async / Await Programming

---

# 🎯 Playwright Concepts Used

- Page Object Model (POM)
- Locators
- Assertions
- File Upload
- JSON Test Data
- Browser Context
- Playwright Test Runner

---

# ✔ Assertions Used

- Verify Upload Success Heading
- Verify Uploaded Filename

---

# ▶ Test Execution

## Run all tests

```bash
npx playwright test
```

## Run Task-012

```bash
npx playwright test tests/fileupload/FileUploadPage.spec.js --headed
```

## Run on Chromium

```bash
npx playwright test tests/fileupload/FileUploadPage.spec.js --project=chromium
```

## View HTML Report

```bash
npx playwright show-report
```

---

# 🌍 Browser Support

| Browser | Status |
|----------|---------|
| Chromium | ✅ |
| Firefox | ✅ |
| WebKit | ✅ |

---

# 📊 Test Execution Summary

| Browser | Result |
|----------|---------|
| Chromium | ✅ Passed |

---

# 📷 Execution Evidence

## File Upload Page

> Add Screenshot Here

![File Upload Page](file-upload-page.png)

---

## File Uploaded Successfully

> Add Screenshot Here

![File Uploaded Successfully](file-upload-success.png)

---

## Playwright HTML Report

> Add Screenshot Here

![Playwright HTML Report](playwright-report.png)

---

# 🌿 Git Information

### Branch

```
feature/task-012-file-upload
```

### Commit Message

```
feat(task-012): automate file upload using Playwright POM
```

---

# 💡 Challenges Faced

- Understanding file upload automation in Playwright.
- Using `setInputFiles()` method.
- Verifying uploaded filename.
- Maintaining reusable Page Object Model structure.

---

# 📚 Learning Outcome

After completing this task, I learned:

- File Upload Automation
- Using `setInputFiles()`
- Playwright Assertions
- Page Object Model implementation
- JSON Test Data handling
- Git Feature Branch workflow
- GitHub repository management

---

# 🚀 Skills Demonstrated

- Playwright Automation
- JavaScript (ES6)
- File Upload Automation
- Page Object Model (POM)
- Functional Testing
- JSON Test Data
- Assertions
- Git
- GitHub
- Version Control

---

# 🔜 Next Task

**Task-013**

✅ Verify File Download Functionality

---

# 👨‍💻 Author

**Akash Atnure**

QA Automation Engineer

GitHub

```
https://github.com/<YOUR_GITHUB_USERNAME>
```

Repository

```
https://github.com/<YOUR_GITHUB_USERNAME>/playwright-javascript-automation
```

---

# ⭐ If you found this project helpful, don't forget to give it a Star.

---

# 📄 License

This project is created for learning, interview preparation, and portfolio purposes.