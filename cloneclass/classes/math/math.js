    var assignmentUrls = {
      "Lesson 8: Proportional and Non-Proportional Relationships": "homework-newtons-laws.html",
      "Functions Take Home Quiz": "quiz-force-motion.html",
      "Functions Unit Review and Answer Key": "lecture-kinetic-energy.html",
      "Angles and Triangles Take Home Quiz": "homework-chapter6.html",
      "Lesson 1: Complementary and Supplementary Angles": "lab-pendulum.html",
      "Linear Equations Unit Review": "midterm-exam.html"
    };

    function openAssignment(assignmentTitle) {
      var url = assignmentUrls[assignmentTitle] || "default-assignment.html";
      var win = window.open("about:blank", "_blank");
      var doc = win.document;
      doc.body.style.margin = "0";
      doc.body.style.height = "100vh";
      var iframe = doc.createElement("iframe");
      iframe.style.border = "none";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.margin = "0";
      iframe.src = url;
      doc.body.appendChild(iframe);
    }

    var assignments = document.querySelectorAll('.assignment');
    for (var i = 0; i < assignments.length; i++) {
      assignments[i].onclick = function() {
        var title = this.querySelector('.assignment-title').textContent;
        openAssignment(title);
      };
    }
