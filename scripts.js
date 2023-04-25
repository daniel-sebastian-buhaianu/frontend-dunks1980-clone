const handleClick = (event) => {
	const aboutMeSection = document.getElementById("about-me");
	const visibleSection = document.querySelector("section.display-block");
	let targetSection = document.getElementById(`about-${event.target.id}`);

	if (event.target.id === "logo-icon" || event.target.parentElement.id === "logo-icon") {
		targetSection = aboutMeSection;
	}

	if (visibleSection !== targetSection) {
		visibleSection.className = visibleSection.className.replace("display-block", "display-none");
		targetSection.className = targetSection.className.replace("display-none", "display-block");
	}
	else
	{
		if (visibleSection.id !== "about-me") {
			visibleSection.className = visibleSection.className.replace("display-block", "display-none");
			aboutMeSection.className = aboutMeSection.className.replace("display-none", "display-block");
		}
	}
};

const projectsATags = document.querySelectorAll("section#projects > ul > li > a");

for (aTag of projectsATags) {
	aTag.addEventListener("click", e => handleClick(e));
}

document.getElementById("logo-icon").addEventListener("click", e => handleClick(e));