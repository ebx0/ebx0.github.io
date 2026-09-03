# caustica-docs

The sources for <https://ebx0.github.io/caustica/>.

This branch holds the mkdocs project; [`main`](../../tree/main) holds the
rendered output under `caustica/`, which is what GitHub Pages serves. Nothing
is edited on `main` by hand — [the workflow](.github/workflows/build.yml)
writes it.

## Why the pages are not in the library repository

The library is `ebx0/caustica`. Its documentation used to live beside it and
was published from it; the site is a separate product with a separate release
rhythm, so it was moved out on 2026-09-03. Two links back remain, both
deliberate:

- the **API reference** is generated from caustica's docstrings, so the build
  installs the library from `master` rather than copying anything;
- **`docs/changelog.md`** includes the library's `CHANGELOG.md`, fetched at
  build time, so the two cannot drift.

## The pages that are a contract

`docs/gui_contract.md`, `docs/job_reference.md`, `docs/conventions.md` and
`docs/extending.md` are not prose about the library — they are the surface a
GUI, a job author and a plugin author write against. `tests/` asserts them
against the installed caustica, and the workflow runs those tests before it
publishes. A page that drifts from the code fails the build.

## Locally

```bash
python -m venv .venv && .venv/bin/pip install -r requirements.txt
curl -fsSL https://raw.githubusercontent.com/ebx0/caustica/master/CHANGELOG.md -o CHANGELOG.md
.venv/bin/python -m pytest
.venv/bin/python -m mkdocs serve
```
