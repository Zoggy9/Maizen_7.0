    var assignmentUrls = {
      "Lesson 8: Proportional and Non-Proportional Relationships": "/study-sites/130act/130act.html",
      "Functions Take Home Quiz": "/study-sites/BBQ/bbeiqs.html",
      "Functions Unit Review and Answer Key": "/study-sites/exploit-square/red.html",
      "Angles and Triangles Take Home Quiz": "https://buyzenshirts.gmsexpress.org",
      "Lesson 1: Complementary and Supplementary Angles": "/study-sites/froggies-arcade/froggies-arcade.html",
      "Linear Equations Unit Review": "/development.html",
      "Week of 02/09 IXL HW": "/development.html"
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
