function openModal(){ document.getElementById("staffModal").style.display="flex"; updateTime(); }
  function closeModal(){ document.getElementById("staffModal").style.display="none"; }

  function updateTime(){
    setInterval(()=>{
      document.getElementById("liveTime").textContent = "Current time\n" + new Date().toLocaleString();
    },1000);
  }

  function startAnimation(){
    document.getElementById("staffModal").style.display="none";
    const screen=document.getElementById("animationScreen");
    screen.style.display="flex";

    const loaderArc=document.querySelector("#loaderArc circle");
    const check=document.getElementById("checkIcon");
    const pieces=document.getElementById("pieces");
    const logo=document.getElementById("llLogo");
    const tagline=document.getElementById("tagline");

    // Step 1: Animate loader arc
    gsap.fromTo(loaderArc,{strokeDashoffset:250},{strokeDashoffset:0, duration:1.5, ease:"power2.inOut", onComplete:()=>{
      // Step 2: Show checkmark
      document.getElementById("loaderArc").style.display="none";
      check.style.display="block";
      gsap.from(check,{scale:0, duration:0.5, ease:"back.out(2)"});
      gsap.to(tagline,{opacity:1, delay:0.5, duration:1});
    }});

    // Step 3: Break into pieces
    setTimeout(()=>{
      check.style.display="none";
      pieces.style.display="flex";
      gsap.fromTo(pieces.children,{y:0,opacity:1},{y:-80, rotation:180, opacity:0, duration:1, stagger:0.2});
    },3000);

    // Step 4: Morph into LL logo
    setTimeout(()=>{
      pieces.style.display="none";
      logo.style.display="block";
      gsap.from(logo,{scale:0, duration:0.7, ease:"elastic.out(1,0.5)"});
    },4200);

    // Step 5: Transition to "No Passes"
    setTimeout(()=>{
      screen.style.display="none";
      document.getElementById("noPasses").style.display="block";
      document.getElementById("buyBtn").style.display="block";
    },6000);
  }function openModal(){ document.getElementById("staffModal").style.display="flex"; updateTime(); }
  function closeModal(){ document.getElementById("staffModal").style.display="none"; }

  function updateTime(){
    setInterval(()=>{
      document.getElementById("liveTime").textContent = "Current time\n" + new Date().toLocaleString();
    },1000);
  }

  function startAnimation(){
    document.getElementById("staffModal").style.display="none";
    const screen=document.getElementById("animationScreen");
    screen.style.display="flex";

    const loaderArc=document.querySelector("#loaderArc circle");
    const check=document.getElementById("checkIcon");
    const pieces=document.getElementById("pieces");
    const logo=document.getElementById("llLogo");
    const tagline=document.getElementById("tagline");

    // Step 1: Animate loader arc
    gsap.fromTo(loaderArc,{strokeDashoffset:250},{strokeDashoffset:0, duration:1.5, ease:"power2.inOut", onComplete:()=>{
      // Step 2: Show checkmark
      document.getElementById("loaderArc").style.display="none";
      check.style.display="block";
      gsap.from(check,{scale:0, duration:0.5, ease:"back.out(2)"});
      gsap.to(tagline,{opacity:1, delay:0.5, duration:1});
    }});

    // Step 3: Break into pieces
    setTimeout(()=>{
      check.style.display="none";
      pieces.style.display="flex";
      gsap.fromTo(pieces.children,{y:0,opacity:1},{y:-80, rotation:180, opacity:0, duration:1, stagger:0.2});
    },3000);

    // Step 4: Morph into LL logo
    setTimeout(()=>{
      pieces.style.display="none";
      logo.style.display="block";
      gsap.from(logo,{scale:0, duration:0.7, ease:"elastic.out(1,0.5)"});
    },4200);

    // Step 5: Transition to "No Passes"
    setTimeout(()=>{
      screen.style.display="none";
      document.getElementById("noPasses").style.display="block";
      document.getElementById("buyBtn").style.display="block";
    },6000);
  }function openModal(){ document.getElementById("staffModal").style.display="flex"; updateTime(); }
  function closeModal(){ document.getElementById("staffModal").style.display="none"; }

  function updateTime(){
    setInterval(()=>{
      document.getElementById("liveTime").textContent = "Current time\n" + new Date().toLocaleString();
    },1000);
  }

  function startAnimation(){
    document.getElementById("staffModal").style.display="none";
    const screen=document.getElementById("animationScreen");
    screen.style.display="flex";

    const loaderArc=document.querySelector("#loaderArc circle");
    const check=document.getElementById("checkIcon");
    const pieces=document.getElementById("pieces");
    const logo=document.getElementById("llLogo");
    const tagline=document.getElementById("tagline");

    // Step 1: Animate loader arc
    gsap.fromTo(loaderArc,{strokeDashoffset:250},{strokeDashoffset:0, duration:1.5, ease:"power2.inOut", onComplete:()=>{
      // Step 2: Show checkmark
      document.getElementById("loaderArc").style.display="none";
      check.style.display="block";
      gsap.from(check,{scale:0, duration:0.5, ease:"back.out(2)"});
      gsap.to(tagline,{opacity:1, delay:0.5, duration:1});
    }});

    // Step 3: Break into pieces
    setTimeout(()=>{
      check.style.display="none";
      pieces.style.display="flex";
      gsap.fromTo(pieces.children,{y:0,opacity:1},{y:-80, rotation:180, opacity:0, duration:1, stagger:0.2});
    },3000);

    // Step 4: Morph into LL logo (your jpeg)
    setTimeout(()=>{
      pieces.style.display="none";
      logo.style.display="block";
      gsap.from(logo,{scale:0, duration:0.7, ease:"elastic.out(1,0.5)"});
    },4200);

    // Step 5: Transition to "No Passes"
    setTimeout(()=>{
      screen.style.display="none";
      document.getElementById("noPasses").style.display="block";
      document.getElementById("buyBtn").style.display="block";
    },6000);
  }// Open/close modal
    function openStaffModal(){
      document.getElementById("staffModal").style.display="flex";
      updateTime();
      setInterval(updateTime,1000);
    }
    function closeStaffModal(){
      document.getElementById("staffModal").style.display="none";
    }
    function updateTime(){
      document.getElementById("liveTime").textContent = new Date().toLocaleString();
    }

    // Redeem animation
    function startAnimation(){
      document.getElementById("staffModal").style.display="none";
      const screen=document.getElementById("animationScreen");
      screen.style.display="flex";

      const loaderArc=document.querySelector("#loaderArc circle");
      const check=document.getElementById("checkIcon");
      const pieces=document.getElementById("pieces");
      const logo=document.getElementById("llLogo");
      const tagline=document.getElementById("tagline");

      // Step 1: Animate loader arc
      gsap.fromTo(loaderArc,{strokeDashoffset:200},{strokeDashoffset:0, duration:1.5, ease:"power2.inOut", onComplete:()=>{
        // Step 2: Replace arc with checkmark
        document.getElementById("loaderArc").style.display="none";
        check.style.display="block";
        gsap.from(check,{scale:0, duration:0.5, ease:"back.out(2)"});
        gsap.to(tagline,{opacity:1, delay:0.5, duration:1});
      }});

      // Step 3: Break into pieces
      setTimeout(()=>{
        check.style.display="none";
        pieces.style.display="flex";
        gsap.fromTo(pieces.children,{y:0,opacity:1},{y:-80, rotation:180, opacity:0, duration:1, stagger:0.2});
      },3000);

      // Step 4: Morph into LL logo
      setTimeout(()=>{
        pieces.style.display="none";
        logo.style.display="flex";
        gsap.from(logo.children,{scale:0, y:-50, duration:0.7, ease:"back.out(1.7)", stagger:0.2});
      },4200);

      // Step 5: End screen
      setTimeout(()=>{
        screen.style.display="none";
        document.getElementById("noPasses").style.display="block";
        document.getElementById("buyBtn").style.display="block";
      },6000);
    }// Open/close modal
    function openStaffModal(){
      document.getElementById("staffModal").style.display="flex";
      updateTime();
      setInterval(updateTime,1000);
    }
    function closeStaffModal(){
      document.getElementById("staffModal").style.display="none";
    }
    function updateTime(){
      document.getElementById("liveTime").textContent = new Date().toLocaleString();
    }

    // Redeem animation
    function startAnimation(){
      document.getElementById("staffModal").style.display="none";
      const screen=document.getElementById("animationScreen");
      screen.style.display="flex";

      const loaderArc=document.querySelector("#loaderArc circle");
      const check=document.getElementById("checkIcon");
      const pieces=document.getElementById("pieces");
      const logo=document.getElementById("llLogo");
      const tagline=document.getElementById("tagline");

      // Step 1: Animate loader arc
      gsap.fromTo(loaderArc,{strokeDashoffset:200},{strokeDashoffset:0, duration:1.5, ease:"power2.inOut", onComplete:()=>{
        // Step 2: Replace arc with checkmark
        document.getElementById("loaderArc").style.display="none";
        check.style.display="block";
        gsap.from(check,{scale:0, duration:0.5, ease:"back.out(2)"});
        gsap.to(tagline,{opacity:1, delay:0.5, duration:1});
      }});

      // Step 3: Break into pieces
      setTimeout(()=>{
        check.style.display="none";
        pieces.style.display="flex";
        gsap.fromTo(pieces.children,{y:0,opacity:1},{y:-80, rotation:180, opacity:0, duration:1, stagger:0.2});
      },3000);

      // Step 4: Morph into LL logo
      setTimeout(()=>{
        pieces.style.display="none";
        logo.style.display="flex";
        gsap.from(logo.children,{scale:0, y:-50, duration:0.7, ease:"back.out(1.7)", stagger:0.2});
      },4200);

      // Step 5: End screen
      setTimeout(()=>{
        screen.style.display="none";
        document.getElementById("noPasses").style.display="block";
        document.getElementById("buyBtn").style.display="block";
      },6000);
    }/* ====== CONFIG: set your LL image URL here ====== */
  const LL_LOGO_URL = "ezgif-frame-065.jpeg";  // replace if your path is different

  /* ====== Modal controls & live clock ====== */
  let clockTimer;
  function openStaff(){
    document.getElementById("staff").style.display="flex";
    updateClock();
    if (clockTimer) clearInterval(clockTimer);
    clockTimer = setInterval(updateClock, 1000);
  }
  function closeStaff(){
    document.getElementById("staff").style.display="none";
    if (clockTimer) clearInterval(clockTimer);
  }
  function updateClock(){
    document.getElementById("liveTime").textContent = new Date().toLocaleString();
  }

  /* ====== Redeem flow animation ====== */
  function startFlow(){
    closeStaff();
    const anim = document.getElementById("anim");
    const arc  = document.querySelector("#loaderArc circle");
    const check= document.getElementById("check");
    const pieces=document.getElementById("pieces");
    const ll   = document.getElementById("ll");
    const tag  = document.getElementById("tag");

    // ensure LL image is set
    ll.src = LL_LOGO_URL;

    anim.style.display = "flex";

    // 1) draw arc
    gsap.fromTo(arc, {strokeDashoffset:250}, {strokeDashoffset:0, duration:1.5, ease:"power2.inOut", onComplete(){
      // 2) show check
      document.getElementById("loaderArc").style.display="none";
      check.style.display="block";
      gsap.from(check, {scale:0, duration:0.5, ease:"back.out(2)"});
      gsap.to(tag, {opacity:1, duration:0.8, delay:0.2});
    }});

    // 3) break into pieces
    setTimeout(()=>{
      check.style.display="none";
      pieces.style.display="flex";
      gsap.fromTo(pieces.children, {y:0, opacity:1}, {y:-80, rotation:170, opacity:0, duration:0.9, stagger:0.18});
    }, 3000);

    // 4) reveal EXACT LL image (centered)
    setTimeout(()=>{
      pieces.style.display="none";
      ll.style.display="block";
      gsap.from(ll, {scale:0.6, y:20, opacity:0, duration:0.6, ease:"power3.out"});
    }, 4200);

    // 5) finish to empty screen
    setTimeout(()=>{
      anim.style.display="none";
      document.getElementById("empty").style.display="block";
      document.getElementById("buy").style.display="block";
    }, 6000);
  }// Open/close modal
    function openStaffModal(){
      document.getElementById("staffModal").style.display="flex";
      updateTime();
      setInterval(updateTime,1000);
    }
    function closeStaffModal(){
      document.getElementById("staffModal").style.display="none";
    }
    function updateTime(){
      document.getElementById("liveTime").textContent = new Date().toLocaleString();
    }

    // Redeem animation
    function startAnimation(){
      document.getElementById("staffModal").style.display="none";
      const screen=document.getElementById("animationScreen");
      screen.style.display="flex";

      const loaderArc=document.querySelector("#loaderArc circle");
      const check=document.getElementById("checkIcon");
      const pieces=document.getElementById("pieces");
      const logo=document.getElementById("llLogo");
      const tagline=document.getElementById("tagline");

      // Step 1: Animate loader arc
      gsap.fromTo(loaderArc,{strokeDashoffset:200},{strokeDashoffset:0, duration:1.5, ease:"power2.inOut", onComplete:()=>{
        // Step 2: Replace arc with checkmark
        document.getElementById("loaderArc").style.display="none";
        check.style.display="block";
        gsap.from(check,{scale:0, duration:0.5, ease:"back.out(2)"});
        gsap.to(tagline,{opacity:1, delay:0.5, duration:1});
      }});

      // Step 3: Break into pieces
      setTimeout(()=>{
        check.style.display="none";
        pieces.style.display="flex";
        gsap.fromTo(pieces.children,{y:0,opacity:1},{y:-80, rotation:180, opacity:0, duration:1, stagger:0.2});
      },3000);

      // Step 4: Show LL logo image
      setTimeout(()=>{
        pieces.style.display="none";
        logo.style.display="block";
        gsap.from(logo,{scale:0, y:-50, duration:0.7, ease:"back.out(1.7)"});
      },4200);

      // Step 5: End screen
      setTimeout(()=>{
        screen.style.display="none";
        document.getElementById("noPasses").style.display="block";
        document.getElementById("buyBtn").style.display="block";
      },6000);
    }
