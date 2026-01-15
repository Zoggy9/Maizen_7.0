const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        let score = 0;
        let gameRunning = true;
        let gravity = 0.6;
        
        const ball = {
            x: 80, y: 160, radius: 20,
            dy: 0, jumpForce: 12, grounded: true,
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "#3498db"; // Blue Ball
                ctx.fill();
                ctx.closePath();
            }
        };

        const house = {
            x: canvas.width, y: 150, width: 50, height: 50,
            speed: 6,
            draw() {
                // House Body
                ctx.fillStyle = "#e67e22"; 
                ctx.fillRect(this.x, this.y + 15, this.width, this.height - 15);
                // Roof
                ctx.beginPath();
                ctx.moveTo(this.x - 5, this.y + 15);
                ctx.lineTo(this.x + (this.width / 2), this.y);
                ctx.lineTo(this.x + this.width + 5, this.y + 15);
                ctx.fillStyle = "#c0392b";
                ctx.fill();
                ctx.closePath();
            }
        };

        function update() {
            if (!gameRunning) return;

            // Physics logic
            if (!ball.grounded) {
                ball.dy += gravity;
                ball.y += ball.dy;
            }

            if (ball.y + ball.radius >= canvas.height) {
                ball.y = canvas.height - ball.radius;
                ball.dy = 0;
                ball.grounded = true;
            }

            house.x -= house.speed;
            if (house.x + house.width < 0) {
                house.x = canvas.width + Math.random() * 200;
                score++;
                house.speed += 0.2;
            }

            // CIRCLE-RECTANGLE COLLISION MATH
            // Find the closest point on the house to the ball center
            let closestX = Math.max(house.x, Math.min(ball.x, house.x + house.width));
            let closestY = Math.max(house.y, Math.min(ball.y, house.y + house.height));

            // Calculate distance between ball center and this closest point
            let distanceX = ball.x - closestX;
            let distanceY = ball.y - closestY;
            let distanceSquared = (distanceX * distanceX) + (distanceY * distanceY);

            // If distance is less than the radius, a collision occurred
            if (distanceSquared < (ball.radius * ball.radius)) {
                gameRunning = false;
                setTimeout(() => {
                    alert("Game Over! Score: " + score);
                    location.reload();
                }, 10);
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ball.draw();
            house.draw();
            ctx.fillStyle = "#333";
            ctx.font = "20px Arial";
            ctx.fillText("Score: " + score, 20, 30);
        }

        function gameLoop() {
            update();
            draw();
            requestAnimationFrame(gameLoop);
        }

        window.addEventListener("keydown", (e) => {
            if (e.code === "Space" && ball.grounded) {
                ball.dy = -ball.jumpForce;
                ball.grounded = false;
            }
        });

        gameLoop();
