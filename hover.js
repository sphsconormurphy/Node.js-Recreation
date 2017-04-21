(function(){
  const doc = document;
  let div = doc.querySelector("banner");
  div.addEventListener("mouseover", function(){
      div.style.border="10px solid green";
  });
  div.addEventListener("mouseout", function(){
      div.style.border ="10 px solid transparent";
  });

})();

(function(){
  const doc = document;
  let div = doc.querySelector("bottom div");
  div.addEventListener("mouseover", function(){
      div.style.backgroundColor="green";
  });
  div.addEventListener("mouseout", function(){
      div.style.backgroundColor ="transparent";
  });

})();
