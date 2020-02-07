function Mouve(item, state) {
  for (let i = 0; i < item.length; i++) {
    if (i % 5 === 0) {
      document.getElementById(
        `${item[i]}`
      ).style.transform = `translate3d(-${state.x}%, -${state.y}%, 0)`;
    } else if (i % 2 === 0) {
      document.getElementById(
        `${item[i]}`
      ).style.transform = `translate3d( -${state.y / 2}%,-${state.x / 2}%, 0)`;
    } else {
      document.getElementById(
        `${item[i]}`
      ).style.transform = `translate3d( -${state.y / (i * 2)}%,-${state.x /
        (i * 2)}%, 0)`;
    }
  }
}

export default Mouve;
