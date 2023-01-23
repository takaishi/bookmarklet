/**
 * @title Copy url and title for podcast description
 * @description Copy the value of `<url>` and `<title>` element to clipboard for podcast description
 */

const titleElement = document.querySelector("title")
const url = decodeURIComponent(window.location.href)
const title = titleElement?.innerText

;(async () => {
  if (title && url) {
    const item = [title, url].join(" ")
    await window.navigator.clipboard.writeText(item)
  }
})().catch((err) => console.error(err))
