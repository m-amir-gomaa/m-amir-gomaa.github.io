# How the environment fits together

Reviewed: 2026-10-18

## Start with the source

[NixOS configuration repository](https://github.com/m-amir-gomaa/NixOSenv) · [Published Neovim configuration](https://github.com/m-amir-gomaa/nvim/tree/e368a6c)

The public NixOS repository is the published baseline. The local security maintenance verified on 16 October has not yet been committed to that repository. The interactive guide uses short, explanatory examples; it is not a copy of private machine state.

## Two configuration layers

The flake pins Nixpkgs, Home Manager and Fenix. NixOS declares system packages, hardware integration and services. Home Manager declares user packages and configuration links. The system build integrates both layers, so package/configuration changes can be reviewed together.

`flake.lock` records exact input revisions. A pinned build still needs compatible hardware, application data and separately restored credentials.

## A keyboard-first desktop

Hyprland runs the Wayland desktop, with XWayland available for applications that need it. SDDM handles login; Kitty provides the terminal, Waybar the status bar, and Rofi the launcher. PipeWire and WirePlumber provide audio and media routing.

Configured desktop shortcuts include Super + Return for the terminal, Super + B for the browser, Super + Space for the launcher and Super + O for file search. These are configuration examples rather than browser shortcuts.

Intel graphics drive the laptop display. NVIDIA is available through explicit offload. This separation keeps ordinary desktop work on the integrated GPU while allowing a compatible task to request the dedicated GPU.

## Packages and mutable state

Nix supplies Neovim and its language servers. Personal Lua configuration comes from a separate live Neovim checkout. Application data, working trees, browser profiles, credentials and databases are separate state; they are not recreated by a package build.

Secrets belong outside public source and outside unfiltered flake sources. Git ignoring a file does not protect it from every other tool that copies a directory.

## What was actually checked

On 16 October, the prepared security configuration passed a full NixOS build and was activated successfully. Both Home Manager activations succeeded. System DNS resolved a real domain, NVIDIA-offloaded OpenGL reported the MX350 renderer, and Hyprland reported no configuration errors. Both storage drives passed fresh short self-tests. These are dated observations, not a guarantee about every future workload.

Read [build and verification](../build-and-verify/) for the maintenance sequence and remaining boundaries, or return to [the interactive Workbench](../).
