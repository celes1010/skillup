const careerMap = {
  python: ["Backend Developer", "Data Scientist", "AI Engineer"],
  javascript: ["Frontend Developer", "Full Stack Developer", "App Developer"],
  cloud: ["Cloud Architect", "DevOps Engineer", "Site Reliability Engineer"],
  ai: ["ML Engineer", "AI Researcher", "NLP Scientist"]
};

const input = document.getElementById("skillInput");
const autocomplete = document.getElementById("autocompleteList");
const btn = document.getElementById("findPathBtn");
const results = document.getElementById("careerResults");
const skills = Object.keys(careerMap);

// Autocomplete
input.addEventListener("input", () => {
  const q = input.value.trim().toLowerCase();
  autocomplete.innerHTML = "";
  if (!q) return autocomplete.classList.add("hidden");

  const matches = skills.filter(s => s.includes(q));
  if (matches.length === 0) return autocomplete.classList.add("hidden");

  autocomplete.classList.remove("hidden");
  matches.forEach(s => {
    const div = document.createElement("div");
    div.textContent = s;
    div.className = "px-3 py-2 hover:bg-gray-100 cursor-pointer";
    div.onclick = () => {
      input.value = s;
      autocomplete.classList.add("hidden");
      btn.click();
    };
    autocomplete.appendChild(div);
  });
});

document.addEventListener("click", (e) => {
  if (!autocomplete.contains(e.target) && e.target !== input) {
    autocomplete.classList.add("hidden");
  }
});

// Career suggestions
btn.addEventListener("click", () => {
  const skill = input.value.trim().toLowerCase();
  results.innerHTML = "";

  if (!skill) {
    results.innerHTML = "<p class='text-white'>Please enter a skill.</p>";
    return;
  }

  if (!careerMap[skill]) {
    results.innerHTML = "<p class='text-white'>No data found for this skill.</p>";
    return;
  }

  const ul = document.createElement("ul");
  ul.className = "list-disc pl-6";
  careerMap[skill].forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    ul.appendChild(li);
  });
  results.appendChild(ul);
});
