function createImageElement(poster_src, src) {
  let parentDiv = document.createElement("div");
  let poster = document.createElement("img");
  // transcript.className = "transcript";
  parentDiv.style.width = "95%";
  parentDiv.style.height = "30%";
  parentDiv.style.display = "flex";
  parentDiv.style.justifyContent = "space-evenly";
  poster.src = poster_src;
  poster.style.width = "100%";
  poster.style.objectFit = "cover";
  poster.style.height = "100%";
  poster.style.position = "relative";
  poster.style.zIndex = 0;
  let img = document.createElement("img");
  img.src = src;
  img.style.width = "15%";
  img.style.height = "40%";
  img.style.objectFit = "cover";
  img.style.padding = "1rem 1rem";
  parentDiv.append(img);
  parentDiv.append(poster);
  return parentDiv;
}

function clearMainDiv() {
  let render_div = document.getElementById("main");
  render_div.innerHTML = ""; // Clear existing content
}

function drawSpecialScreenshots() {
  clearMainDiv();
  let render_div = document.getElementById("main");
  render_div.className = "figureContainer";
  render_div.style.flexDirection = "row";

  let col_ind = document.createElement("div");
  col_ind.className = "textColumn";
  let col_am = document.createElement("div");
  col_am.className = "textColumn";

  let img_gill = createImageElement("./images/kg.jpeg", data[0].image);
  let img_das = createImageElement("./images/vd.webp", data[1].image);
  let img_seb = createImageElement("./images/ks.png", data[2].image);
  col_ind.append(img_gill, img_das, img_seb);

  let img_mul = createImageElement("./images/jm.jpeg", data[3].image);
  let img_ber = createImageElement("./images/berlant_vibe.webp", data[4].image);
  let img_roc = createImageElement("./images/rock_vibe.webp", data[5].image);
  col_am.append(img_mul, img_ber, img_roc);

  render_div.append(col_ind, col_am);
}

function createTranscriptElement(text, src) {
  let parentDiv = document.createElement("div");
  let transcript = document.createElement("div");
  // transcript.className = "transcript";
  transcript.innerHTML = `${text}`;
  transcript.style.width = "87%";
  transcript.style.fontSize = "16px";
  transcript.style.height = "100%";
  transcript.style.color = "#7d7d7d";
  transcript.style.borderBottom = "1px solid #8a8a8a";
  transcript.style.position = "relative";
  transcript.style.overflow = "scroll";
  transcript.style.zIndex = 0;
  parentDiv.style.width = "100%";
  parentDiv.style.height = "30%";
  parentDiv.style.display = "flex";
  parentDiv.style.justifyContent = "space-evenly";
  let img = document.createElement("img");
  img.src = src;
  img.style.width = "15%";
  img.style.height = "40%";
  img.style.objectFit = "cover";
  img.style.padding = "1rem 1rem";
  parentDiv.append(img);

  transcript.appendChild(createGradientOverlay());
  parentDiv.append(transcript);
  return parentDiv;
}

function transcripts() {
  clearMainDiv();
  let render_div = document.getElementById("main");
  render_div.className = "figureContainer";

  let col_ind = document.createElement("div");
  col_ind.className = "textColumn";
  let col_am = document.createElement("div");
  col_am.className = "textColumn";

  let tr_gill = createTranscriptElement(data[0].transcript, data[0].image);
  let tr_das = createTranscriptElement(data[1].transcript, data[1].image);
  let tr_seb = createTranscriptElement(data[2].transcript, data[2].image);
  col_ind.append(tr_gill, tr_das, tr_seb);

  let tr_mul = createTranscriptElement(data[3].transcript, data[3].image);
  let tr_ber = createTranscriptElement(data[4].transcript, data[4].image);
  let tr_roc = createTranscriptElement(data[5].transcript, data[5].image);
  col_am.append(tr_mul, tr_ber, tr_roc);
  render_div.append(col_ind, col_am);
}

