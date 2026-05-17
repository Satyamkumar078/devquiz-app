const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const questions = [
  { id: 1,  category: "DSA",      question: "What is the time complexity of Binary Search?",               options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],                                                                                                       answer: 1 },
  { id: 2,  category: "DSA",      question: "Which data structure uses LIFO order?",                       options: ["Queue", "Array", "Stack", "Linked List"],                                                                                                        answer: 2 },
  { id: 3,  category: "DSA",      question: "What is the worst-case time complexity of QuickSort?",        options: ["O(n log n)", "O(n)", "O(n squared)", "O(log n)"],                                                                                                answer: 2 },
  { id: 4,  category: "DSA",      question: "Which traversal visits root first, then left, then right?",   options: ["Inorder", "Postorder", "Preorder", "Level Order"],                                                                                               answer: 2 },
  { id: 5,  category: "DSA",      question: "What is the space complexity of Merge Sort?",                 options: ["O(1)", "O(log n)", "O(n)", "O(n squared)"],                                                                                                      answer: 2 },
  { id: 6,  category: "DSA",      question: "Which algorithm finds shortest path in a weighted graph?",    options: ["BFS", "DFS", "Dijkstra", "Prim"],                                                                                                                answer: 2 },
  { id: 7,  category: "DSA",      question: "What is the height of a complete binary tree with n nodes?",  options: ["n", "n/2", "log n", "2n"],                                                                                                                       answer: 2 },
  { id: 8,  category: "OOP",      question: "Which OOP concept hides internal implementation?",            options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],                                                                                    answer: 2 },
  { id: 9,  category: "OOP",      question: "What keyword prevents a class from being inherited in Java?", options: ["static", "abstract", "final", "private"],                                                                                                        answer: 2 },
  { id: 10, category: "OOP",      question: "Which of these is NOT a pillar of OOP?",                      options: ["Encapsulation", "Compilation", "Inheritance", "Polymorphism"],                                                                                    answer: 1 },
  { id: 11, category: "OOP",      question: "What is method overloading?",                                 options: ["Same name different class", "Same name same parameters", "Same name different parameters", "Different name same parameters"],                     answer: 2 },
  { id: 12, category: "OOP",      question: "In Java, which class is the parent of all classes?",          options: ["Base", "Super", "Object", "Root"],                                                                                                               answer: 2 },
  { id: 13, category: "SQL",      question: "Which SQL command is used to retrieve data?",                 options: ["INSERT", "UPDATE", "SELECT", "DELETE"],                                                                                                          answer: 2 },
  { id: 14, category: "SQL",      question: "Which JOIN returns all rows from both tables?",               options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],                                                                                       answer: 3 },
  { id: 15, category: "SQL",      question: "What does ACID stand for in databases?",                      options: ["Array Class Index Data", "Atomicity Consistency Isolation Durability", "Access Control Insert Delete", "None of these"],                          answer: 1 },
  { id: 16, category: "SQL",      question: "Which SQL clause filters grouped results?",                   options: ["WHERE", "ORDER BY", "HAVING", "GROUP BY"],                                                                                                       answer: 2 },
  { id: 17, category: "SQL",      question: "What is a PRIMARY KEY?",                                      options: ["Any column in a table", "A column that can have NULL values", "A unique identifier for each row", "A foreign reference"],                        answer: 2 },
  { id: 18, category: "OS",       question: "Which scheduling algorithm gives CPU to shortest job first?", options: ["FCFS", "Round Robin", "SJF", "Priority"],                                                                                                        answer: 2 },
  { id: 19, category: "OS",       question: "What is a deadlock?",                                         options: ["When CPU is idle", "When two processes wait for each other indefinitely", "When memory is full", "When a process crashes"],                       answer: 1 },
  { id: 20, category: "OS",       question: "What does LRU stand for in page replacement?",                options: ["Last Recently Used", "Least Recently Used", "Least Remaining Utility", "Last Remaining Unit"],                                                    answer: 1 },
  { id: 21, category: "Networks", question: "How many layers does the OSI model have?",                    options: ["4", "5", "6", "7"],                                                                                                                              answer: 3 },
  { id: 22, category: "Networks", question: "Which protocol assigns IP addresses automatically?",          options: ["DNS", "FTP", "DHCP", "HTTP"],                                                                                                                    answer: 2 },
  { id: 23, category: "Networks", question: "TCP is a _____ protocol.",                                    options: ["Connectionless", "Unreliable", "Connection-oriented", "Stateless"],                                                                               answer: 2 },
  { id: 24, category: "DevOps",   question: "What does CI/CD stand for?",                                  options: ["Code Integration Code Delivery", "Continuous Integration Continuous Delivery", "Compiled Install Compiled Deploy", "None of these"],               answer: 1 },
  { id: 25, category: "DevOps",   question: "Which tool is used for containerization?",                    options: ["Jenkins", "Git", "Docker", "Ansible"],                                                                                                           answer: 2 },
  { id: 26, category: "DevOps",   question: "What is a Dockerfile?",                                       options: ["A log file", "A script to build Docker images", "A Docker database", "A Jenkins config"],                                                        answer: 1 },
  { id: 27, category: "DevOps",   question: "Which command builds a Docker image?",                        options: ["docker run", "docker pull", "docker build", "docker start"],                                                                                      answer: 2 },
  { id: 28, category: "DevOps",   question: "Jenkins is primarily used for?",                              options: ["Version control", "Container management", "CI/CD automation", "Database management"],                                                             answer: 2 },
  { id: 29, category: "Web",      question: "What does REST stand for?",                                   options: ["Remote Execution State Transfer", "Representational State Transfer", "Request State Transfer", "Reliable State Transfer"],                        answer: 1 },
  { id: 30, category: "Web",      question: "Which HTTP method is used to update a resource?",             options: ["GET", "POST", "PUT", "DELETE"],                                                                                                                  answer: 2 },
];

app.get('/api/questions', function(req, res) {
  var shuffled = questions.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 10);
  var safe = shuffled.map(function(q) {
    return { id: q.id, category: q.category, question: q.question, options: q.options };
  });
  res.json(safe);
});

app.get('/api/answer/:id', function(req, res) {
  var q = questions.find(function(item) { return item.id === parseInt(req.params.id); });
  if (!q) return res.status(404).json({ error: 'Not found' });
  res.json({ answer: q.answer });
});

app.listen(PORT, function() {
  console.log('DevQuiz app running at http://localhost:' + PORT);
});
