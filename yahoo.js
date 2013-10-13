var str = "a\nb\nc\nb\na"
var count = 1
var dict = {}
for (var i = 0; i < str.length; i++) {
	if (str[i] == '\n')
		count++
	if (!dict[str[i]])
		dict[str[i]] = []
	dict[str[i]].push(count)
}
delete(dict['\n'])
console.log(dict)