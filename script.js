
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f1f5f9;
  color: #1e293b;
}

.container {
  width: min(90%, 760px);
  margin: 40px auto;
}

header {
  text-align: center;
  margin-bottom: 24px;
}

h1 {
  color: #2563eb;
  margin-bottom: 8px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.1);
}

label {
  display: block;
  font-weight: bold;
  margin: 14px 0 6px;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 16px;
}

button {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

.expense-item {
  border-left: 5px solid #2563eb;
  background: #eff6ff;
  border-radius: 8px;
  padding: 14px;
  margin-top: 12px;
}

.expense-item h3 {
  margin: 0 0 8px;
}

.expense-item p {
  margin: 6px 0;
}
