const allSections = document.querySelectorAll('.list__item--default')
console.log(allSections);

const revealSection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('list__item--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section)
  section.classList.add('list__item--hidden')
})
