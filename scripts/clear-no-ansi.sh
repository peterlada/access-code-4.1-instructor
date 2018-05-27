#!/bin/sh

git grep clear | cut -d ':' -f 1 | sort | uniq | xargs sed -i -e '/^function clear.*().*{$/,/^}$/ {
	s/process.stdout.write.*/	process.stdout.cursorTo(0, 0); \
	process.stdout.clearScreenDown();/
}'

