// JavaScript Document
<!-- Scripts -->
    <!-- <script src="assets/js/jquery.min.js"></script> -->
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="assets/js/jquery.scrollex.min.js"></script>
	<script src="assets/js/jquery.scrolly.min.js"></script>
	<script src="assets/js/browser.min.js"></script>
	<script src="assets/js/breakpoints.min.js"></script>
	<script src="assets/js/util.js"></script>
	<script src="assets/js/main.js"></script>
<script src="js/popper.min.js"></script>
	<script src="js/bootstrap-4.4.1.js"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1NRK79NW04');
</script>
<script>
  (function () {
    const track = document.querySelector(".testimonial-track");
    const slides = Array.from(track.children);
    const prevBtn = document.querySelector(".nav-btn.prev");
    const nextBtn = document.querySelector(".nav-btn.next");
    const dotsContainer = document.querySelector(".dots");
    const carousel = document.querySelector(".testimonial-carousel");

    let cardsPerView = window.innerWidth <= 768 ? 1 : 3;
    let index = cardsPerView; // start at first real slide after clones
    let interval;

    // Clone slides for seamless loop
    function setupClones() {
      const startClones = slides.slice(0, cardsPerView).map((el) => el.cloneNode(true));
      const endClones = slides.slice(-cardsPerView).map((el) => el.cloneNode(true));

      startClones.forEach((clone) => track.appendChild(clone));
      endClones.forEach((clone) => track.insertBefore(clone, track.firstChild));
    }

    setupClones();

    const allSlides = Array.from(track.children);
    const total = allSlides.length;

    // Create dots
    const pages = Math.ceil(slides.length / cardsPerView);
    for (let i = 0; i < pages; i++) {
     const dot = document.createElement("button");
dot.setAttribute("type", "button");
dot.setAttribute("aria-label", `Go to testimonial page ${i + 1}`);

      if (i === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
    }
    const dots = Array.from(dotsContainer.children);

    function updateDots() {
      dots.forEach((dot) => dot.classList.remove("active"));
      const dotIndex = (index - cardsPerView) % pages;
      dots[dotIndex >= 0 ? dotIndex : pages - 1].classList.add("active");
    }

    function setTranslate(noTransition = false) {
      const slideWidth = carousel.clientWidth / cardsPerView;
      if (noTransition) track.style.transition = "none";
      track.style.transform = `translateX(-${slideWidth * index}px)`;
      if (noTransition) {
        requestAnimationFrame(() => {
          track.style.transition = "transform 1s ease-in-out";
        });
      }
    }

    function next() {
      index++;
      move();
    }

    function prev() {
      index--;
      move();
    }

    function move() {
      setTranslate();
      updateDots();
    }

    track.addEventListener("transitionend", () => {
      if (index >= total - cardsPerView) {
        index = cardsPerView;
        setTranslate(true);
      } else if (index < cardsPerView) {
        index = total - cardsPerView * 2;
        setTranslate(true);
      }
    });

    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i + cardsPerView;
        move();
      });
    });

    function startAuto() {
      interval = setInterval(next, 5000);
    }
    function stopAuto() {
      clearInterval(interval);
    }

    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);

    window.addEventListener("resize", () => {
      cardsPerView = window.innerWidth <= 768 ? 1 : 3;
      setTranslate(true);
    });

    // Initialize
    setTranslate(true);
    startAuto();
  })();
</script>
<script type="text/javascript" src="my_script.js"></script>