window.onload = function() { 
  var data = ['apple', 'orange', 'banana'];
  var input = document.getElementById('autocomplete');
  var suggestions = document.getElementById('suggestions');
  suggestions.style.display = "none";
  var suggestion = null;
  
  input.addEventListener('keyup', function() {
    suggestions.innerHTML = '';
    suggestions.style.display = "block";
    if (input.value === '') {
      suggestions.style.display = "none";
      return;
    }   
    for (var ind=0; ind<data.length; ind++) {
      if (data[ind].indexOf(input.value.toLowerCase()) !== -1) {
        suggestion = document.createElement("li");
        suggestion.appendChild(document.createTextNode(data[ind]));
        suggestions.appendChild(suggestion);
      }

      if (suggestion) {
        suggestion.addEventListener('click', function(){
          input.value = this.textContent;
          suggestions.style.display = "none";
        });
      }
    }
  });
};