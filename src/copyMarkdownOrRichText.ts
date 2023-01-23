/**
 * @title Copy document url and title as markdown or rich text
 * @description Copy the value of `<url>` and `<title>` element to clipboard as markdown or rich text
 */

const titleElement = document.querySelector("title")
const url = decodeURIComponent(window.location.href)
const title = titleElement?.innerText

;(async () => {
  if (title && url) {
    const item = new ClipboardItem({
      "text/plain": new Blob([`[${title}](${decodeURIComponent(url)})`], {
        type: "text/plain",
      }),
      "text/html": new Blob(
        [`<a href="${decodeURIComponent(url)}">${title}</a>`],
        { type: "text/html" }
      ),
    })
    await window.navigator.clipboard.write([item])
  }
})().catch((err) => console.error(err))
