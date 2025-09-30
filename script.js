const posts = [
  {
    title: 'Getting started with JavaScript',
    content:
      'Coding is like learning a new language. You start small, with words, then sentences...',
  },
  {
    title: 'Why Learn JavaScript?',
    content:
      'JavaScript powers the web. From interactivity to entire web apps, it’s everywhere...',
  },
  {
    title: 'Tips for Beginner Coders',
    content:
      '1. Practice daily. 2. Build projects. 3. Don’t fear errors — they’re your best teachers!',
  },
];

const postsContainer = document.getElementById('posts');

posts.forEach((post) => {
  const article = document.createElement('article');
  const title = document.createElement('h2');
  const content = document.createElement('p');
  const readMore = document.createElement('span');

  title.textContent = post.title;
  content.textContent = post.content.substring(0, 80) + '...';
  readMore.textContent = 'Read More';
  readMore.classList.add = 'read-more';

  let expanded = false;
  readMore.addEventListener('click', () => {
    expanded = !expanded;
    content.textContent = expanded
      ? post.content
      : post.content.substring(0, 80) + '...';
    readMore.textContent = expanded ? 'Show Less' : 'Read More';
  });

  article.appendChild(title);
  article.appendChild(content);
  article.appendChild(readMore);
  postsContainer.appendChild(article);
});
