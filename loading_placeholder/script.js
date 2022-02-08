const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img
    src="https://images.unsplash.com/photo-1644250471993-ea12b3e8703c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    />`;
    title.innerHTML = `Lorem ipsum dolor sit amet.`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Odit, voluptate?`;
    profile_img.innerHTML = `<img
    src="https://randomuser.me/api/portraits/men/46.jpg"
    alt=""
    srcset=""
    />`;
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020';

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}