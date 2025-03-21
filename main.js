//sec1 animations
gsap.from(".main-text .line1", {
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".main-text .line2", {
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.2,
  ease: "power2.out",
});

gsap.from("nav", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.4,
  ease: "power2.out",
});

gsap.from(".ele3", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.6,
  ease: "power2.out",
});

gsap.from(".side-text", {
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.8,
  ease: "power2.out",
});
// sec2 animations
document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".floating-card", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    // delay: 2,
    // ease: "power3.out",
    scrollTrigger: {
      trigger: ".floating-card",
      start: "50% 50%",
      end: "50% 50%",
      scrub: 3,
      // markers: true,
    },
  });

  // gsap.from(".about-me", {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1.5,
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: ".floating-card",
  //     start: "50 50%",
  //     end: "50% 50%",
  //     scrub: 3,
  //     markers: true,
  //   },
  // });
  gsap.from(".about-me-heading .text", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-me-heading .text",
      start: "50 50%",
      // end: "50% 50%",
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".x-symbol img", {
    opacity: 0,
    scale: 0,
    stagger: 0.15,
    duration: 2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".x-symbol",
      start: "50 50%",
      end: "50% 50%",
      scrub: 3,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".about-me-content p", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-me-content p",
      start: "-200 60%",
      // markers: true,
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });
});
//sec5 animations
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the "SKILLS" heading
  gsap.from(".tech-heading", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".tech-heading",
      start: "top 40%", // Starts slightly early when entering
      end: "top 60%",
      scrub: 4,
      toggleActions: "play none none reverse",
    },
  });

  // Animate Skill Icons (Staggered effect)
  // Set initial scale to prevent small load size
  gsap.set(".skills-grid img", { scale: 1 });

  gsap.from(".skills-grid img", {
    opacity: 0,
    scale: 0.5,
    stagger: 0.2,
    duration: 1.5,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".skills-grid",
      start: "top 90%",
      end: "top 50%",
      scrub: 0.5,
      toggleActions: "play none none reverse",
    },
  });

  // GSAP hover effect
  document.querySelectorAll(".skills-grid img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      gsap.to(img, { scale: 1.4, duration: 0.3, ease: "power2.out" });
    });

    img.addEventListener("mouseleave", () => {
      gsap.to(img, { scale: 1, duration: 0.3, ease: "sine.out" });
    });
  });
  // Animate the paragraph under skills
  gsap.from(".skill-p p", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skill-p",
      start: "top 80%", // Starts after skill icons appear
      end: "top 55%",
      scrub: 2,
      toggleActions: "play none none reverse",
    },
  });

  // Animate "WHAT I CAN OFFER" heading
  gsap.from(".offer-heading", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".offer-heading",
      start: "top 40%", // Appears naturally after skill section
      end: "top 55%",
      scrub: 4,
      toggleActions: "play none none reverse",
    },
  });

  // Animate Offer Cards (Web Dev from Left, UI/UX from Right)
  // Animate Offer Cards on Scroll
  gsap.from(".offer-card:nth-child(1)", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".offer-card:nth-child(1)",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
      toggleActions: "play none none reverse",
    },
    overwrite: "auto", // Prevent conflicts
  });

  gsap.from(".offer-card:nth-child(2)", {
    opacity: 0,
    x: 100,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".offer-card:nth-child(2)",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
      toggleActions: "play none none reverse",
    },
    overwrite: "auto",
  });

  // Fix Hover Effect Using GSAP
  document.querySelectorAll(".offer-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Background fade-in effect for smoother appearance
  // gsap.from(".section-5", {
  //   opacity: 0,
  //   duration: 2,
  //   ease: "power2.out",
  //   scrollTrigger: {
  //     trigger: ".section-5",
  //     start: "top 90%", // Subtle fade-in as section enters
  //     end: "top 70%",
  //     scrub: 2,
  //   },
  // });
});

/*sec5*/
//footer sec animations
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
function createSpaceVibe(numStars) {
  const footer = document.getElementById("footer");
  if (!footer) return;

  // Create stars
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("i");
    star.classList.add("fas", "fa-star", "random-star");
    star.style.position = "absolute";
    star.style.color = "white";
    star.style.fontSize = `${Math.random() * 10 + 5}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * footer.offsetHeight}px`;
    star.style.opacity = Math.random();
    star.style.animation = `twinkle ${Math.random() * 5 + 3}s linear infinite`;
    footer.appendChild(star);
  }

  // Create sun
  const sun = document.createElement("div");
  sun.classList.add("sun");

  sun.style.position = "absolute";
  sun.style.width = "130px";
  sun.style.height = "130px";
  sun.style.background = "linear-gradient(to right, #ffcc00, #ff9933)";
  sun.style.borderRadius = "50%";
  sun.style.boxShadow = "0 0 50px #ff9933";
  sun.style.left = "5%";
  sun.style.top = "75%";
  footer.appendChild(sun);

  // Create Earth
  const earth = document.createElement("div");
  earth.classList.add("earth");
  earth.style.position = "absolute";
  earth.style.width = "80px";
  earth.style.height = "80px";
  earth.style.backgroundImage = 'url("earth.jpeg")'; // Replace with your Earth image URL
  earth.style.backgroundSize = "cover";
  earth.style.backgroundPosition = "50% center";
  earth.style.backgroundRepeat = "no-repeat";
  earth.style.borderRadius = "50%";
  earth.style.boxShadow = "0 0 30px #0077be";
  earth.style.left = "59%"; // Adjust Earth position
  earth.style.top = "30%"; // Adjust Earth position
  footer.appendChild(earth);

  // Create Moon
  const moon = document.createElement("div");
  moon.classList.add("moon");
  moon.style.position = "absolute";
  moon.style.width = "40px";
  moon.style.height = "40px";
  moon.style.backgroundImage = 'url("moon.jpg")';

  moon.style.backgroundPosition = "center center"; // Center
  moon.style.borderRadius = "50%";
  moon.style.boxShadow = "0 0 20px #aaa";
  moon.style.left = "64%";
  moon.style.top = "25%";
  moon.style.transform = "scale(1.2)";
  footer.appendChild(moon);
  moon.style.backgroundSize = "130% 130%"; // Even more
  // overscale
  moon.style.zIndex = 1;
}

createSpaceVibe(50);

earth.classList.add("earth");
moon.classList.add("moon");

const style = document.createElement("style");
style.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  .random-star {
    pointer-events: none;
  }
  .sun {
    pointer-events: none;
  }
  .earth {
    pointer-events: none;
  }
  .moon{
    pointer-events: none;
  }
`;
document.head.appendChild(style);
document.head.appendChild(style);

//adding functionality to nav menu
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
