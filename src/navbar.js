const navbar = document.createElement("div");
const elements=document.createElement("div");

for (const element of elements) {
    const a = document.createElement("a"); 
    a.href="#"+section.id;
    navbar.appendChild(a);
}

navbar.appendChild(elements);
