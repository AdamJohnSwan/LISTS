//gets rid of tags, links, images, and removes stopwords
function clean_text(text) {
	return text;
}

//gets list of stopwords in text
function get_stopwords(text) {
	var words = text.split(' ');
	var stopwords_in_words = [];
	for(var w = 0; w < words.length; w++) {
		check_stop = stopwords.indexOf(words[w])
		if( check_stop > -1) {
			stopwords_in_words.push(stopwords[check_stop]);
		}
	}
	return stopwords_in_words;
}

function link_density(text) {
	var full_wordcount = text.innerHTML.length;
	var links = text.getElementsByTagName('a');
	for(var x = 0; x < links.length; x++) {
		var wordcount = links[x].innerHTML.length;
	}
	return full_wordcount / wordcount;
}

//get list of nodes that might or might not be the article text
function get_nodes(html) {
	var elements = ['p', 'pre', 'td'];
	var nodes = [];
	for(var i = 0; i < elements.length; i++) {
		var elems = document.getElementsByTagName(elements[i]);
		for(var x = 0; x < elems.length; x++) {
			nodes.push(elems[x]);
		}
	}
	return nodes;
}

function check_nodes(html) {
	var nodes = get_nodes(html)
	for(var i = 0; i < nodes.length; i++) {
		//the greater amount of links in a text the less likely it is to be relevant
		link_to_text_ratio = link_density(nodes[i])
		//get the amount of stopwords. A higher amount means it is more likely to be the body text
		stopwords = get_stopwords(nodes[i].innerHTML);
		stopwords_len = stopwords.length;
		
	}

}
