#!/bin/bash
path=$1
text=$2
osascript <<EOF
tell application "Finder"
    set filepath to (POSIX file "$path")
    set fileExists to exists filepath
    if fileExists
        set comment of (filepath as alias) to "$text"
    end if
end tell
EOF
