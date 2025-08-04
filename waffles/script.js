let achieved = 0;
const total = 10;

function markAchieved() {
  if (achieved < total) {
    achieved++;
    const percent = (achieved / total) * 100;
    document.getElementById('progress-bar').style.width = percent + '%';
    document.getElementById('progress-text').innerText = `${achieved} out of ${total} dreams achieved 💖`;
  }
}

function toggleQuote() {
  const q = document.getElementById('quote');
  q.style.display = q.style.display === 'none' ? 'block' : 'none';
}

function liveDream() {
  const val = document.getElementById('dreamInput').value;
  document.getElementById('liveDreamText').textContent = "Dream: " + val;
}

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function setFavorite(place) {
  document.getElementById("favPlace").textContent = "My fav dream place: " + place;
}

function toggleCaptions() {
  const captions = document.querySelectorAll(".caption");
  captions.forEach(c => {
    c.style.display = c.style.display === "none" ? "block" : "none";
  });
}

showSlide(slideIndex);
