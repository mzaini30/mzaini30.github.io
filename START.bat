@echo off

set browser=chrome

title Zen

start %browser% http://localhost:4000
bundle exec jekyll s