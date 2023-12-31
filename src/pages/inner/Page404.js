import React, { useEffect } from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";

const Page404 = () => {
  useEffect(() => {
    var canvas = document.querySelector("canvas");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    var ctx = canvas.getContext("2d");

    var TAU = 2 * Math.PI;

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      update();
      draw();
      requestAnimationFrame(loop);
    }

    function Ball(startX, startY, startVelX, startVelY) {
      this.x = startX || Math.random() * canvas.width;
      this.y = startY || Math.random() * canvas.height;
      this.vel = {
        x: startVelX || Math.random() * 2 - 1,
        y: startVelY || Math.random() * 2 - 1,
      };
      this.update = function (canvas) {
        if (this.x > canvas.width + 50 || this.x < -50) {
          this.vel.x = -this.vel.x;
        }
        if (this.y > canvas.height + 50 || this.y < -50) {
          this.vel.y = -this.vel.y;
        }
        this.x += this.vel.x;
        this.y += this.vel.y;
      };
      this.draw = function (ctx, can) {
        ctx.beginPath();
        var distM = distMouse(this);
        if (distM > 200) {
          ctx.fillStyle = "#f1f1f1";
          ctx.globalAlpha = 0.2;
        } else {
          ctx.fillStyle = "#3949ab";
          ctx.globalAlpha = 1 - distM / 240;
        }
        ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, 3, 0, TAU, false);
        ctx.fill();
      };
    }

    var balls = [];
    for (var i = 0; i < (canvas.width * canvas.height) / (65 * 65); i++) {
      balls.push(
        new Ball(Math.random() * canvas.width, Math.random() * canvas.height)
      );
    }

    var lastTime = Date.now();
    function update() {
      var diff = Date.now() - lastTime;
      for (var frame = 0; frame * 16.6667 < diff; frame++) {
        for (var index = 0; index < balls.length; index++) {
          balls[index].update(canvas);
        }
      }
      lastTime = Date.now();
    }
    var mouseX = -1e9,
      mouseY = -1e9;
    document.addEventListener("mousemove", function (event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    function distMouse(ball) {
      return Math.hypot(ball.x - mouseX, ball.y - mouseY);
    }

    function draw() {
      for (var index = 0; index < balls.length; index++) {
        var ball = balls[index];
        ctx.beginPath();
        for (var index2 = balls.length - 1; index2 > index; index2 += -1) {
          var ball2 = balls[index2];
          var dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
          if (dist < 100) {
            var distM = distMouse(ball2);
            if (distM > 150) {
              ctx.strokeStyle = "#3949ab";
              ctx.globalAlpha = 0.2;
            } else {
              ctx.globalAlpha = 0;
            }
            ctx.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
            ctx.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
          }
        }
        ctx.stroke();
        ball.draw(ctx, canvas);
      }
    }

    // Start
    loop();
  }, []);

  return (
    <>
      {/* <NavbarSocial data={dataNavbar} type="white" /> */}
      <section className="pt-0 pb-0">
        <div className="full-screen-bg">
          <canvas></canvas>
          <div className="hero-text-wrap error-section">
            <div className="hero-text">
              <div className="container text-center">
                <h1 style={{ color: 'white' }}>404</h1>
                <h3>Ooops! That page doesn't exist!</h3>
                <p>
                  You might try searching our site, or starting at our home page
                </p>
                <p className="text-center mt-30">
                  <a
                    href="/"
                    className="btn btn-outline-white btn-md btn-default"
                  >
                    Back to Home Page
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page404;