function createGradientOverlay() {
  let gradientOverlay = document.createElement("div");
  gradientOverlay.style.position = "sticky";
  gradientOverlay.style.bottom = 0;
  gradientOverlay.style.left = 0;
  gradientOverlay.style.width = "100%";
  gradientOverlay.style.height = "20%";
  gradientOverlay.style.zIndex = 1;
  gradientOverlay.style.background =
    "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25))";
  return gradientOverlay;
}

function createThemesElement(src, themes) {
  let parentDiv = document.createElement("div");
  parentDiv.style.width = "100%";
  parentDiv.style.height = "30%";
  parentDiv.style.display = "flex";
  parentDiv.style.alignItems = "center";
  parentDiv.style.justifyContent = "space-evenly";
  let img = document.createElement("img");
  img.src = src;
  img.style.width = "40%";
  img.style.height = "80%";
  img.style.objectFit = "cover";
  // img.style.padding = "1rem 1rem";
  parentDiv.append(img);
  let themesArray = document.createElement("div");
  themesArray.style.paddingLeft = "9%";
  themesArray.style.display = "flex";
  themesArray.style.flexDirection = "column";
  // themesArray.style.alignItems = "center";
  themesArray.style.justifyContent = "center";
  themes.forEach((theme) => {
    let themeContainer = document.createElement("div");
    themeContainer.style.color = "white";
    themeContainer.style.fontSize = "18px";
    themeContainer.innerHTML = `${theme}`;
    themesArray.append(themeContainer);
  });
  themesArray.style.width = "70%";
  themesArray.style.height = "100%";
  themesArray.style.color = "#7d7d7d";
  themesArray.style.zIndex = 0;

  parentDiv.append(themesArray);
  return parentDiv;
}

function themes() {
  clearMainDiv();
  let render_div = document.getElementById("main");
  render_div.className = "figureContainer";

  let col_ind = document.createElement("div");
  col_ind.className = "textColumn";
  let col_am = document.createElement("div");
  col_am.className = "textColumn";
  col_ind.style.paddingLeft = "10rem";
  col_am.style.paddingRight = "5rem";

  let themes_gill = createThemesElement(data[0].image, data[0].tm_themes);
  let themes_das = createThemesElement(data[1].image, data[1].tm_themes);
  let themes_seb = createThemesElement(data[2].image, data[2].tm_themes);
  col_ind.append(themes_gill, themes_das, themes_seb);

  let themes_mul = createThemesElement(data[3].image, data[3].tm_themes);
  let themes_ber = createThemesElement(data[4].image, data[4].tm_themes);
  let themes_rock = createThemesElement(data[5].image, data[5].tm_themes);
  col_am.append(themes_mul, themes_ber, themes_rock);
  render_div.append(col_ind, col_am);
}

