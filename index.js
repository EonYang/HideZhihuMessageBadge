const changeTitle = ()=> window.document.title = window.document.title.replace(/(\(\d+)\s封私信\)\s/g, '');
setInterval(changeTitle, 5000);
setTimeout(changeTitle, 1000);