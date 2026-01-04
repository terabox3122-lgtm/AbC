function addNotice() {
  let text = document.getElementById("text").value;
  let imageInput = document.getElementById("image");

  if (text === "" && imageInput.files.length === 0) {
    alert("Write something or upload an image");
    return;
  }

  let div = document.createElement("div");
  div.className = "notice";

  if (text !== "") {
    let p = document.createElement("p");
    p.innerText = text;
    div.appendChild(p);
  }

  if (imageInput.files.length > 0) {
    let img = document.createElement("img");
    img.src = URL.createObjectURL(imageInput.files[0]);
    div.appendChild(img);
  }

  document.getElementById("notices").prepend(div);

  document.getElementById("text").value = "";
  imageInput.value = "";
}
