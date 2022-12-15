document.querySelector(".container").addEventListener("click", (e) => {
  const t = e.target;
  if (t.closest(".banka").querySelector(".from")) {
    t.closest(".banka").querySelector(".from").classList.toggle("from");
    return true;
  }
  const from = t.closest(".container").querySelector(".from");
  const to = t.closest(".banka").querySelector(".water");
  console.log("-----------------------------");
  console.log("-----------------------------");
  console.log(!!from, !!to);
  console.log("-----------------------------");
  if (from) {
    let toV = parseInt(to.dataset.value);
    let freeV = parseInt(t.closest(".banka").dataset.size) - toV;
    let fromV = parseInt(from.dataset.value);
    console.log("toV, freeV, fromV", toV, freeV, fromV);
    if (freeV >= fromV) {
      from.dataset.value = 0;
      to.dataset.value = fromV + toV;
    } else {
      from.dataset.value = fromV - freeV;
      to.dataset.value = toV + freeV;
    }
    from.classList.toggle("from");
  } else if (to) to.classList.toggle("from");

  console.log(t.closest(".water"));
  console.log(t.closest(".banka"));
  return true;
});
