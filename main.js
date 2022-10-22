var contentItem = document.querySelectorAll(".content-item");

contentItem.forEach((item) => {
  item.addEventListener("click", handleItemClick);
});

function handleItemClick(e) {
  console.log(this);
  var infoItem = this.querySelector(".content-info");
    var infoHeader = this.querySelector(".content-header .content-title");
    infoHeader.style.fontWeight = '600'
  infoItem.classList.toggle("is-active");

  infoItem.style.height = `${infoItem.scrollHeight}px`;
  if (!infoItem.classList.contains("is-active")) {
    infoHeader.style.fontWeight = '400'

    infoItem.style.height = 0;
  }
}
