GIT_COMMIT="$(git log --date=format:'%Y/%m/%d %A @ %H:%M:%S' -1 --format='%cd %H %B')"
echo "Setting env GIT_COMMIT=$GIT_COMMIT"

PCF_PUSH_TIMESTAMP="$(date '+%Y/%m/%d %A @ %H:%M:%S')"
echo "Setting env PCF_PUSH_TIMESTAMP=$PCF_PUSH_TIMESTAMP"

cf push -f manifest.yml --var GIT_COMMIT="$GIT_COMMIT" --var PCF_PUSH_TIMESTAMP="$PCF_PUSH_TIMESTAMP"