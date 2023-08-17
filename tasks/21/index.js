const token =
  "86f1c5a586f1c5a586f1c5a5a085e49fd7886f186f1c5a5e22ffb47eceb7c0de4757c76";
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

const showLSMemory = () => {};

// const getPosts = async () => {
//   // const response = await fetch(
//   //   `https://api.vk.com/method/wall.get?owner_id=${publicId}&offset=${offset}&count=${count}&v=${version}&access_token=${token}`
//   // );

//   // const posts = await response.json();

//   console.log("Сейчас был запрос к VK API");
// };

const createPostText = (text) => {
  let textContent = null;
  let textLink = null;
  let textHashtags = null;

  const textArr = text.split("\n");

  textArr.forEach((text) => {
    if (text.startsWith("https://")) {
      textLink = text;
    } else if (text.startsWith("#")) {
      textHashtags = text;
    }
  });

  textContent = `${textArr
    .filter((x) => !x.startsWith("#"))
    .filter((x) => !x.startsWith("https://"))
    .join("<br>")}`;

  return `
    ${
      textContent
        ? `<p class="posts__item-text">
            ${textContent}
          </p>`
        : ""
    }
    ${
      textLink
        ? `<a
              href="${textLink}"
              class="posts__item-link"
            >
              ${textLink}
            </a>`
        : ""
    }
    ${
      textHashtags
        ? `
          <div class="posts__item-hastags">
            ${textHashtags
              .split(" ")
              .map(
                (hashtag) => `
                <a
                  href="https://vk.com/feed?section=search&q=%23${hashtag.slice(
                    1,
                    -1
                  )}"
                  class="posts__item-hashtag"
                >
                  ${hashtag}
                </a>`
              )
              .join(" ")}
          </div>`
        : ""
    }
  `;
};

const getImageURL = (sizes) => {
  if (!sizes) {
    return "";
  }

  let url = null;
  sizes.forEach((size) => {
    if (size.width >= 552) {
      url = size.url;
      return;
    }
  });

  if (!url) {
    url = sizes.sort((x, y) => y.width - x.width)[0].url;
  }

  return `<img
    class="posts__item-poster"
    src="${url}"
    alt=""
  />`;
};

const createPost = (post) => {
  const element = document.createElement("li");

  const html = `
    <article class="posts__item">
      <div class="posts__item-text-wrap">
        ${createPostText(post.text)}
      </div>
      ${getImageURL(post?.attachments?.[0]?.photo?.sizes)}
      <div class="posts__item-stat">
        <span class="posts__item-stat--like" id="like">
          Лайки: ${post.likes.count}
        </span>
        <span class="posts__item-stat--comment" id="comment">
          Комменты: ${post.comments.count}
        </span>
      </div>
    </article>
  `;
  element.innerHTML = html;

  return element;
};

const createPosts = (posts) => {
  const root = document.querySelector("#posts-list");
  posts.forEach((post) => root.append(createPost(post)));
};

const renderPosts = () => {
  VK.Api.call(
    "wall.get",
    {
      owner_id: publicId,
      count: count,
      offset: offset,
      access_token: token,
      v: 5.131,
    },
    async (data) => {
      if (data.response) {
        const posts = data.response.items;
        offset += 10;
        console.log(savedPosts);
        createPosts([...savedPosts, ...posts]);
        saveData(offset, posts);
      }
    }
  );

  console.log("Сейчас был запрос к VK API");
};

let intersectionOption = {
  root: document.querySelector("#posts"),
  rootMargin: "0px",
  threshold: 1.0,
};

const intersectionCallback = async (entries) => {
  if (entries[0].isIntersecting) {
    intersectingCount += 1;

    if (intersectingCount === 1 && isSavedPostsEmpty) {
      renderPosts();
    } else if (intersectingCount === 1 && !isSavedPostsEmpty) {
      createPosts(savedPosts);
    } else {
      renderPosts();
    }
  }
};

let observer = new IntersectionObserver(
  intersectionCallback,
  intersectionOption
);
let target = document.querySelector("#loader");
observer.observe(target);
