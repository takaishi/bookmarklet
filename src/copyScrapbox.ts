/**
 * @title Copy document url and title for scrapbox
 * @description Copy the value of `<url> and `<title>` element to clipboard for scrapbox
 */

const titleElement = document.querySelector("title")
const url = decodeURIComponent(window.location.href)
const title = titleElement?.innerText

;(async () => {
  if (title && url) {
    const item = `[${title} ${url}]`
    await window.navigator.clipboard.writeText(item)
  }
})().catch((err) => console.error(err))
