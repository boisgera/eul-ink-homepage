#!/usr/bin/env python

# Python 3 Standard Library
import pathlib

# Third-Party Libraries
import euldoc
import pandoc
import plumbum

md_file = "index.md"

options = [
    # Standalone
    "--standalone",
    # Table of contents
    "--toc",
    "--toc-depth=3",
    # Typography
    # "--smart",
    # Language
    "-V",
    "lang=en",
    # Misc.
    "--section-divs",
    "--mathjax",
    "--email-obfuscation=none",
]

doc = pandoc.read(file=md_file)
doc = euldoc.html_transform(doc)
html_file = str(pathlib.Path(md_file).with_suffix(".html"))
pandoc.write(doc, file=html_file, format="html5", options=options)

eul_style = plumbum.local["eul-style"]
html_post = eul_style(html_file)
with open(html_file, "w") as file:
    file.write(html_post)
