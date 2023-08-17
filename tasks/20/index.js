// const token =
//   "685cb537685cb537685cb537916b49e1446685c685cb5370c87266d7afa4818afeb48c3";
// const publicId = "-179664673";
// const version = 5.131;
// const count = 10;
// let offset = 0;

// const script = document.createElement("script");
// script.src = `https://api.vk.com/method/wall.get?owner_id=${publicId}&access_token=${token}&offset=${offset}&count=${count}&callback=getWallData&v=${version}`;
// document.getElementsByTagName("head")[0].appendChild(script);

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

// const getWallData = async (result) => {
//   // const posts = await result.response.items;

//   // createPosts(posts);
// };

// let options = {
//   root: document.querySelector("#posts"),
//   rootMargin: "0px",
//   threshold: 1.0,
// };

// let callback = (entries, observer) => {
//   if (entries[0].isIntersecting) {
//     console.log("test");
//     offset += 10;
//     getWallData();
//   }
// };

// let observer = new IntersectionObserver(callback, options);
// let target = document.querySelector("#loader");
// observer.observe(target);

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer 685cb537685cb537685cb537916b49e1446685c685cb5370c87266d7afa4818afeb48c3"
);

var raw = "";

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch(
  "https://api.vk.com/method/wall.get?owner_id=-179664673&offset=0&count=10&v=5.131",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