function ldaWeb() {
  clearMainDiv();

  let main = document.getElementById("main");
  main.innerHTML = "";

  let margin = { top: 0, right: 0, bottom: 0, left: 0 },
    width = window.innerWidth * 0.7 - margin.left - margin.right,
    height = window.innerHeight - margin.top - margin.bottom;

  let svg = d3
    .select("#main")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  svg
    .append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .style("padding-left", "200px")
    .attr("fill", "white");

    const comicImages = {
      "Kate Berlant": "/index/images/berlant_no_bg.png",
      "Kanan": "/index/images/gill_no_bg.png",
      "Kenny": "/index/images/seb_no_bg.png",
      "Vir": "/index/images/das_no_bg.png",
      "Rock": "/index/images/rock_no_bg.png",
      "Mulaney": "/index/images/mulaney_no_bg.png",
      // Specify the image path for each comic
    };

    d3.csv("standup.csv").then(function (data) {
      const nodes = {};
      const links = [];
      const wordCounts = {};
      word_list = [];

      const nameCounts = {}; // Object to store counts of node names

      data.forEach(function (d) {
        const comic = d.Comic;
        const word = d.Word.toLowerCase(); // Convert word to lowercase for case insensitivity
        const themes = d.Themes.split('/'); // Split themes by '/'

        if (!word_list.includes(word)) {
          word_list.push(word);
        }

        if (word_list.includes(themes)) {
          return;
        }
        // If the word hasn't been encountered for this comic yet, count it
        if (!wordCounts[word]) {
          wordCounts[word] = { count: 0, comics: {} };
        }
        if (!wordCounts[word].comics[comic]) {
          wordCounts[word].comics[comic] = true;
          wordCounts[word].count++;

          // Create nodes for comics
          if (!nodes[comic]) nodes[comic] = { name: comic, type: "comic", image: comicImages[comic] }; // Retrieve the image source for the comic

          // Create nodes for words and connect comics to words
          if (!nodes[word] || nodes[word].type === 'theme') {
            nodes[word] = { name: word, type: "word", count: wordCounts[word].count, themes: themes };

          }

          links.push({ source: comic, target: word });
        }

        themes.forEach(theme => {
          if (!nodes[theme]) {
            nodes[theme] = { name: theme, type: "theme", parent: word };
          }
          links.push({ source: word, target: theme });
        });

        // Increment count for node name
        nameCounts[word] = (nameCounts[word] || 0) + 1;
      });

      // Convert nodes object to array
      const nodesArray = Object.values(nodes);

      const svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

      const simulation = d3.forceSimulation(nodesArray)
        .force("link", d3.forceLink(links).id(d => d.name))
        .force("charge", d3.forceManyBody().strength(-50))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX().strength(0.1).x(width / 2))
        .force("y", d3.forceY().strength(0.1).y(height / 2))
        .force("collision", d3.forceCollide().radius(d => d.type === "comic" ? 20 : 10)); // Adjust radius for collision

      console.log(links)

      const filteredLinks = links.filter(link => link.source.type === 'comic');

      console.log(filteredLinks)

      const link = svg.selectAll("line")
        .data(filteredLinks)
        .enter()
        .append("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6);

      const node = svg.selectAll(".node")
        .data(nodesArray)
        .enter().append("g")
        .attr("class", "node")
        .call(drag(simulation)); // Enable dragging for nodes

      node.filter(d => d.type === "comic")
        .append("image")
        .attr("xlink:href", d => comicImages[d.name]) // Set image source for comic nodes
        .attr("x", -24) // Adjust x position to center image
        .attr("y", -24) // Adjust y position to center image
        .attr("width", 48) // Set image width
        .attr("height", 48); // Set image height

      // Add 'word' nodes
      const wordNodes = node.filter(d => d.type === "word");


      // Append circles for 'word' nodes
      wordNodes.append("circle")
        .attr("r", 8) // Set larger radius for 'word' nodes
        .attr("fill", d => wordCounts[d.name]?.count >= 2 ? "purple" : "steelblue")
        .on("click", function (event, d) {
          // Log the type of the clicked node
          console.log(d.type);
          // Check if the clicked node is a 'word' node
          if (d.type === "word") {
            let themeNames = [];
            const themeLinks = links.filter(link => link.target.type === 'theme' && link.target.parent === d.name);

            themeLinks.forEach(link => {
              themeNames.push(link.target.name);
            });


            const themeNodes = node.filter(node => node.type === "theme" && node.parent === d.name)
              .append("circle")
              .attr("r", 5) // Set larger radius for all words
              .attr("fill", "green")
              .each(function (d, i) {
                const themeName = themeNames[i]; // Get theme name from themeNames array
                d3.select(this.parentNode) // select parent group of the circle
                  .append("text")
                  .text(themeName)
                  .attr('dy', -10)// Adjust vertical alignment of text
                  .attr('dx', 10)
                  .attr('font-size', 12)
                  .attr('text-anchor', 'middle')
                 
              });

            const linkTheme = svg.selectAll("line")
              .data(themeLinks)
              .enter()
              .append("line")
              .attr("stroke", "#999")
              .attr("stroke-opacity", 0.6);

          }
        });

      // Append text for 'word' nodes
      wordNodes.append('text')
        .text(d => d.name)
        .attr('font-size', 12)
        .attr('text-anchor', 'middle')
        .attr('dy', 24); // Adjust vertical alignment of text

      simulation.on("tick", () => {
        link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

        node.attr("transform", d => `translate(${d.x},${d.y})`); // Translate nodes based on simulation data
      });

      function drag(simulation) {
        function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        }

        function dragged(event) {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        }

        function dragended(event) {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        }

        return d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
      }
    });

  // d3.csv("standup.csv").then(function (data) {
  //   const nodes = {};
  //   const links = [];

  //   data.forEach(function (d) {
  //     const comic = d.Comic;
  //     const word = d.Word;
  //     const themes = d.Themes.split("/"); // Split themes by '/'

  //     // Create nodes for comics
  //     if (!nodes[comic]) nodes[comic] = { name: comic, type: "comic" };

  //     // Create nodes for words and connect comics to words
  //     if (!nodes[word]) {
  //       nodes[word] = { name: word, type: "word", themes: themes };
  //     }
  //     links.push({ source: comic, target: word });

  //     // Create nodes for themes and connect words to themes
  //     themes.forEach((theme) => {
  //       if (!nodes[theme]) {
  //         nodes[theme] = { name: theme, type: "theme" };
  //       }
  //       links.push({ source: word, target: theme });
  //     });
  //   });

  //   // Convert nodes object to array
  //   const nodesArray = Object.values(nodes);

  //   // const svg = d3.select("svg"),
  //   //   width = +svg.attr("width"),
  //   //   height = +svg.attr("height");

  //   const simulation = d3
  //     .forceSimulation(nodesArray)
  //     .force(
  //       "link",
  //       d3.forceLink(links).id((d) => d.name)
  //     )
  //     .force("charge", d3.forceManyBody().strength(-50))
  //     .force("center", d3.forceCenter(width / 2, height / 2))
  //     .force(
  //       "x",
  //       d3
  //         .forceX()
  //         .strength(0.1)
  //         .x(width / 2)
  //     )
  //     .force(
  //       "y",
  //       d3
  //         .forceY()
  //         .strength(0.1)
  //         .y(height / 2)
  //     )
  //     .force(
  //       "collision",
  //       d3.forceCollide().radius((d) => (d.type === "comic" ? 20 : 10))
  //     ); // Adjust radius for collision

  //   const link = svg
  //     .selectAll("line")
  //     .data(links)
  //     .enter()
  //     .append("line")
  //     .attr("stroke", "#999")
  //     .attr("stroke-opacity", 0.6);

  //   const node = svg
  //     .selectAll("circle")
  //     .data(nodesArray)
  //     .enter()
  //     .append("circle")
  //     .attr("r", (d) => (d.type === "comic" ? 12 : d.type === "word" ? 8 : 5)) // Different radius for comics, words, and themes
  //     .attr("fill", (d) =>
  //       d.type === "comic"
  //         ? "orange"
  //         : d.type === "word"
  //         ? "steelblue"
  //         : "green"
  //     ) // Different color for comics, words, and themes
  //     .call(drag(simulation));

  //   const label = svg
  //     .selectAll(null)
  //     .data(nodesArray)
  //     .enter()
  //     .append("text")
  //     .text((d) => d.name)
  //     .attr("font-size", 12)
  //     .attr("dx", 15)
  //     .attr("dy", 4)
  //     .attr("fill", "black");

  //   simulation.on("tick", () => {
  //     link
  //       .attr("x1", (d) => d.source.x)
  //       .attr("y1", (d) => d.source.y)
  //       .attr("x2", (d) => d.target.x)
  //       .attr("y2", (d) => d.target.y);

  //     node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

  //     label.attr("x", (d) => d.x).attr("y", (d) => d.y);
  //   });

  //   function drag(simulation) {
  //     function dragstarted(event) {
  //       if (!event.active) simulation.alphaTarget(0.3).restart();
  //       event.subject.fx = event.subject.x;
  //       event.subject.fy = event.subject.y;
  //     }

  //     function dragged(event) {
  //       event.subject.fx = event.x;
  //       event.subject.fy = event.y;
  //     }

  //     function dragended(event) {
  //       if (!event.active) simulation.alphaTarget(0);
  //       event.subject.fx = null;
  //       event.subject.fy = null;
  //     }

  //     return d3
  //       .drag()
  //       .on("start", dragstarted)
  //       .on("drag", dragged)
  //       .on("end", dragended);
  //   }
  // });

  main.append(svg);
}

