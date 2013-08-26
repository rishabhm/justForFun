/**
	Simple script that allows you to scrape a website and download files
	The example below looks for links to pdfs and downloads them into your local directory
**/
var scraper = require('scraper'),
	links = [],
    http = require('http'),
    fs = require('fs'),
	link, file, request, filename;
scraper(/* enter site url */, function (err, j) {
	j('a').each(function () {
		link = j(this).attr('href');
		link.slice(-4) === '.pdf' ? links.push(link) : null;

	});

	links.forEach(function (url) {
		filename = url.split('/').slice(-1)[0];
		file = fs.createWriteStream(filename);
		request = http.get(url, function (res) {
			res.pipe(file);
		});
	})
});