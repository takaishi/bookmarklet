javascript:(()=>{var%20o%3Ddocument.querySelector(%22video%22)%3Bif(o)%7Blet%20e%3DMath.floor(o.currentTime)%2Ct%3Dwindow.location.href%2Cr%3Dnew%20URL(t)%3Br.searchParams.set(%22t%22%2CString(e)%2B%22s%22)%2Cwindow.history.pushState(%7B%7D%2C%22%22%2Cr)%7D})()