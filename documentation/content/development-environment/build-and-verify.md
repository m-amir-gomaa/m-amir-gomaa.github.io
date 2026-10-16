{
  "title": "Build, activate, verify, recover",
  "description": "A practical maintenance sequence that keeps source review, builds, activation and real runtime evidence distinct.",
  "date": "2026-10-16",
  "category": "Maintenance guide",
  "weight": 3,
  "download": "markdown/development-environment/build-and-verify.md"
}

## Review before changing the system

Inspect Git state and the relevant diff. Back up files being changed privately. Preserve unrelated work, the current lock file and a known working boot generation. New files referenced by a Git-backed flake must be deliberately included in its source.

Use a Git-filtered flake source. An explicit unfiltered `path:` source may include ignored private files before a build-time check can reject them.

## Match the check to the change

| Change | Relevant evidence |
|---|---|
| Documentation | Generated pages, links, keyboard and browser checks |
| User-profile application | Package build, executable, launch and a real file operation |
| NixOS service | Option evaluation, system build, activation and actual service behavior |
| Graphics/kernel update | Supported hardware branch, complete build, rollback route and controlled boot acceptance |
| Backup procedure | Retained-data fixtures, successful real copy and a separate restore test |

For this machine, the `nr` shortcut runs `sudo nixos-rebuild switch` against the NixOS flake. It does not decrypt secrets, stage files or commit changes. Administrative authentication remains an operating-system boundary.

## The verified maintenance example

The 16 October security pass enabled the stateful firewall, restricted local DNS, separated root's editor from mutable personal Lua, removed the global browser decoder-sandbox override, and removed unattended Git publication. The non-deleting HDD copy was repaired and actually completed. Syncthing received HDD mount guards and private-file exclusions; Unicode filename conflicts were corrected while preserving both original byte copies.

The system build also runs a source-hygiene check and eight backup-copy tests with disposable data. A successful build, an activated configuration and a working service are recorded separately.

## Recovery remains explicit

The same-machine HDD copies and legacy Borg repository are not an independent encrypted recovery plan. Credential recovery, backup encryption and a controlled system/driver upgrade remain separate work. Existing browser processes inherit their startup environment until restarted. An offline paired phone prevents an end-to-end sync observation even when local checks pass.

The original public configuration predates this local maintenance pass. Publishing a reviewed source revision is a separate step; the guides do not represent the baseline repository as already containing unpublished changes.

For software delivery, the same discipline applies: local tests, real persistence, browser journeys, CI, deployed checks and recovery each answer a different question. See [how to read the evidence](../../journal/reading-the-evidence/).
