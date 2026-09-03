# Contributing

The full guide lives in the repository, and it is the authority:
**[CONTRIBUTING.md](https://github.com/ebx0/caustica/blob/master/CONTRIBUTING.md)**. This page
is the part that is specific to this documentation site, plus the short version of the rest.

## The short version

**A claim is not true because the code looks right. It is true because something measured it.**
Nothing here is ticked off without a test or a measurement to point at. The same applies to
a pull request: a physics change lands with the reference it was
checked against — not a plot that looks right, but a test that fails if the number moves.

```bash
git clone https://github.com/ebx0/caustica && cd caustica
python -m venv .venv
.venv/Scripts/python -m pip install -e ".[dev,report]"   # Linux/macOS: .venv/bin/python
.venv/Scripts/python -m pytest
.venv/Scripts/python -m ruff check src tests apps
```

A clean checkout on a CPU-only laptop should be **green**, not yellow: GPU and k-Wave tests
skip themselves when the hardware or the binary is absent. If it is not green, that is worth
reporting on its own.

The single most useful thing to paste into a bug report is `caustica.env_report()` — the
interpreter, the platform, whether CuPy is usable, which CUDA it found, how much VRAM. For a
wrong *number*, include the job: a `caustica-job/1` JSON is self-contained by design, so one
file plus the number you expected is a complete report.

## What is API and what is not

Four surfaces are frozen; everything else is free to move between milestones.

1. **`caustica-job/1`** — `caustica schema` prints it, generated from the models, so the
   documentation cannot drift from the code.
2. **The [Python API](api/index.md)** — what the reference pages document.
3. **The [five extension points](extending.md)** — solver, medium kind, array kind, backend,
   report renderer, all over entry points.
4. **The [GUI contract](gui_contract.md)** — the run folder, the exit codes, `status.json`,
   `error.json`, the cancel signal, the progress payload.

Adding physics rarely means editing caustica. If it can be a solver, a medium kind, an array
kind, a backend or a report renderer, it belongs in your own package plugged in over an entry
point — that path is supported deliberately, and there is a copy-paste plugin package that
exercises all five.

Before writing physics, read [conventions that bite](conventions.md). The five that make a
result *silently* wrong rather than loudly broken: the phasor convention, absorption in Np/m
and only Np/m, `+z` as the beam axis, what `amplitude` means, and the PML being **inside** the
box you asked for.

## Working on the site

The site is MkDocs Material, and it lives in **its own repository** —
[`ebx0/ebx0.github.io`, branch `caustica-docs`](https://github.com/ebx0/ebx0.github.io/tree/caustica-docs).
The library repository holds no pages.

```bash
git clone -b caustica-docs https://github.com/ebx0/ebx0.github.io caustica-docs
cd caustica-docs
python -m venv .venv && .venv/bin/pip install -r requirements.txt
curl -fsSL https://raw.githubusercontent.com/ebx0/caustica/develop/CHANGELOG.md -o CHANGELOG.md
.venv/bin/python -m mkdocs serve
```

`requirements.txt` installs caustica from `develop`, because the API reference is generated
from its docstrings rather than written here.

Two gates run before anything is published. `mkdocs build --strict` fails on a broken internal
link or a page missing from the nav. `pytest` grades the four pages that are a *contract* —
[the GUI contract](gui_contract.md), [the job format](job_reference.md),
[the conventions](conventions.md) and [the extension points](extending.md) — against the
installed library, so a page that drifts from the code cannot go live.

Most pages are hand-written. **Four are generated, and must not be edited by hand:**

| Page | Regenerate with | Cost |
|---|---|---|
| the ten-step diagram | `python scripts/make_howto.py` | seconds |
| the landing-page animation | `python scripts/make_hero.py` (`--resolve` re-solves) | ~2 min with `--resolve` |
| [Examples](examples.md) and its figures | `python scripts/make_examples.py` | ~10 min |
| [Performance](benchmarks.md) | `python scripts/make_benchmarks.py` | ~5 min |

Every figure and every number on those pages comes from a run the script performed. That is
the whole point: nothing on this site is a remembered result. **If you change something that
moves a number, rerun the script — do not edit the number.**

`docs/changelog.md` is also not a source: it pulls the library's `CHANGELOG.md` in at build
time, so edit [that one](https://github.com/ebx0/caustica/blob/master/CHANGELOG.md).

## Licence

MIT. By contributing you agree your contribution is licensed the same way.
