
async function getData(url, cb = () => {}) {
  await fetch(url)
    .then(res => res.json())
    .then(data => cb(data))
}

function getParam(param){
  const urlParam = new URLSearchParams(window.location.search);
  return urlParam.get(param)
}
