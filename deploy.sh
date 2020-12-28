set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Uier/course_map master:gh-pages
