const changeTitle = ()=> window.document.title = window.document.title.replace(/(\(\d+)\s封私信\)\s/g, '');
setTimeout(changeTitle, 1000);
changeTitle;