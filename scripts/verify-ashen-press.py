"""Verify the registered ThreeUI renderer without compiling or rewriting it."""
from pathlib import Path
import hashlib
import json

root = Path(__file__).resolve().parents[1]
manifest = json.loads((root / "ashen-press-source.json").read_text(encoding="utf-8"))
payload = (root / manifest["path"]).read_bytes()
actual = hashlib.sha256(payload).hexdigest()
if actual != manifest["sha256"] or len(payload) != manifest["bytes"]:
    raise SystemExit(f"Ashen Press source drift: {actual}")
print(f"Ashen Press verified: {actual}")
