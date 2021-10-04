const iframeContainerId = "gumroad-iframe-container";
const iframeId = "gumroad-iframe";
const loaderId = "gumroad-loader";
const LOADING_SVG = `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="30px" height="30px" viewBox="0 0 128 128" xml:space="preserve"><g><circle cx="16" cy="64" r="16" fill="#6736dd"/><circle cx="16" cy="64" r="14.344" fill="#6736dd" transform="rotate(45 64 64)"/><circle cx="16" cy="64" r="12.531" fill="#6736dd" transform="rotate(90 64 64)"/><circle cx="16" cy="64" r="10.75" fill="#6736dd" transform="rotate(135 64 64)"/><circle cx="16" cy="64" r="10.063" fill="#6736dd" transform="rotate(180 64 64)"/><circle cx="16" cy="64" r="8.063" fill="#6736dd" transform="rotate(225 64 64)"/><circle cx="16" cy="64" r="6.438" fill="#6736dd" transform="rotate(270 64 64)"/><circle cx="16" cy="64" r="5.375" fill="#6736dd" transform="rotate(315 64 64)"/><animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="720ms" repeatCount="indefinite"></animateTransform></g></svg>`;
const loaderDiv = (() => {
	const div = document.createElement("DIV");
	div.id = loaderId;
	div.innerHTML = LOADING_SVG;
	div.style.position = "fixed";
	div.style.top = "50%";
	div.style.left = "50%";
	div.style.display = "none";
	return div;
})();

const iframe = (() => {
	const iframe = document.createElement("iframe");
	iframe.id = iframeId;
	iframe.allowFullscreen = true;
	iframe.style.position = "absolute";
	iframe.style.minWidth = "80%";
	iframe.style.minHeight = "80%";
	iframe.allowTransparency = "true";
	return iframe;
})();
const iframeContainer = (() => {
	const div = document.createElement("DIV");
	div.addEventListener("click", (e) => {
		div.style.display = "none";
		document.getElementById(loaderId).style.display = "none";
		document.getElementById(iframeId).src = "";
	});
	div.id = iframeContainerId;
	div.appendChild(iframe);
	div.style.display = "none";
	div.style.position = "fixed";
	div.style.top = 0;
	div.style.right = 0;
	div.style.overflowY = "auto";
	div.style.zIndex = 9999;
	div.style.width = "100%";
	div.style.height = "100%";
	return div;
})();
document.getElementsByTagName("BODY")[0].appendChild(loaderDiv);
document.getElementsByTagName("BODY")[0].appendChild(iframeContainer);
const applyGumroadButtonStyles = (gumroadAnchorTag) => {
	gumroadAnchorTag.style.border = "1px solid red";
};
const addClickEvent = (gumroadAnchorTag) => {
	const iFrame = document.getElementById(iframeId);
	const loader = document.getElementById(loaderId);
	gumroadAnchorTag.addEventListener("click", (e) => {
		e.preventDefault();
		iFrame.src = "https://www.usenamaste.com/iframe-pages";
		const iframeContainer = document.getElementById(iframeContainerId);
		iframeContainer.style.display = "flex";
		iframeContainer.style.justifyContent = "center";
		iframeContainer.style.alignItems = "center";
		iframeContainer.style.backgroundColor = "rgba(0, 0, 0, 0.7)";

		loader.style.display = "block";
	});
};
const scanGumroadProductsLinkOnThePage = (() => {
	const partnerSiteLink = "https://zoho.namate.so";
	const allAnchorTagsOnThePage = document.getElementsByTagName("a");
	for (const anchorTag of allAnchorTagsOnThePage) {
		if (anchorTag.href.startsWith(partnerSiteLink)) {
			applyGumroadButtonStyles(anchorTag);
			addClickEvent(anchorTag);
		}
	}
})();
