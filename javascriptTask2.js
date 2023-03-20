function temp() {
    const temperature = document.getElementById("input").value;
    const message = temperature >= 30 ? "HOT" : "Cold";
    document.write(message);
  }