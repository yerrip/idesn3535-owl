/// GET PARAMETER BY NAME

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

/// TEMPLATE ENGINE

 const testString = "<div>I own a {{animal}}.</div>";

const testContext = {animal: "dog", age: 7};

function replaceString(string, key, value) {
	const searchTerm = "{{" + key + "}}"
	return string.replace(searchTerm, value);
}

function processTemplate(template, context) {
	Object.keys(context).forEach(function(key) {
		template = replaceString(template, key, context[key])
	})

	return template;

}

function getTemplate(template, context) {
	return $(processTemplate(template, context));
}