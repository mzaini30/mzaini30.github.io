title %cd%
set /a port=%random% * (9999 - 1111 + 1) / 32768 + 1111
start chrome http://localhost:%port%
jekyll s --port %port%