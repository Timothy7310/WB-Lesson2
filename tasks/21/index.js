const token =
  "685cb537685cb537685cb537916b49e1446685c685cb5370c87266d7afa4818afeb48c3";
const publicId = "-179664673";
const version = 5.131;
const count = 10;
let offset = +localStorage.getItem("offset") ?? 0;
let savedPosts = JSON.parse(localStorage.getItem("posts")) ?? [];
let intersectingCount = 0;
let isSavedPostsEmpty = savedPosts.length === 0;

const saveData = (offset, posts) => {
  const oldPosts = JSON.parse(localStorage.getItem("posts")) ?? [];
  const newPosts = JSON.stringify([...oldPosts, ...posts]);

  localStorage.setItem("offset", offset);
  localStorage.setItem("posts", newPosts);
};

VK.Api.call("users.get", { user_ids: 6492, v: `${5.131}` }, function (r) {
  if (r.response) {
    alert("Привет, " + r.response[0].first_name);
  }
});

const showLSMemory = () => {};

// const getPosts = async () => {
//   const response = await fetch(
//     `https://api.vk.com/method/wall.get?owner_id=${publicId}&offset=${offset}&count=${count}&v=${version}&access_token=${token}`
//   );

//   const posts = await response.json();

//   console.log("Сейчас был запрос к VK API");

//   return posts.response.items;
// };

// const createPostText = (text) => {
//   let textContent = null;
//   let textLink = null;
//   let textHashtags = null;

//   const textArr = text.split("\n");

//   textArr.forEach((text) => {
//     if (text.startsWith("https://")) {
//       textLink = text;
//     } else if (text.startsWith("#")) {
//       textHashtags = text;
//     }
//   });

//   textContent = `${textArr
//     .filter((x) => !x.startsWith("#"))
//     .filter((x) => !x.startsWith("https://"))
//     .join("<br>")}`;

//   return `
//     ${
//       textContent
//         ? `<p class="posts__item-text">
//             ${textContent}
//           </p>`
//         : ""
//     }
//     ${
//       textLink
//         ? `<a
//               href="${textLink}"
//               class="posts__item-link"
//             >
//               ${textLink}
//             </a>`
//         : ""
//     }
//     ${
//       textHashtags
//         ? `
//           <div class="posts__item-hastags">
//             ${textHashtags
//               .split(" ")
//               .map(
//                 (hashtag) => `
//                 <a
//                   href="https://vk.com/feed?section=search&q=%23${hashtag.slice(
//                     1,
//                     -1
//                   )}"
//                   class="posts__item-hashtag"
//                 >
//                   ${hashtag}
//                 </a>`
//               )
//               .join(" ")}
//           </div>`
//         : ""
//     }
//   `;
// };

// const getImageURL = (sizes) => {
//   if (!sizes) {
//     return "";
//   }

//   let url = null;
//   sizes.forEach((size) => {
//     if (size.width >= 552) {
//       url = size.url;
//       return;
//     }
//   });

//   if (!url) {
//     url = sizes.sort((x, y) => y.width - x.width)[0].url;
//   }

//   return `<img
//     class="posts__item-poster"
//     src="${url}"
//     alt=""
//   />`;
// };

// const createPost = (post) => {
//   const element = document.createElement("li");

//   const html = `
//     <article class="posts__item">
//       <div class="posts__item-text-wrap">
//         ${createPostText(post.text)}
//       </div>
//       ${getImageURL(post?.attachments?.[0]?.photo?.sizes)}
//       <div class="posts__item-stat">
//         <span class="posts__item-stat--like" id="like">
//           Лайки: ${post.likes.count}
//         </span>
//         <span class="posts__item-stat--comment" id="comment">
//           Комменты: ${post.comments.count}
//         </span>
//       </div>
//     </article>
//   `;
//   element.innerHTML = html;

//   return element;
// };

// const createPosts = (posts) => {
//   const root = document.querySelector("#posts-list");
//   posts.forEach((post) => root.append(createPost(post)));
// };

// const renderPosts = async () => {
//   const posts = await getPosts();
//   createPosts(posts);
// };

// let intersectionOption = {
//   root: document.querySelector("#posts"),
//   rootMargin: "0px",
//   threshold: 1.0,
// };

// const intersectionCallback = async (entries) => {
//   if (entries[0].isIntersecting) {
//     intersectingCount += 1;

//     if (intersectingCount === 1 && isSavedPostsEmpty) {
//       const posts = await getPosts();
//       offset += 10;
//       createPosts(posts);
//       saveData(offset, posts);
//     } else if (intersectingCount === 1 && !isSavedPostsEmpty) {
//       createPosts(savedPosts);
//     } else {
//       const posts = await getPosts();
//       offset += 10;

//       createPosts([...savedPosts, ...posts]);
//       saveData(offset, posts);
//     }
//   }
// };

// let observer = new IntersectionObserver(
//   intersectionCallback,
//   intersectionOption
// );
// let target = document.querySelector("#loader");
// observer.observe(target);
