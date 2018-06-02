#!/bin/sh

git grep clear | cut -d ':' -f 1 | sort | uniq | xargs sed -E -i -e '/^(function clear.*\(\))|(console.clear[[:blank:]]*=[[:blank:]]*function[[:blank:]]*\([[:blank:]]*\)).*\{$/,/^\}$/ {
	s/(return )?process.stdout.write.*/	process.stdout.cursorTo(0, 0); \
	process.stdout.clearScreenDown();/
}'

