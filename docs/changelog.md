# Changelog

Nothing has been released yet: `0.1.0` is the first planned release, and it is gated on the
ITRUSST benchmark suite — all nine cases, acoustic-only — rather than on a date. What follows
is what is on `master` today.

This page **is** the repository's `CHANGELOG.md`, included rather than copied, so the two
cannot drift apart. The rule behind every entry — nothing is claimed without a measurement
to point at — is kept honest on [what has been measured](validation.md).

!!! info "Nothing below is a stability promise"

    Between milestones the API moves. Four surfaces are meant to be depended on — the job
    schema, the documented [Python API](api/index.md), the
    [five extension points](extending.md) and the [GUI contract](gui_contract.md) — and even
    those carry a `/1` in their names so a break can be announced rather than discovered.

---

--8<-- "CHANGELOG.md"
