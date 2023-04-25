const toggleArticle = (event) => {

	const aboutMeArticle = document.getElementById("about-me");
	const visibleArticle = document.querySelector("section#about article.visible");
	let targetArticle = document.getElementById(`about-${event.target.id}`);

	if (event.target.id === "logo-icon" 
		|| event.target.parentElement.id === "logo-icon")
	{
		targetArticle = aboutMeArticle;
	}

	if (visibleArticle !== targetArticle) {

		targetArticle.className = targetArticle.className.replace("hidden", "visible");
		visibleArticle.className = visibleArticle.className.replace("visible", "hidden");
	}
	else
	{
		if (visibleArticle !== aboutMeArticle) {
			visibleArticle.className = visibleArticle.className.replace("visible", "hidden");
			aboutMeArticle.className = aboutMeArticle.className.replace("hidden", "visible");
		}
	}
};

const aTags = document.querySelectorAll("section#projects > ul > li > a");
for (aTag of aTags) {
	aTag.addEventListener("click", e => toggleArticle(e));
}

document.getElementById("logo-icon").addEventListener("click", e => toggleArticle(e));
