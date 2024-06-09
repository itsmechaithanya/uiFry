function loco(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  // smoothMobile: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
loco();

document.getElementById('sun').addEventListener('click', function() {
    // Toggle the background color and text color
    const currentColor = document.documentElement.style.backgroundColor;
    if (currentColor === 'black') {
        document.documentElement.style.backgroundColor = 'white';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelector('#page1 #left #low #button2').style.color = 'black';
    } else {
        document.documentElement.style.backgroundColor = 'black';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.querySelector('#page1 #left #low #button2').style.color = 'white';
    }

    // Toggle the icon
    const icon = this.querySelector('i');
    if (icon.classList.contains('ri-moon-line')) {
        icon.classList.remove('ri-moon-line');
        icon.classList.add('ri-sun-line');
    } else {
        icon.classList.remove('ri-sun-line');
        icon.classList.add('ri-moon-line');
    }
});