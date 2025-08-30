const faders = document.querySelectorAll(".fade-in");

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;

  faders.forEach(fader => {
    const top = fader.getBoundingClientRect().top;
    if(top < triggerBottom){
      fader.classList.add("active");
    }
  });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  // Success message element create
  const successMsg = document.createElement("p");
  successMsg.style.color = "green";
  successMsg.style.fontSize = "14px";
  successMsg.style.marginTop = "8px";
  successMsg.style.display = "none";
  successMsg.innerText = "✅ Your message has been prepared in your email app!";
  form.appendChild(successMsg);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    // Mailto link create
    const mailto = `mailto:your.email@example.com?subject=${encodeURIComponent(
      subject || "Contact from " + name
    )}&body=${encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + message
    )}`;

    // Email client open
    window.location.href = mailto;

    // Success message show
    successMsg.style.display = "block";

    // Auto-hide after 5 seconds
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 5000);

    // Clear form
    form.reset();
  });
});


// Back to Top button
document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});




