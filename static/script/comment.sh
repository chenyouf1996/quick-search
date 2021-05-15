#!/bin/bash
osascript <<EOF
tell application "Finder"
	set theFile to POSIX file "$1"
	set oldComment to comment of (theFile as alias)
	return oldComment
end tell
EOF