function createSentencesElement(comedian, text, src) {
  let parentDiv = document.createElement("div");
  parentDiv.style.width = "100%";
  parentDiv.style.height = "30%";
  parentDiv.style.display = "flex";
  parentDiv.style.justifyContent = "space-evenly";
  let sentencesDiv = document.createElement("div");
  let img = document.createElement("img");
  img.src = src;
  img.style.width = "15%";
  img.style.height = "40%";
  img.style.objectFit = "cover";
  img.style.padding = "1rem 1rem";
  parentDiv.append(img);

  let sentences = text.split("\n");
  sentences.forEach((sentence) => {
    let sentenceElement = document.createElement("div");
    let wordsToReplace = ["tree"];
    if (comedian === "gill") {
      wordsToReplace = data[0].wordsToReplace;
    } else if (comedian === "das") {
      wordsToReplace = data[1].wordsToReplace;
    } else if (comedian === "seb") {
      wordsToReplace = data[2].wordsToReplace;
    } else if (comedian === "mulaney") {
      wordsToReplace = data[3].wordsToReplace;
    } else if (comedian === "berlant") {
      wordsToReplace = data[4].wordsToReplace;
    } else {
      wordsToReplace = data[5].wordsToReplace;
    }

    wordsToReplace.forEach((word) => {
      let boldSentence = sentence.replace(
        new RegExp(`\\b${word}\\b`, "g"),
        `<b style='color:orange;'>${word}</b>`
      );
      sentence = boldSentence;
    });

    sentenceElement.innerHTML = sentence;
    sentencesDiv.appendChild(sentenceElement);
  });

  sentencesDiv.style.width = "87%";
  sentencesDiv.style.fontSize = "16px";
  sentencesDiv.style.height = "100%";
  sentencesDiv.style.color = "#7d7d7d";
  sentencesDiv.style.borderBottom = "1px solid #8a8a8a";
  sentencesDiv.style.position = "relative";
  sentencesDiv.style.overflow = "scroll";
  sentencesDiv.style.zIndex = 0;
  sentencesDiv.appendChild(createGradientOverlay());
  parentDiv.appendChild(sentencesDiv);
  return parentDiv;
}

