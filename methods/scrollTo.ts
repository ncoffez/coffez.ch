export function scrollTo(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  return target.scrollIntoView({ behavior: 'smooth', block: 'start'});
}
