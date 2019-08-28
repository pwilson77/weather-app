const divFactory = className => {
  const el = document.createElement("div");
  el.classList.add(className);
  return el;
};

const buttonFactory = (content, idName) => {
  const el = document.createElement("button");
  el.setAttribute("id", idName);
  el.innerHTML = content;
  return el;
};

const headerFactory = (headername, content) => {
  const el = document.createElement(headername);
  el.innerHTML = content;
  return el;
};

const paragraphFactory = idName => {
  const el = document.createElement("p");
  el.setAttribute("id", idName);
  return el;
};

export { divFactory, buttonFactory, headerFactory, paragraphFactory };