function sentences() {
  clearMainDiv();
  let render_div = document.getElementById("main");
  render_div.className = "figureContainer";

  let col_ind = document.createElement("div");
  col_ind.className = "textColumn";
  let col_am = document.createElement("div");
  col_am.className = "textColumn";

  let tr_gill = createSentencesElement(
    "gill",
    data[0].sentences,
    data[0].image
  );
  let tr_das = createSentencesElement("das", data[1].sentences, data[1].image);
  let tr_seb = createSentencesElement("seb", data[2].sentences, data[2].image);
  col_ind.append(tr_gill, tr_das, tr_seb);

  let tr_mul = createSentencesElement(
    "mulaney",
    data[3].sentences,
    data[3].image
  );
  let tr_ber = createSentencesElement(
    "berlant",
    data[4].sentences,
    data[4].image
  );
  let tr_roc = createSentencesElement("rock", data[5].sentences, data[5].image);
  col_am.append(tr_mul, tr_ber, tr_roc);
  render_div.append(col_ind, col_am);
}

function openTab(evt, tabName, comedian) {
  console.log(tabName);
  let text = data.find((item) => item.comedian === comedian);
  let context = text.context.find((item) => item.theme === tabName);
  console.log(context);
  let i, tabContent, tablinks;
  tabcontent = document.getElementsByName(comedian + " content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabContent = document.getElementById(comedian + " " + tabName);

  context.subtext.forEach((subtext) => {
    tabContent.innerHTML += `<div style="color: orange;font-weight:600;">${subtext}</div>`;
  });
  tabContent.innerHTML += `<br/>`;
  context.jokes.forEach((joke) => {
    text.wordsToReplace.forEach((word) => {
      let boldJoke = joke.replace(
        new RegExp(`\\b${word}\\b`, "g"),
        `<b style='color:#FFFFFF;'>${word}</b>`
      );
      joke = boldJoke;
    });
    tabContent.innerHTML += `<div>${joke}</div>`;
  });

  tablinks = document.getElementsByName(comedian + " tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(comedian + " " + tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function createContextElement(comedian, context, src) {
  let parentDiv = document.createElement("div");
  parentDiv.style.width = "100%";
  parentDiv.style.height = "30%";
  parentDiv.style.display = "flex";
  parentDiv.style.justifyContent = "space-evenly";
  let sentencesDiv = document.createElement("div");
  let tabs = document.createElement("div");
  tabs.id = "tabs";
  let img = document.createElement("img");
  img.src = src;
  img.style.width = "15%";
  img.style.height = "40%";
  img.style.objectFit = "cover";
  img.style.padding = "1rem 1rem";
  parentDiv.append(img);

  for (i = 0; i < context.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = `<button name='${
      comedian + " tab"
    }' class="tablinks" id='${
      context[i].theme + " button" + " " + comedian
    }' onClick="openTab(event, '${context[i].theme}', '${comedian}')"><b>${
      context[i].theme
    }</b></button>`;
    tabs.appendChild(button);
  }

  sentencesDiv.appendChild(tabs);

  for (i = 0; i < context.length; i++) {
    let content = document.createElement("div");
    content.innerHTML = `<div name='${comedian + " content"}' id='${
      comedian + " " + context[i].theme
    }' class="tabcontent"></div>`;
    sentencesDiv.appendChild(content);
  }

  sentencesDiv.style.width = "87%";
  sentencesDiv.style.fontSize = "16px";
  sentencesDiv.style.height = "100%";
  sentencesDiv.style.color = "#7d7d7d";
  sentencesDiv.style.borderBottom = "1px solid #8a8a8a";
  sentencesDiv.style.position = "relative";
  sentencesDiv.style.overflow = "scroll";
  sentencesDiv.style.zIndex = 0;
  sentencesDiv.appendChild(createGradientOverlay());
  parentDiv.appendChild(sentencesDiv);
  return parentDiv;
}

function context() {
  clearMainDiv();
  let render_div = document.getElementById("main");
  render_div.className = "figureContainer";

  let col_ind = document.createElement("div");
  col_ind.className = "textColumn";
  let col_am = document.createElement("div");
  col_am.className = "textColumn";

  let tr_gill = createContextElement(
    "Kanan Gill",
    data[0].context,
    data[0].image
  );
  let tr_das = createContextElement("Vir Das", data[1].context, data[1].image);
  let tr_seb = createContextElement(
    "Kenny Sebastian",
    data[2].context,
    data[2].image
  );
  col_ind.append(tr_gill, tr_das, tr_seb);

  let tr_mul = createContextElement(
    "John Mulaney",
    data[3].context,
    data[3].image
  );
  let tr_ber = createContextElement(
    "Kate Berlant",
    data[4].context,
    data[4].image
  );
  let tr_roc = createContextElement(
    "Chris Rock",
    data[5].context,
    data[5].image
  );
  col_am.append(tr_mul, tr_ber, tr_roc);
  render_div.append(col_ind, col_am);
  document.getElementById("camera button Kate Berlant").click();
  document.getElementById("horse button John Mulaney").click();
  document.getElementById("friend button Kanan Gill").click();
  document.getElementById("kid button Chris Rock").click();
  document.getElementById("Indian button Vir Das").click();
  document.getElementById("friend button Kenny Sebastian").click();
}
