export function newProjectIconSVG() {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  const iconPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  iconSvg.classList.add("icon-new");
  iconSvg.setAttribute("viewBox", "0 0 512 512");
  iconPath1.setAttribute(
    "d",
    "M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
    );
  iconPath1.setAttribute("fill", "none");
  iconPath1.setAttribute("stroke", "currentColor");
  iconPath1.setAttribute("stroke-linecap", "round");
  iconPath1.setAttribute("stroke-linejoin", "round");
  iconPath1.setAttribute("stroke-width", "32");
  iconPath2.setAttribute(
    "d",
    "M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z"
    );
  iconSvg.appendChild(iconPath1);
  iconSvg.appendChild(iconPath2);
  return iconSvg;
};

export function deleteProjectIconSVG() {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
    );
  const iconPath2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
    );
  const iconPath3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
    );
  iconSvg.classList.add("icon-delete");
  iconSvg.setAttribute("viewBox", "0 0 512 512");
  iconPath1.setAttribute(
    "d",
    "M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
    );
  iconPath1.setAttribute("fill", "none");
  iconPath1.setAttribute("stroke", "currentColor");
  iconPath1.setAttribute("stroke-linecap", "round");
  iconPath1.setAttribute("stroke-linejoin", "round");
  iconPath1.setAttribute("stroke-width", "32");
  iconPath2.setAttribute("stroke", "currentColor");
  iconPath2.setAttribute("stroke-linecap", "round");
  iconPath2.setAttribute("stroke-miterlimit", "10");
  iconPath2.setAttribute("stroke-width", "32");
  iconPath2.setAttribute("d","M80 112h352");
  iconPath3.setAttribute(
    "d",
    "M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
    );
  iconPath3.setAttribute("fill", "none");
  iconPath3.setAttribute("stroke", "currentColor");
  iconPath3.setAttribute("stroke-linecap", "round");
  iconPath3.setAttribute("stroke-linejoin", "round");
  iconPath3.setAttribute("stroke-width", "32");
  iconSvg.appendChild(iconPath1);
  iconSvg.appendChild(iconPath2);
  iconSvg.appendChild(iconPath3);
  return iconSvg;
};