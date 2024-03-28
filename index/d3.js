function createImageElement(src) {
    let img = document.createElement("img");
    img.src = src;
    img.style.width = "100%";
    img.style.height = "33.4%";
    img.style.objectFit = "cover";
    img.style.margin = 0;
    return img;
}

function clearMainDiv() {
    let render_div = document.getElementById("main");
    render_div.innerHTML = ""; // Clear existing content
}

function drawSpecialScreenshots() {
    let render_div = document.getElementById("main");
    render_div.style.width = "100%";
    render_div.style.height = "100%";
    render_div.style.display = "flex";

    let col_ind = document.createElement("div");
    let col_am = document.createElement("div");
    col_ind.style.width = "50%";
    col_am.style.width = "50%";
    col_ind.style.height = "100%";
    col_am.style.height = "100%";

    let img_gill = createImageElement("./images/kanan_gill_vibe.webp");
    let img_das = createImageElement("./images/vir_das_vibe.jpeg");
    let img_seb = createImageElement("./images/kenny_seb_vibe.jpg");
    col_ind.append(img_gill, img_das, img_seb);

    let img_mul = createImageElement("./images/mulaney_vibe.jpeg");
    let img_ber = createImageElement("./images/berlant_vibe.webp");
    let img_roc = createImageElement("./images/rock_vibe.webp");
    col_am.append(img_mul, img_ber, img_roc);

    render_div.append(col_ind, col_am);
}

function transcripts() {
    let render_div = document.getElementById("main");
    render_div.innerHTML = ""; // Clear existing content
}
