const INSTANCE = "https://invidious.snopyta.org"; 
// If this instance ever goes down, switch to another public Invidious instance

async function search() {
  const query = document.getElementById("searchInput").value;
  if (!query) return;

  const res = await fetch(
    `${INSTANCE}/api/v1/search?q=${encodeURIComponent(query)}&type=video`
  );
  const data = await res.json();

  const results = document.getElementById("results");
  results.innerHTML = "";

  data.slice(0, 12).forEach(video => {
    results.innerHTML += `
      <div class="video">
        <iframe 
          src="https://www.youtube.com/embed/${video.videoId}" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
        <h3>${video.title}</h3>
      </div>
    `;
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
