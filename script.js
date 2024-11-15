function locomotiveScroll() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotiveScroll();
  
  
  document.addEventListener("DOMContentLoaded", (event) => {
      const loaderTl = gsap.timeline();
      loaderTl.to(".loaderBg-item", { 
          duration: 1,
          transform: "translateY(-130%)",
          ease: "power1.out",
          stagger: 0.2,
      })
      .then(() => {
          document.querySelector(".loaderAnimate-contain").style.display = "none";
      });
  });
  
  
  
  
  
  
  
  var tl = gsap.timeline();
  function navBar_Animation() {
      gsap.from('.navbar .logo, .navbar .navbar-right-cntnt', {
          opacity: 0,
          y: -100,
          duration: 1,
          stagger: 0.4,
          delay: 1.5,
      })
  }
  navBar_Animation();
  
  
  
  
  
  // ------- Mini Interaction Elem Animations -------
  function miniInterectElem() {
          const absRightImg_Elem = gsap.utils.toArray(".abs-img-right");
          absRightImg_Elem.forEach(element => {
          gsap.from(element, {
              opacity: 0,
              x: "100px",
              duration: 1,
              ease: 'power1.inOut',
              stagger: 0.5,
              scrollTrigger:{
                  trigger: element,
                  scroller: "#main",
                  start: "top 80%",
                  end: "top 60%",
                  scrub: 1,
              }
          }) 
          });
          const absLeftImg_Elem = gsap.utils.toArray(".abs-img-left");
          absLeftImg_Elem.forEach(element => {
          gsap.from(element, {
              opacity: 0,
              x: "-100px",
              duration: 1,
              ease: 'power1.inOut',
              stagger: 0.5,
              scrollTrigger:{
                  trigger: element,
                  scroller: "#main",
                  start: "top 80%",
                  end: "top 60%",
                  scrub: 1,
              }
          }) 
          });
          
  }
  miniInterectElem();
  
  
  
  
  // -------- Header Section Animation ---------
  function headerSection_Animation() {
          let headerSecTl = gsap.timeline();
          let activeItemIndicator = CSSRulePlugin.getRule(".bodyImg::after");
  
          headerSecTl.from('.bodyText', {
              opacity: 0,
              y: 100,
              duration: 2,
              ease: Power1,
          })
  
          headerSecTl.to(activeItemIndicator, {
              width: "0%",
              duration: 1,
          })
  }
  headerSection_Animation();
  
  
  
  
  // -------- Text Slider Animation ---------
  function textSlider_Animation() {
          gsap.to('.text-slide-contain', {
              x: "-30%",
              duration: 1,
              ease: 'power1.inOut',
              scrollTrigger:{
                  trigger: ".text-slide-contain",
                  scroller: '#main',
                  start: "top 90%",
                  end: "top 0%",
                  scrub: 2,
              }
          })
  }
  textSlider_Animation();
  
  
  
  
  // -------- Featured Section Animation ---------
  function featuredAnimate() {
          const featuredElem = gsap.utils.toArray(".hghlt-text");
          featuredElem.forEach(element => {
              gsap.from(element, {
                  y: '100%',
                  opacity: 0,
                  duration: 0.5,
                  ease: 'power1.out',
                  stagger: 0.1,
                  scrollTrigger: {
                      trigger: element,
                      scroller: '#main',
                      start: "top 90%",
                      end: "top 50%",
                  }
              })
          })
  }
  featuredAnimate();
  
  
  
  
  
  // --------- Exclusive Deals Animation -----------
  function exclusiveDealsAnimate() {
          let exDeal_HeadSplit = new SplitType('.deal-cntnt-head', {
              type: "words, chars, lines",
              linesClass: "split-line",
          });
          gsap.from(exDeal_HeadSplit.lines, {
              y: '-100%',
              opacity: 0,
              duration: 1,
              ease: 'power3.inOut',
              stagger: 0.1,
              scrollTrigger: {
                  trigger: '.deal-cntnt-head',
                  scroller: "#main",
                  start: 'top 70%',
                  end: "top 20%",
              }
          })
          let exDeal_DesSplit = new SplitType('.deal-cntnt-des', {
              type: "words, chars, lines",
              linesClass: "split-line",
          });
          gsap.from(exDeal_DesSplit.lines, {
              y: '100%',
              opacity: 0,
              duration: 1,
              ease: 'power3.inOut',
              stagger: 0.1,
              scrollTrigger: {
                  trigger: '.deal-cntnt-des',
                  scroller: "#main",
                  start: 'top 70%',
                  end: "top 20%",
              }
          })
          let activeItemIndicator = CSSRulePlugin.getRule(".deal-sec-img::after");
          gsap.to(activeItemIndicator, {
              width: "0%",
              duration: 1,
              ease: 'power3.inOut',
              scrollTrigger:{
                  trigger: ".deal-sec-img",
                  scroller: "#main",
                  start: 'top 70%',
                  end: "top 20%",
              }
          })
  }
  exclusiveDealsAnimate();
  
  
  
  
  // -------- What's Inside Animation --------
  function whatInside_Animate() {
          gsap.from(".what-inside-main-img", {
              scale: 0.5,
              duration: 1,
              ease: 'power1.inOut',
              scrollTrigger:{
                  trigger: ".what-inside-main-img",
                  scroller: "#main",
                  start: 'top 80%',
                  end: "top 50%",
              }
          })
  
          let rightLayer = gsap.utils.toArray(".layer-right-cntnt");
          rightLayer.forEach(element => {
              gsap.from(element, {
                  x: "100px",
                  opacity: 0,
                  duration: 1,
                  ease: 'power1.inOut',
                  scrollTrigger: {
                      trigger: element,
                      scroller: "#main",
                      start: 'top 80%',
                      end: "top 50%",
                  }
              })
          })
          let leftLayer = gsap.utils.toArray(".layer-left-cntnt");
          leftLayer.forEach(element => {
              gsap.from(element, {
                  x: "-100px",
                  opacity: 0,
                  duration: 1,
                  ease: 'power1.inOut',
                  scrollTrigger: {
                      trigger: element,
                      scroller: "#main",
                      start: 'top 80%',
                      end: "top 50%",
                  }
              })
          })
  }
  whatInside_Animate();
  
  
  
  
  // -------- Footer Animation ----------
  
  function footerAnimate() {
          gsap.from(".footer-cntnt-contain", {
              scale: 1.1,
              duration: 1,
              ease: 'power1.inOut',
              scrollTrigger:{
                  trigger: ".footer-cntnt-contain",
                  scroller: "#main",
                  start: 'top 90%',
                  end: "top 40%",
                  scrub: 2,
              }
          })
  }
  footerAnimate();
  
  
  
  
  
  // ---------- Humburger Menu Animation ---------
  
  function humMenu_Animate() {
          document.getElementById("humMenu_openBtn").addEventListener("click", function() {
              gsap.set(".menu-ctgr-title .ctgr-title", {y: 100, opacity:0,});
              let menuOpenTl = gsap.timeline();
              menuOpenTl.to(".hum-menu-container", {
                  top: 0,
                  duration: 1,
                  ease: 'power3.inOut',
              })
              menuOpenTl.to(".menu-ctgr-title .ctgr-title", {
                  y: 0,
                  stagger: 0.2,
                  opacity: 1,
                  delay: -0.4,
                  duration: 0.5,
                  ease: 'power1.inOut',
              })
          })
          document.getElementById("humMenu_closeBtn").addEventListener("click", function() {
              let menuOpenTl = gsap.timeline();
              menuOpenTl.to(".hum-menu-container", {
                  top: "-150%",
                  duration: 1,
                  ease: 'power3.inOut',
              })
          })
  }
  humMenu_Animate();