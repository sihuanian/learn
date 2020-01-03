module.exports = {
  formatDate(time) {
    // console.log(time)
    time = time * 1000;
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  }
}