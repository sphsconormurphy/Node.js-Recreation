(function(){
  const doc = document;
  let div = doc.querySelector("#banner");
  div.addEventListener("mouseover", function(){
      div.style.border="10px solid green";
  });
  div.addEventListener("mouseout", function(){
      div.style.border ="10 px solid transparent";
  });

})();

(function(){
  const doc = document;
  let div = doc.querySelector("#left");
  div.addEventListener("mouseover", function(){
      div.style.opacity="1";
  });
  div.addEventListener("mouseout", function(){
      div.style.opacity="0.5";
  });

})();

(function(){
  const doc = document;
  let div = doc.querySelector("#right");
  div.addEventListener("mouseover", function(){
      div.style.opacity="1";
  });
  div.addEventListener("mouseout", function(){
      div.style.opacity="0.5";
  });

})();

