"""``docs/extending.md`` cannot rot.

Lifted out of caustica's ``tests/test_plugins.py`` when the documentation
moved to its own repository. The gate did not move with the page by accident:
the doc is what an outsider writes their ``pyproject.toml`` against, so it
has to be checked against the library that will read it, and this build
installs that library.
"""

from __future__ import annotations

import ast
import re
from pathlib import Path

from caustica.registry import ENTRY_POINT_GROUPS

EXTENDING_DOC = Path(__file__).resolve().parents[1] / "docs" / "extending.md"


def test_extending_doc_declares_exactly_the_frozen_groups():
    """The doc is what an outsider writes their pyproject.toml against.

    A group name that drifts here produces a plugin that installs cleanly and
    is never discovered — the worst kind of failure, because nothing errors.
    """
    doc = EXTENDING_DOC.read_text(encoding="utf-8")
    declared = re.findall(r'\[project\.entry-points\."([^"]+)"\]', doc)
    assert set(declared) == set(ENTRY_POINT_GROUPS), declared
    assert len(declared) == len(ENTRY_POINT_GROUPS), "a group is declared twice"
    for group in ENTRY_POINT_GROUPS:
        assert doc.count(group) >= 2, f"{group} is declared but never explained"


def test_extending_doc_skeleton_is_real_python():
    """The 'copy-paste installable package' has to be copy-pasteable."""
    doc = EXTENDING_DOC.read_text(encoding="utf-8")
    blocks = re.findall(r"```python\n(.*?)```", doc, re.S)
    assert blocks, "the skeleton python block vanished"
    skeleton = next((b for b in blocks if "class GelMediumConfig" in b), None)
    assert skeleton is not None, "the skeleton no longer defines the medium kind"
    ast.parse(skeleton)  # a SyntaxError here is the point of the test
    for symbol in (
        "class MySolver",
        "def make_backend",
        "def render_report",
        "class RingArrayConfig",
    ):
        assert symbol in skeleton, f"the skeleton dropped {symbol}"
