# pending

Pages that document a caustica symbol which has **not reached `master` yet**.
`requirements.txt` installs the library from `master`, so a page that names an
unmerged symbol aborts the build — mkdocstrings cannot collect what is not
there. Nothing in this folder is inside `docs_dir`, so mkdocs never reads it.

| file | waiting on |
|---|---|
| `api-geometry.md` | `caustica.geometry.offgrid` — `spherical_cap_deposit`, `band_limited_weights`, `Deposit`, `star_offsets`, added on the branch `validation/absolute-amplitude-and-harmonics` (`2ea864d`, `25a0d79`) |

When that branch lands on `master`, copy the file over the page it replaces and
delete it here:

```bash
mv pending/api-geometry.md docs/api/geometry.md
```
