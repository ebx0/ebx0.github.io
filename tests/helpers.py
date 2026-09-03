"""The two job helpers the contract tests need, lifted from caustica's suite.

They are copied rather than imported because caustica ships a wheel, not its
tests. Both are deliberately tiny: a mini bowl job that solves in a couple of
seconds on CPU, and the runner options that skip the timing probe.
"""

from __future__ import annotations

import json
from pathlib import Path

from caustica.config.job import JOB_FORMAT
from caustica.runner import RunnerOptions


def mini_job(tmp_path: Path, name: str = "mini", **over) -> Path:
    d = {
        "format": JOB_FORMAT,
        "kind": "explicit",
        "name": name,
        "medium": {"kind": "homogeneous"},
        "grid": {"ndim": 3, "dx_mm": 0.75, "size_mm": [18, 18, 24], "pml": {"thickness_mm": 3.0}},
        "source": {
            "kind": "array",
            "array": {"kind": "bowl", "d_outer_mm": 10.0, "roc_mm": 12.0},
            "apex_mm": [9, 9, 6.0],
        },
        "drive": {"f0_mhz": 1.0, "amplitude_kpa": 100.0},
        "run": {"spec": {"min_settle_periods": 2, "max_settle_periods": 6}, "harmonics": [1]},
        "solver": "linear",
    }
    d.update(over)
    p = tmp_path / f"{name}.json"
    p.write_text(json.dumps(d), encoding="utf-8")
    return p


def opts(**kw) -> RunnerOptions:
    kw.setdefault("measure", False)  # skip the 20-step probe in tests
    kw.setdefault("status_interval_s", 0.0)  # write status on every period
    return RunnerOptions(**kw)
