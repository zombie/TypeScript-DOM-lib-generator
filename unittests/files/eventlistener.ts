document.addEventListener("arbitrary_invalid_event", (ev) => {
  return ev.returnValue;
});
