# Menampakkan Git Branch di Terminal

Tambahkan kode ini di bagian paling akhir dari `.bashrc`:

```bash
function changes_in_branch() { 
    if [ -d .git ]; then
    if expr length + "$(git status -s)" 2>&1 > /dev/null; then     
        echo -ne "\033[0;33m$(__git_ps1)\033[0m"; 
    else
        echo -ne "\033[0;32m$(__git_ps1)\033[0m"; fi; 
    fi
}
PS1='\[\033[0;32m\]\[\033[0m\033[0;32m\]\u\[\033[0;36m\] @ \[\033[0;36m\]\h \w\[\033[0m\]$(changes_in_branch)\n\[\033[0;32m\]└─\[\033[0m\033[0;32m\] \$\[\033[0m\033[0;32m\] ▶\[\033[0m\] '
```