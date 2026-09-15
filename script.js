/* ================= MOBILE NAVIGATION ================= */

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}

/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("open");
        navToggle?.setAttribute("aria-expanded", "false");
    });
});

/* ================= CONTACT FORM & WHATSAPP ================= */

const whatsappNumber = "254111220627";
const form = document.querySelector("#lead-form");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form.querySelector('[name="name"]')?.value || "";
        const phone = form.querySelector('[name="phone"]')?.value || "";
        const area = form.querySelector('[name="area"]')?.value || "";
        const service = form.querySelector('[name="service"]')?.value || "";

        const whatsappMessage = 
`Hello Weon Networks,

I would like to request a call.

Name: ${name}
Phone: ${phone}
Area: ${area}
Service: ${service}`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, "_blank");
        form.reset();
    });
}

/* ================= PLAN SELECTION HELPER ================= */

document.querySelectorAll('.plan-card a[href="#get-connected"]').forEach((button) => {
    button.addEventListener("click", (event) => {
        const planCard = event.target.closest(".plan-card");
        const planName = planCard?.querySelector("h3")?.innerText || "";
        const selectElement = document.querySelector('#lead-form select[name="service"]');

        if (selectElement && planName) {
            // Find option matching plan or select "Home internet" as default
            const targetOption = Array.from(selectElement.options).find(opt => opt.text.includes(planName));
            if (targetOption) {
                selectElement.value = targetOption.value;
            }
        }
    });
});

/* ================= CURRENT YEAR ================= */

const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}