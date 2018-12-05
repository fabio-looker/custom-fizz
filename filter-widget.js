looker.plugins.visualizations.add({
	create: function(element, config){
		element.innerHTML = `
			<iframe id='push' style='display:none' src='https://fabio-looker.github.io/custom-fizz/push.html'></iframe>
			<input id='input' type='text' />
			`
		document.querySelector('#input').addEventListener('onchange',function(evt){
			console.log(evt.target.value)
			})
		},
	updateAsync: function(data, element, config, queryResponse, details, doneRendering){
		
		doneRendering()
		}
})