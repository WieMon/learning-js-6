const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ['Anna', 'Eva', 'Kate', 'Gia', 'Lily', 'Maria', 'Monica'];
const prefixes = ['I think', 'I believe', 'I am sure that', 'Maybe', 'Probably', 'For sure', 'I am telling you that'];

const nameGenerator = () => {
  const indexName = Math.floor(Math.random() * names.length);
  // const indexPrefixes = Math.floor(Math.random() * prefixes.length);
  // div.textContent = `${prefixes[indexPrefixes]} the best name is ${names[indexName]}`;
  div.textContent = `${prefixes[Math.floor(Math.random() * prefixes.length)]} the best name is ${names[indexName]}`;
}

btn.addEventListener('click', nameGenerator);