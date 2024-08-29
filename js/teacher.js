document.addEventListener("DOMContentLoaded", function () {
  const studentForm = document.getElementById("studentForm");
  const studentList = document.getElementById("studentList");

  const dummyData = [
    {
      name: "Rahul Yadav",
      class: "44",
      dob: "2005-01-15",
      fatherName: "Anuj Yadav",
      id: "109",
    },
    {
      name: "Lily Rose",
      class: "23",
      dob: "2006-02-20",
      fatherName: "James Rose",
      id: "402",
    },
    {
      name: "Rehan Khan",
      class: "25",
      dob: "2004-03-25",
      fatherName: "Ajmal Khan",
      id: "187",
    },
  ];

  function loadStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    if (students.length === 0) {
      students = dummyData;
      localStorage.setItem("students", JSON.stringify(students));
    }
    students.forEach((student) => addStudentToList(student));
  }

  function saveStudents() {
    const students = [];
    document.querySelectorAll("#studentList li").forEach((li) => {
      const student = {
        name: li.querySelector(".name").textContent,
        class: li.querySelector(".class").textContent,
        dob: li.querySelector(".dob").textContent,
        fatherName: li.querySelector(".fatherName").textContent,
        id: li.querySelector(".id").textContent,
      };
      students.push(student);
    });
    localStorage.setItem("students", JSON.stringify(students));
  }

  studentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const student = {
      name: document.getElementById("studentName").value.trim(),
      class: document.getElementById("studentClass").value.trim(),
      dob: document.getElementById("studentDOB").value.trim(),
      fatherName: document.getElementById("fatherName").value.trim(),
      id: document.getElementById("studentID").value.trim(),
    };

    if (
      student.name &&
      student.class &&
      student.dob &&
      student.fatherName &&
      student.id
    ) {
      addStudentToList(student);
      saveStudents();
      studentForm.reset();
    }
  });

  function addStudentToList(student) {
    const li = document.createElement("li");
    li.innerHTML = `
          <span class="student-details">
              <span class="name">${student.name}</span> |
              <span class="class">${student.class}</span> |
              <span class="dob">${student.dob}</span> |
              <span class="fatherName">${student.fatherName}</span> |
              <span class="id">${student.id}</span>
          </span>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
      `;

    const editButton = li.querySelector(".edit");
    const deleteButton = li.querySelector(".delete");

    editButton.addEventListener("click", () => {
      if (editButton.textContent === "Edit") {
        editStudent(li, student, editButton);
      } else if (editButton.textContent === "Save") {
        saveStudent(li, student, editButton);
      }
    });

    deleteButton.addEventListener("click", () => {
      li.remove();
      saveStudents();
    });

    studentList.appendChild(li);
  }

  function editStudent(li, student, editButton) {
    const name = li.querySelector(".name").textContent;
    const studentClass = li.querySelector(".class").textContent;
    const dob = li.querySelector(".dob").textContent;
    const fatherName = li.querySelector(".fatherName").textContent;
    const id = li.querySelector(".id").textContent;

    li.innerHTML = `
          <input type="text" class="name-input" value="${name}"> |
          <input type="text" class="class-input" value="${studentClass}"> |
          <input type="date" class="dob-input" value="${dob}"> |
          <input type="text" class="fatherName-input" value="${fatherName}"> |
          <input type="text" class="id-input" value="${id}">
          <button class="edit">Save</button>
          <button class="delete">Delete</button>
      `;

    const saveButton = li.querySelector(".edit");
    const deleteButton = li.querySelector(".delete");

    saveButton.addEventListener("click", () =>
      saveStudent(li, student, saveButton)
    );
    deleteButton.addEventListener("click", () => {
      li.remove();
      saveStudents();
    });
  }

  function saveStudent(li, student, editButton) {
    student.name = li.querySelector(".name-input").value;
    student.class = li.querySelector(".class-input").value;
    student.dob = li.querySelector(".dob-input").value;
    student.fatherName = li.querySelector(".fatherName-input").value;
    student.id = li.querySelector(".id-input").value;

    li.innerHTML = `
          <span class="student-details">
              <span class="name">${student.name}</span> |
              <span class="class">${student.class}</span> |
              <span class="dob">${student.dob}</span> |
              <span class="fatherName">${student.fatherName}</span> |
              <span class="id">${student.id}</span>
          </span>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
      `;

    const newEditButton = li.querySelector(".edit");
    const newDeleteButton = li.querySelector(".delete");

    newEditButton.addEventListener("click", () => {
      if (newEditButton.textContent === "Edit") {
        editStudent(li, student, newEditButton);
      } else if (newEditButton.textContent === "Save") {
        saveStudent(li, student, newEditButton);
      }
    });

    newDeleteButton.addEventListener("click", () => {
      li.remove();
      saveStudents();
    });

    saveStudents();
  }

  loadStudents();
});
