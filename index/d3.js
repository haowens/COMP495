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
    clearMainDiv();
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

function createTranscriptElement(text) {
    let transcript = document.createElement("div");
    transcript.innerHTML = `${text}`;
    transcript.style.width = "100%";
    transcript.style.fontSize = "16px";
    transcript.style.height = "33.4%";
    transcript.style.border = "1px solid #434145"
    transcript.style.color = "#989799";
    transcript.style.position = "relative";
    transcript.style.overflow = "hidden";
    transcript.style.zIndex = 0;
    transcript.appendChild(createGradientOverlay());
    return transcript;
}

function transcripts() {
    clearMainDiv();
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

    let tr_gill = createTranscriptElement("Good evening. Hello. How are you? It's great to be back in India. I've been traveling the world a lot this year, so it's good to be back in Bangalore, where we have no need for small talk. Not a single-- The best thing about India is you can look someone you don't know in the eyes and just fucking walk right past them. You don't deserve interaction. Not so the case in other countries. I was in the North America getting a coffee, which is the national sport. And it's a whole-- When you walk in, you have to first say, Hi. How are you? I'm good, thanks. How are you? I'm good as well. Hot outside, isn't it? It is hot. Then you can begin speaking. In this much time, the population of India has doubled. Don't do small talk. We do only big talk. Talk to an aunty. Hello, beta. Hello. What is your yearly salary? Haven't been away that long. Came back. Everything's different. All the airports now are silent airports. Yeah, they don't make any announcements at the airport anymore. Reason I know that is because they made an announcement... to say that there will not be... announcements. Ladies and gentlemen, we just want to let you know that this will not happen. Except for this one... which we will do every three minutes. They do this to prevent noise pollution. [snickers] India's biggest problem. Country's running out of water. They're, At ");
    let tr_das = createTranscriptElement("I lost 80% of my mind. It is very freeing. You should see the look on your faces right now, by the way. Oh! Good evening, San Francisco. Are you guys excited, yeah? All right. Well, my name is Vir Das. We\u2019re gonna have such a good time tonight. I\u2019m so excited. It\u2019s gonna be delightful. Oh, this is how I talk now. I just thought it was time to really embrace my roots, you know, and to make my comedy more authentically Indian. And really, what could be more Indian than a fake American accent? I don\u2019t think you understand. I have an opportunity to make history tonight, guys. I can. I can be the first ever Indian who comes to California\u2026 and then leaves. That\u2019s never happened before. Because you guys are sticking around. Until they kick you out. Which, going by the news, is about three weeks from now. Now, I used to work in America in the year 2002. It didn\u2019t go very well, so I left for browner pastures. And then, honestly, I didn\u2019t think about you guys for 15 years. Because, honestly, there is nothing that you can get in America that I can\u2019t get in India. And then my government banned beef and I was like, 'You know, an international career might not be such a bad thing!' Make no mistake. I\u2019m just here for the beef. It\u2019s been a good couple of years for me. I went on my first world tour. I saw the entire world. I went\u2026 Yeah. Would you like to know what 33 countries in the world have in common? \u2013 Would you like to know, yeah? \u2013 Yeah! Two things. Number one, I have now masturbated in all 33 of those countries. Thank you. I\u2019m like the Genghis Khan of the Holiday Inn chain. My DNA is everywhere. If your hotel has a memory foam mattress, I\u2019m the memory. And two, no matter where I went in the entire world, people said the same thing. They said, 'Oh, my God, you\u2019re Indian? I love Indian people. They\u2019re, like, so smart. Indian people, you\u2019re, like,");
    let tr_seb = createTranscriptElement("Oh my God. Thank you so much Mumbai. Thank you. Thank you. Really. How are you guys doing? Oh shit. Let\u2019s do this. Come on guys. It\u2019s the Royal Opera House, guys. The Royal Opera House. Yeah, it\u2019s a big deal. I know none of you know the history but it\u2019s a big deal. I took bath twice for this. Is that even possible? Apparently it is. Yes. The Royal Opera House, the great deal and it\u2019s a big occasion because I\u2019ve just turned 26. Yeah. I have. I don\u2019t know why people cheer for that. Because they\u2019re like, \u201cHey, he\u2019s going to die soon. Yaay!\u201d Yea, I am going to die soon. Yes, it\u2019s crazy. Like 26\u2026 You won\u2019t believe it, I was 19 once. It\u2019s nice, like at 26. You know, it\u2019s kind of difficult. I don\u2019t dance as much. You know. At 19, I used to dance the best. Because at 19 you don\u2019t care about anyone else. That\u2019s the best way to dance. Dance like no one\u2019s watching applies for women who are great at dancing. Men should stop. Please. Because for men, anything which is not standing is dancing. It\u2019s not a good enough bar, okay. I\u2019m like, \u201cBro, there is music. Dance, no.\u201d \u201cBro, I\u2019m dancing.\u201d That\u2019s not dancing guys. It is just so painful to watch. But at 19 when you go to a club, it\u2019s great. You\u2019re already having fun because you\u2019re already high. Yeah, right? Because at 19 when you go out, one guy will have a great plan, \u201cBro, why are we spending 400 bucks on drinks in the club? When we can drink on the way, bro.\u201d What do you want to drink? \u201cWhatever gets me high fast.\u201d It\u2019s the best. You are just like neat,");
    col_ind.append(tr_gill, tr_das, tr_seb);

    let tr_mul = createTranscriptElement("Welcome to Radio City Music Hall. It’s time. Any questions? No. Walk with me. Good evening. Hi, I’m John Mulaney, nice to meet you. Jon Brion, ladies and gentlemen. Thank you for coming to see me at Radio City Music Hall. I love to play venues where if the guy that built the venue could see me on the stage, he would be a little bit bummed about it. Look at this. This is so much nicer than what I’m about to do. It’s really… It’s really tragic. What a historic and beautiful and deeply haunted building this is. I keep walking through cold spots being like, “I wonder who that used to be.” I’ve never seen a ghost, by the way. I asked my mom if she’d ever seen a ghost. That’s where we’re at conversation-wise in our relationship as a mother and son, because I’m 35 and I don’t have any children to talk about and she doesn’t understand my career. So I was home for Christmas and we were just eating Triscuits in silence and I was staring at the floor and I was like, “Well, here goes nothing. ‘You ever seen a ghost? And my mom said, “Yes.” Which is the best answer. She said, “I never told you this before but our house, when you were growing up, was haunted.” I said, “Say more right now!” She said, “Outside you and your brother’s room, I used to see the ghost of a little girl in a Victorian nightgown and then she would walk down the hallway and then she would evaporate.” And then my dad said, “Let’s change the subject!” And I think he was just doing that dad-thing of, like, “This is a weird topic and I want to talk about a book I read about World War II.” But the way it came off was that he definitely killed that little girl. “Let’s change the subject! Why are we even talking about Penelope… or whatever her name was? I didn’t kill her! Whoever did kill her only did it to protect her from this world.");
    let tr_ber = createTranscriptElement("Whoa! Okay, yeah. Good. Okay, don’t embarrass yourself, okay. Ohh, the expectations. Crushing, I would argue. Absolutely crushing, debilitating in every way. I’m gonna move this, ’cause I’m so thin I’ll disappear behind it, so… And then you’ll be like, 'Is that… Is that Kate 'or is that Kate? Right? 'I don’t know who to watch. Is that the comedian, or is that the, uh, the mic stand?' So… So, the cameras. Big night for me. Yeah, really big. So there’s a camera, there’s a camera. Huh! You know, they’re everywhere. They can see you. We can see them. It’s an inherently false, um, moment, right? It’s a little bit scary. They’re… they’re filming. They’re not actually filming. They are, but it’s… Is it… is the camera inherently misogynist? Yes, right, so… Am I… Am I… Do I feel attacked? Yeah. Right, it’s very… Even the language. You know, “We’re shooting her. We shot her.” “We got her. We have her.” Right, it’s a… You know, I feel… Is it scary? Yeah, you know… Is what I do brave? Yeah, you know… It absolutely is. But I was, of course, forced into comedy at a very young age just because of my bone structure. But I did… I chose to stay in it for this, the directness. Right? And I can reach out and I can actually… I’m changing lives, and she’s crying. She’s crying. It’s me, sweetie. You can touch, yeah, yeah. Very sweet. No, that was very sweet. That was very sweet. She was looking up at me, and she was like, “Uh! I grew up with you in my home. “How can… Am I in my living room? What’s going on?” And her friend was like, “Go for it, is the overflow hidden now?? It is god bless. hope someone catches this.");
    let tr_roc = createTranscriptElement("Yeah. Please. Oh, sit down. Sit yo asses down. Please let me get on with the show. It’s nice to be here. Brooklyn. Here’s my question. You would think… You would think… You would think the cops would occasionally shoot a white kid… just to make it look good. You would think that every couple of months they’d look at their dead n*gga calendar and go… “Oh, my God, we’re up to 16. We gotta shoot a white kid quick.” “Uh, which one?” “The first one you see singing Cardi B.” That’s right. I mean, honestly, I wanna live in a world… with real equality. I wanna live in a world… where an equal amount of white kids are shot every month. An equal world. I wanna see white mothers on TV crying. Standing next to Al Sharpton. Talking about, “We need justice for Chad. We need justice for Chad. He was just coming home from racquetball practice.” I know some people like, “Come on, Chris, man. You go too hard on the cops, man. You’re a celebrity. I’m sure they let you go. I’m sure they’re nice to you, man. You a celebrity.” Yeah, I’m famous, you know. But I’m not, like, Michael Jackson, famous. I’m not famous from miles away. Like, my fame kicks in right about here. You know? When the cops see me walking down the street, they’re like, “N*gga, n*gga, n*gga, n*gga, n*gga… Hey, that’s Chris Rock! Man, you are funny, man. I love Pootie Tang, man.” It’s weird, man. It’s weird. You know, this whole thing with the cops, man, ’cause… You know, as a black man, especially a grown black man, I have a weird relationship with the cops, man. Like, on one hand I’m a black man so I’m like, “Fuck the police.” And on the other hand, I own property. You know, if somebody comes and breaks in my house, I’m not calling the crips. Uh, yo, crips…");
    col_am.append(tr_mul, tr_ber, tr_roc);
    render_div.append(col_ind, col_am);
}

function createGradientOverlay() {
    let gradientOverlay = document.createElement("div");
    gradientOverlay.style.position = "absolute";
    gradientOverlay.style.bottom = 0;
    gradientOverlay.style.left = 0;
    gradientOverlay.style.width = "100%";
    gradientOverlay.style.height = "40%";
    gradientOverlay.style.zIndex = 1;
    gradientOverlay.style.background = "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.35))";
    return gradientOverlay;
}

function themes() {
    clearMainDiv();
}
