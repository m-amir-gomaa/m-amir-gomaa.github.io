# Neovim: find, edit, inspect

Reviewed: 2026-10-19

## Follow a small loop

Find a file, make a focused change, inspect diagnostics, format it, and run the relevant check. The editor shortens that loop; it does not establish that a change is correct.

The configured leader is **Space**. These mappings come from the [published Neovim source](https://github.com/m-amir-gomaa/nvim/tree/e368a6c), inspected alongside the local checkout.

| Action | Configured mapping | Tool |
|---|---|---|
| Find project files | Space, s, f | Telescope |
| Search file contents | Space, s, g | Telescope live grep |
| Remember a working file | Space, a | Harpoon |
| Open the remembered-file menu | Ctrl + e | Harpoon |
| Format a buffer | Space, f | Conform |
| Move between editor splits | Ctrl + h / j / k / l | Neovim window navigation |

## Language support through Nix

The Neovim wrapper supplies language-server and formatter executables: gopls, TypeScript language server, nil, Pyright, clangd, Lua language server, Marksman and rust-analyzer among them. Formatting tools include Stylua, nixfmt, gofumpt, Black and Ruff.

This avoids depending on ordinary Linux binary downloads that may assume filesystem paths unavailable on NixOS. Plugin configuration and language-server behavior still need testing for the particular project.

## Code and technical writing

The setup includes Treesitter grammars, Telescope, Harpoon, Conform and Markdown-oriented tooling. It supports moving between source code and technical notes while keeping tools close to the current buffer.

The Workbench's browser editor demonstrates a deliberately small subset: h/j/k/l movement, i for insert, Escape for normal mode, x for deletion and u for undo. File switching retains each temporary buffer within the page. It is an interactive keyboard sketch of the workflow, with native browser controls available throughout.

## Verification boundary

An actual headless Neovim startup succeeded on 16 October, and twelve selected language-server/formatter executables resolved inside its wrapped environment. That check does not certify every plugin, language server or debugger. The next deeper check is a representative edit/diagnostic/format/test journey for each language actually used on a client project.
