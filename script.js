const body = document.body;
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const revealElements = document.querySelectorAll(".reveal");
const cursorGlow = document.querySelector(".cursor-glow");
const hero = document.querySelector(".hero");
const heroVisual = document.querySelector(".hero-visual");
const heroCopy = document.querySelector(".hero-copy");
const resumeBtn = document.getElementById("resumeBtn");
const fluidCursor = document.querySelector(".fluid-cursor");
const resumeModal = document.getElementById("resumeModal");
const resumeModalClose = document.getElementById("resumeModalClose");
const resumeModalBackdrop = document.getElementById("resumeModalBackdrop");
const hoverTargets = document.querySelectorAll("a, button, .btn, .social-link");
const warpTargets = document.querySelectorAll(".btn, .project-card, .social-link, .metric-card, .highlight-card, .contact-info-card, .certification-showcase, .profile-cutout");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("open");
        body.classList.toggle("menu-open");
    });

    navItems.forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("open");
            body.classList.remove("menu-open");
        });
    });
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        }
    });
}, {
    threshold: 0.16,
    rootMargin: "0px 0px -60px 0px"
});

revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 0.06, 0.4)}s`;
    revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navItems.forEach((link) => {
                const isActive = link.getAttribute("href") === `#${id}`;
                link.classList.toggle("active", isActive);
            });
        }
    });
}, {
    threshold: 0.45
});

sections.forEach((section) => sectionObserver.observe(section));

const cursorState = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    currentX: window.innerWidth / 2,
    currentY: window.innerHeight / 2
};

const animateCursor = () => {
    cursorState.currentX += (cursorState.x - cursorState.currentX) * 0.14;
    cursorState.currentY += (cursorState.y - cursorState.currentY) * 0.14;

    if (cursorGlow) {
        cursorGlow.style.left = `${cursorState.x}px`;
        cursorGlow.style.top = `${cursorState.y}px`;
    }

    if (fluidCursor) {
        fluidCursor.style.left = `${cursorState.currentX}px`;
        fluidCursor.style.top = `${cursorState.currentY}px`;
    }

    requestAnimationFrame(animateCursor);
};

requestAnimationFrame(animateCursor);

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    cursorState.x = x;
    cursorState.y = y;
    fluidCursor?.classList.add("is-visible");

    warpTargets.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + (rect.width / 2);
        const centerY = rect.top + (rect.height / 2);
        const deltaX = x - centerX;
        const deltaY = y - centerY;
        const distance = Math.hypot(deltaX, deltaY);
        const maxDistance = 220;

        if (distance < maxDistance) {
            const strength = (1 - (distance / maxDistance)) * 10;
            const moveX = (deltaX / maxDistance) * strength;
            const moveY = (deltaY / maxDistance) * strength;
            element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${(-moveY) * 0.55}deg) rotateY(${moveX * 0.55}deg)`;
        } else {
            element.style.transform = "";
        }
    });
});

document.addEventListener("mouseleave", () => {
    fluidCursor?.classList.remove("is-visible");
    warpTargets.forEach((element) => {
        element.style.transform = "";
    });
});

hoverTargets.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        fluidCursor?.classList.add("is-hovering");
    });

    element.addEventListener("mouseleave", () => {
        fluidCursor?.classList.remove("is-hovering");
    });
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (heroVisual) {
        heroVisual.style.transform = `translateY(${scrollY * 0.08}px)`;
    }

    if (heroCopy) {
        heroCopy.style.transform = `translateY(${scrollY * 0.03}px)`;
    }

    if (hero) {
        const blobs = hero.querySelectorAll(".blob");
        blobs.forEach((blob, index) => {
            const speed = 0.03 + (index * 0.015);
            blob.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }
}, {
    passive: true
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
        menuToggle?.classList.remove("active");
        navLinks?.classList.remove("open");
        body.classList.remove("menu-open");
    }
});

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Magnetic Follow Effect for Background Elements
const magneticElements = [
    ...document.querySelectorAll(".blob"),
];

const magneticState = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0
};

const elementStates = magneticElements.map(() => ({
    x: 0,
    y: 0
}));

// Staggered easing factors for depth effect (0 = slowest, 1 = fastest)
const easingFactors = [0.02, 0.04, 0.06];

const updateMagneticEffect = () => {
    // Smooth cursor interpolation
    magneticState.vx += (magneticState.x - magneticState.vx) * 0.08;
    magneticState.vy += (magneticState.y - magneticState.vy) * 0.08;

    // Normalize cursor position relative to center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distX = (magneticState.vx - centerX) / centerX;
    const distY = (magneticState.vy - centerY) / centerY;

    magneticElements.forEach((element, index) => {
        // Get easing factor for this layer (staggered effect)
        const easingFactor = easingFactors[index % easingFactors.length];

        // Calculate max translation distance based on layer
        const maxDistance = 40 + (index * 8);

        // Update element state with easing
        elementStates[index].x += (distX * maxDistance - elementStates[index].x) * easingFactor;
        elementStates[index].y += (distY * maxDistance - elementStates[index].y) * easingFactor;

        // Apply transform
        element.style.transform = `translate3d(${elementStates[index].x}px, ${elementStates[index].y}px, 0)`;
    });

    requestAnimationFrame(updateMagneticEffect);
};

document.addEventListener("mousemove", (event) => {
    magneticState.x = event.clientX;
    magneticState.y = event.clientY;
});

// Reset effect on mouse leave
document.addEventListener("mouseleave", () => {
    magneticState.x = window.innerWidth / 2;
    magneticState.y = window.innerHeight / 2;
});

requestAnimationFrame(updateMagneticEffect);

// Resume Modal Functionality
const openResumeModal = () => {
    if (resumeModal && resumeModalBackdrop) {
        resumeModal.classList.add("active");
        resumeModalBackdrop.classList.add("active");
        body.style.overflow = "hidden";
        
        // Trigger reveal animations for modal content
        setTimeout(() => {
            const modalRevealElements = resumeModal.querySelectorAll(".reveal");
            modalRevealElements.forEach((element, index) => {
                element.style.transitionDelay = `${Math.min(index * 0.08, 0.4)}s`;
                element.classList.add("is-visible");
            });
        }, 50);
    }
};

const closeResumeModal = () => {
    if (resumeModal && resumeModalBackdrop) {
        // Remove reveal animations before closing
        const modalRevealElements = resumeModal.querySelectorAll(".reveal");
        modalRevealElements.forEach((element) => {
            element.classList.remove("is-visible");
            element.style.transitionDelay = "";
        });
        
        resumeModal.classList.remove("active");
        resumeModalBackdrop.classList.remove("active");
        body.style.overflow = "";
    }
};

if (resumeBtn) {
    resumeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openResumeModal();
    });
}

// Open resume modal from hero button
const openResumeButtons = document.querySelectorAll(".open-resume-modal");
openResumeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        openResumeModal();
    });
});

if (resumeModalClose) {
    resumeModalClose.addEventListener("click", closeResumeModal);
}

if (resumeModalBackdrop) {
    resumeModalBackdrop.addEventListener("click", closeResumeModal);
}

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeResumeModal();
    }
});
