
const users = [
  {
    id: 1,
    name: "Aarav Mehta",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    bio: "Frontend developer who loves building clean UI and interactive experiences.",
  },
  {
    id: 2,
    name: "Riya Sharma",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    bio: "UI/UX designer passionate about user-centered digital products.",
  },
  {
    id: 3,
    name: "Kabir Patel",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    bio: "Full-stack MERN developer and open-source contributor.",
  },
  {
    id: 4,
    name: "Ananya Verma",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600",
    bio: "Content creator and social media strategist.",
  },
  {
    id: 5,
    name: "Vivaan Singh",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    bio: "Backend engineer specializing in Node.js and microservices.",
  },
  {
    id: 6,
    name: "Ishita Desai",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    bio: "Creative graphic designer with a love for branding.",
  },
  {
    id: 7,
    name: "Arjun Rao",
    pic: "https://thepicturesdp.in/wp-content/uploads/2025/07/profile-picture-girls-6.jpg",
    bio: "Tech entrepreneur building SaaS platforms.",
  },
  {
    id: 8,
    name: "Meera Nair",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    bio: "Tech entrepreneur building SaaS platforms.",

  }
];

let card_container = document.querySelector(".card-container")
  function showUser(arr){

    arr.forEach(user => {
        console.log(user)
        // create card
  let card = document.createElement("div");
card.classList.add("card")
  let blur_div = document.createElement("div");
  blur_div.classList.add("blur")
  let content = document.createElement("div");
 content.classList.add("content")

  let img = document.createElement("img");
   img.classList.add("img")
img.setAttribute("src",user.pic);

  let h2 = document.createElement("h2");
  h2.textContent = user.name;
  let p = document.createElement("p");
  p.textContent = user.bio;
  p.classList.add("card-text")

  //add into html
  card_container.appendChild(card)
  
  card.appendChild(img)
  card.appendChild(blur_div)
  card.appendChild(content)
  
  content.appendChild(h2)
  content.appendChild(p)
  
    });
  }
  showUser(users); // user - agrs
  
  let bar = document.querySelector(".bar")

  bar.addEventListener("input", ()=>{
    console.log(bar.value)
     let new_user = users.filter((users)=>{
            return users.name.startsWith(bar.value.charAt(0).toUpperCase());
    });
    card_container.innerHTML = "";

    showUser(new_user);
  });
