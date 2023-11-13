const intervalMillis = 500;
const startBtn = document.getElementById("startBtn");
let isMoving = false;

const move = () => {
    if (!isMoving) {
        isMoving = true;
        const progressBar = document.querySelector(".progress .progress-bar");
        var progressValue = 0;
        progressBar.style.width = progressValue + "%";
        var id = setInterval(frame, intervalMillis);
        function frame() {
            if (progressValue >= 100) {
                clearInterval(id);
                isMoving = false;
            } else {
                progressValue += 10;
                progressBar.style.width = progressValue + "%";
                progressBar.setAttribute("aria-valuenow", progressValue);
            }
        }
    }
};

startBtn.addEventListener("click", _ => {
    move();
});