cd .git/hooks/
cp pre-commit.sample pre-commit
echo 'windicss "*.html" "./!(_site)/**/*.html" -mto "static/windi.css"' > pre-commit
