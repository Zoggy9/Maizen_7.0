var classesData = [
        {
          name: "Math-7A Sequoia",
          section: "",
          color: "bg-red-600",
          teacher: "Aaron Solomon",
        },
        {
          name: "ELA 7A Sequoia SY26",
          section: "",
          color: "bg-green-600",
          teacher: "Hannah Treworgy",
        },
        {
          name: "Sequoia Science",
          section: "7A",
          color: "bg-green-600",
          teacher: "Lyn Rothenheber",
        },
        {
          name: "7A Sequoia History Class",
          section: "7A",
          color: "bg-orange-600",
          teacher: "Autumn Gordon",
        },
        {
          name: "墨子7CA2 Y25-26",
          section: "",
          color: "bg-black-600",
          teacher: "Bin (Shelby) Xie",
        },
        {
          name: "PE SY26",
          section: "",
          color: "bg-blue-600",
          teacher: "Mr. Jackson",
        },
      ];

      var announcementsData = [
        {
          className: "Math-7A Sequoia",
          teacher: "Aaron Solomon",
          time: "2 hours ago",
          message:
            "IXL is due tomorrow.",
        },
        {
          className: "ELA 7A Sequoia SY26",
          teacher: "Hannah Treworgy",
          time: "1 day ago",
          message:
            "Essay submissions are now open. Remember to follow the MLA format guidelines.",
        },
      ];

      function renderClasses() {
        var grid = document.getElementById("classesGrid");
        for (var i = 0; i < classesData.length; i++) {
          var classItem = classesData[i];
          var card = document.createElement("div");
          card.className = "class-card";
          card.setAttribute("data-class-name", classItem.name);
          card.innerHTML =
            '<div class="class-header ' +
            classItem.color +
            '"><h3>' +
            classItem.name +
            "</h3><p>" +
            classItem.section +
            '</p><button class="class-menu" onclick="event.stopPropagation()"><svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg></button></div><div class="class-body"><p class="class-teacher">' +
            classItem.teacher +
            "</p></div>";
          card.onclick = function () {
            var className = this.getAttribute("data-class-name");
            if (className === "Math-7A Sequoia") {
              var win = window.open("about:blank", "_blank");

              // 2. Set the window's document content
              var url = "Maizen.html"; // REPLACE THIS with your URL

              var doc = win.document;
              doc.body.style.margin = "0";
              doc.body.style.height = "100vh";

              // 3. Create the full-screen iframe
              var iframe = doc.createElement("iframe");
              iframe.style.border = "none";
              iframe.style.width = "100%";
              iframe.style.height = "100%";
              iframe.style.margin = "0";
              iframe.src = url;

              // 4. Inject into the blank tab
              doc.body.appendChild(iframe);
            } else if (className === "ELA 7A Sequoia SY26") {
              var win = window.open("about:blank", "_blank");

              // 2. Set the window's document content
              var url = "/development.html"; // REPLACE THIS with your URL

              var doc = win.document;
              doc.body.style.margin = "0";
              doc.body.style.height = "100vh";

              // 3. Create the full-screen iframe
              var iframe = doc.createElement("iframe");
              iframe.style.border = "none";
              iframe.style.width = "100%";
              iframe.style.height = "100%";
              iframe.style.margin = "0";
              iframe.src = url;
                    
              doc.body.appendChild(iframe);
            } else if (className === "PE SY26") {
              var win = window.open("about:blank", "_blank");

              // 2. Set the window's document content
              var url = "/study-sites/ball-bounce/bounce.html"; // REPLACE THIS with your URL

              var doc = win.document;
              doc.body.style.margin = "0";
              doc.body.style.height = "100vh";

              // 3. Create the full-screen iframe
              var iframe = doc.createElement("iframe");
              iframe.style.border = "none";
              iframe.style.width = "100%";
              iframe.style.height = "100%";
              iframe.style.margin = "0";
              iframe.src = url;

              doc.body.appendChild(iframe);  
            }
          };
          grid.appendChild(card);
        }
      }

      function renderAnnouncements() {
        var content = document.getElementById("streamContent");
        for (var i = 0; i < announcementsData.length; i++) {
          var ann = announcementsData[i];
          var div = document.createElement("div");
          div.className = "announcement";
          div.innerHTML =
            '<div class="announcement-header"><div class="announcement-avatar">' +
            ann.teacher.charAt(0) +
            '</div><div class="announcement-info"><div class="announcement-meta"><span class="announcement-teacher">' +
            ann.teacher +
            '</span><span class="announcement-time">• ' +
            ann.time +
            '</span></div><p class="announcement-class">' +
            ann.className +
            '</p><p class="announcement-message">' +
            ann.message +
            "</p></div></div>";
          content.appendChild(div);
        }
      }

      function switchTab(tabName) {
        var tabs = document.querySelectorAll(".tab");
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove("active");
          if (tabs[i].textContent.toLowerCase() === tabName) {
            tabs[i].classList.add("active");
          }
        }
      }

      renderClasses();
      renderAnnouncements();
