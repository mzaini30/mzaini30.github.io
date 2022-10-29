addEventListener("storage", (x) => {
  if (x.key === "nama") {
    console.log(`Halo ${localStorage.nama}`);
  }
});
