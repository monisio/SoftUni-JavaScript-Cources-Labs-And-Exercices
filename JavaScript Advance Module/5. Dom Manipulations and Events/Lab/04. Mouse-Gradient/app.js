function attachGradientEvents() {

    let gradientBox = document.getElementById("gradient-box");

    gradientBox.addEventListener("mousemove", mouseMove);
    gradientBox.addEventListener("mouseout", mouseOut);

    function mouseMove(event) {
        let percentage = Math.trunc((event.offsetX / (event.target.clientWidth - 1) * 100));
        document.getElementById("result").textContent = percentage +"%";
    }

    function mouseOut(event) {
        document.getElementById("result").textContent ='';

    }


}