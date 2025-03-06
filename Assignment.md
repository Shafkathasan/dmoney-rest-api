# Assignment on Postman

1\. Create test cases based on the following scenarios (at least 15 or more) in a standard test case format for the dmoney REST API. (10 points)

- Admin creates an Agent, 2 random Customers, and a Merchant.  
  Admin email: [admin@roadtocareer.net](https://mail.google.com/mail/?view=cm&fs=1&to=admin%40roadtocareer.net&authuser=0) / Pass: 1234
- Deposit some money from the SYSTEM account to the Agent.  
  System account: SYSTEM (range 10 TK to 10,000 TK)
- Agent deposits money to one of the Customers.  
  _Hint: fromAc: Agent, toAc: Customer_
- Check the Agent's balance.
- Then, send money from one Customer to another Customer.  
  _Hint: fromAc: Customer, toAc: Customer_
- Withdraw any amount from a Customer to the Agent (range 10 TK to 10,000 TK).  
  _Hint: fromAc: Customer, toAc: Agent_
- Check the Customer's balance and transaction statement by trnxId.
- Make a payment from the second Customer to the Merchant.  
  _Hint: fromAc: Customer, toAc: Merchant_
- The second Customer checks both balance and transaction statement.
- The Merchant checks his balance.

2\. Create a Postman collection based on your test cases (from the above 10 scenarios). Add negative cases for each request. (15 points)

- You can find the API endpoints and details here:
- **User API Endpoints:** [https://dmoney.roadtocareer.net/api-docs/user](https://dmoney.roadtocareer.net/api-docs/user)
- **Transaction API Endpoints:** [https://dmoney.roadtocareer.net/api-docs/transaction](https://dmoney.roadtocareer.net/api-docs/transaction)
- **Partner Key:** X-AUTH-SECRET-KEY: ROADTOSDET

3\. Generate a Newman report. (5 points)

4\. Generate Postman documentation and add the link to the GitHub README. (5 points)

5\. Add Newman report screenshots to the GitHub README. (5 points)

6\. Write down at least 5 bugs or improvement suggestions in a Google Sheet for the dmoney API and upload it to Google Drive.   
(10 points)  
The issue report should have the following columns:

- Issue Type (Bug/Improvement)
- Issue Title (Title of your issue)
- Description (Describe how to generate the bug or issue in 2 sentences)
- Steps (Every detailed step to reproduce the bug or improvement)
- Actual Result (What is shown in the API response)
- Expected Result (What should be shown in the API response)
- Priority (High/Medium/Low)
- Severity (Critical/Major/Minor)
- Attachment (Screenshots: Upload them to your Google Drive and insert the link in the attachment column)

**Submission Instruction:**  
Submit only the GitHub repository URL..  
The generated API documentation, test case file, and bug report link should be included in the README.md.
