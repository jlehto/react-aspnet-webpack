
const hello = () => {
    const element = document.createElement('div');

    element.innerHTML = "Hello there"

    return element;
  }

document.body.appendChild(hello());