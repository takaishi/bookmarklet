javascript:(()=>{var%20o%3De%3D%3Enew%20Promise((t%3D%3Ewindow.setTimeout(t%2Ce)))%3B(async()%3D%3E%7Blet%20e%3Ddocument.getElementById(%22chatframe%22)%3Bif(!e)return%3Blet%20t%3De.contentWindow.document.querySelector('%5Baria-label%3D%22Live%20Chat%20mode%20selection%22%5D')%3Bif(!t)return%3Bt.click()%2Cawait%20o(300)%3Blet%20n%3De.contentWindow.document.querySelector(%22tp-yt-paper-listbox%20a%22)%3B!n%7C%7Cn.click()%7D)()%3B})()