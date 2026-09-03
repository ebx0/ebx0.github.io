"""The Colab bridge's exit-code glosses are a second copy of a frozen table.

Lifted out of caustica's ``tests/test_colab.py`` when the documentation moved
to its own repository. The other side of the comparison — ``docs/gui_contract.md``
— lives here now, so the comparison lives here too.
"""

from __future__ import annotations

import re
from pathlib import Path

import caustica.colab as colab

DOC = Path(__file__).resolve().parents[1] / "docs" / "gui_contract.md"


def test_the_exit_code_glosses_are_the_documented_ones():
    """``_EXIT_MEANING`` is a second copy of a frozen table — pin it.

    The bridge prints a one-line gloss per exit code. Those numbers are the
    queue's API and their meanings live in ``docs/gui_contract.md``; a copy
    nothing compares is a copy that drifts, and this one did on the day it
    was written (it described the ``config`` *stage* instead of the exit
    code, so a CPU-time refusal printed "the job would not load or build"
    over an ``error.json`` that said ``stage: gate``).
    """
    page = DOC.read_text(encoding="utf-8")
    documented = {
        int(m.group(1)): m.group(2).strip()
        for m in re.finditer(r"^\| `(\d)` \| `EXIT_\w+` \| (.+?) \|$", page, re.MULTILINE)
    }
    assert documented, "the exit-code table moved; this test cannot see it any more"
    for code, gloss in colab._EXIT_MEANING.items():
        assert code in documented, f"exit {code} is not in the documented table"
        assert gloss == documented[code], (
            f"exit {code} gloss drifted from docs/gui_contract.md:\n"
            f"  bridge: {gloss}\n  page:   {documented[code]}"
        )
    assert set(colab._EXIT_MEANING) == set(documented) - {0}  # every failure, no invention
