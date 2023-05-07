function scrollDown() {
  window.scrollTo({
    // Then go to the initial position before the focus
    top: 0,
    behavior: "smooth",
  });
}

export default scrollDown;
